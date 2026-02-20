const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

/**
 * Build a valid absolute image URL from a backend image path.
 */
function buildImageUrl(path) {
    if (!path) return null;
    if (path.startsWith("http")) return path;
    // Only treat paths with a leading slash as valid server paths
    if (path.startsWith("/")) return `${API_BASE_URL}${path}`;
    // Bare filenames without a path are likely broken data — skip
    return null;
}

/**
 * Transform a Laravel product into the Shopify edges/node shape
 * that all existing components expect.
 */
function transformProduct(product) {

    // Build images edges from featured_image + gallery
    const imageEdges = [];
    const featuredSrc = buildImageUrl(product.featured_image);
    if (featuredSrc) {
        imageEdges.push({
            node: {
                id: `img_featured_${product.id}`,
                originalSrc: featuredSrc,
            },
        });
    }
    if (product.gallery && Array.isArray(product.gallery)) {
        product.gallery.forEach((img, i) => {
            const raw = typeof img === "string" ? img : img.url || img.path;
            const src = buildImageUrl(raw);
            if (src) {
                imageEdges.push({
                    node: {
                        id: `img_gallery_${product.id}_${i}`,
                        originalSrc: src,
                    },
                });
            }
        });
    }

    // Build options array — deduplicate by name and filter out empty ones
    const seenOptionNames = new Set();
    const dedupedOptions = (product.options || []).filter((opt) => {
        if (seenOptionNames.has(opt.name) || !opt.values?.length) return false;
        seenOptionNames.add(opt.name);
        return true;
    });

    const options = dedupedOptions.map((opt) => ({
        id: `opt_${opt.id}`,
        name: opt.name,
        values: opt.values.map((v) => v.name),
    }));

    // Build variant edges from the cartesian product of option values.
    // Each variant includes a price = sale_price + sum of option-value price deltas,
    // and compareAtPriceV2 = original_price + sum of deltas (if original_price exists and differs).
    const optionValueArrays = dedupedOptions.map((opt) => opt.values);
    const variantEdges = [];

    const buildVariants = (current, depth) => {
        if (depth === optionValueArrays.length) {
            const priceDelta = current.reduce((sum, v) => sum + (parseFloat(v.price) || 0), 0);
            const salePrice = (parseFloat(product.sale_price) || 0) + priceDelta;
            const originalPrice = (parseFloat(product.original_price) || 0) + priceDelta;
            const hasDiscount = product.original_price && originalPrice > salePrice;

            const variantTitle = current.map((v) => v.name).join(" / ");
            const variantId = `var_${product.id}_${current.map((v) => v.id).join("_")}`;

            variantEdges.push({
                node: {
                    id: variantId,
                    sku: `${product.slug}-${current.map((v) => v.id).join("-")}`,
                    title: variantTitle,
                    quantityAvailable: 10,
                    priceV2: { amount: salePrice.toFixed(2) },
                    compareAtPriceV2: hasDiscount ? { amount: originalPrice.toFixed(2) } : null,
                    selectedOptions: current.map((v, i) => ({
                        name: dedupedOptions[i].name,
                        value: v.name,
                    })),
                },
            });
            return;
        }
        for (const val of optionValueArrays[depth]) {
            buildVariants([...current, val], depth + 1);
        }
    };

    if (optionValueArrays.length > 0) {
        buildVariants([], 0);
    } else {
        // No options — single default variant
        variantEdges.push({
            node: {
                id: `var_${product.id}_default`,
                sku: product.slug,
                title: "Default",
                quantityAvailable: 10,
                priceV2: { amount: parseFloat(product.sale_price || 0).toFixed(2) },
                compareAtPriceV2:
                    product.original_price && parseFloat(product.original_price) > parseFloat(product.sale_price)
                        ? { amount: parseFloat(product.original_price).toFixed(2) }
                        : null,
                selectedOptions: [],
            },
        });
    }

    return {
        node: {
            id: `prod_${product.id}`,
            title: product.title,
            handle: product.slug,
            description: product.description || "",
            descriptionHtml: product.description || "",
            options,
            images: { edges: imageEdges },
            variants: { edges: variantEdges },
            tags: [],
            collections: { edges: [] },
        },
    };
}

/**
 * Fetch all products from the Laravel API and return in Shopify shape.
 * Returns { products: { edges: [...] } }
 */
export async function fetchProducts() {
    try {
        const res = await fetch(`${API_BASE_URL}/api/products`);
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        const data = await res.json();
        const edges = (Array.isArray(data) ? data : data.data || []).map(transformProduct);
        return { products: { edges } };
    } catch (err) {
        console.error("fetchProducts failed:", err.message);
        return { products: { edges: [] } };
    }
}

/**
 * Fetch a single product by slug.
 * Returns the product node directly (like Shopify's productByHandle).
 */
export async function fetchProductBySlug(slug) {
    try {
        const res = await fetch(`${API_BASE_URL}/api/products`);
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        const data = await res.json();
        const products = Array.isArray(data) ? data : data.data || [];
        const product = products.find((p) => p.slug === slug);
        if (!product) return null;
        return transformProduct(product).node;
    } catch (err) {
        console.error("fetchProductBySlug failed:", err.message);
        return null;
    }
}

/**
 * Fetch all categories from the Laravel API and return in Shopify collection shape.
 * Returns array of { node: { id, title, handle, image: { originalSrc } } }
 */
export async function fetchCategories() {
    try {
        const res = await fetch(`${API_BASE_URL}/api/categories`);
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        const data = await res.json();
        const categories = Array.isArray(data) ? data : data.data || [];
        return categories.map((cat) => ({
            node: {
                id: `cat_${cat.id}`,
                title: cat.name,
                handle: cat.slug,
                image: {
                    originalSrc: buildImageUrl(cat.image) || "",
                },
            },
        }));
    } catch (err) {
        console.error("fetchCategories failed:", err.message);
        return [];
    }
}
