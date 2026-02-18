import { GraphQLClient } from 'graphql-request';

const client = async (query, variables) => {
    const storeName = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_NAME;
    const accessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;
    const customApiUrl = process.env.NEXT_PUBLIC_GRAPHQL_API_URL;

    // Check if configured properly for Shopify OR Custom API
    const isConfigured = customApiUrl || (storeName && storeName !== "your store name" && accessToken && accessToken !== "your store access token");

    const endpoint = customApiUrl || `https://${storeName}.myshopify.com/api/2021-07/graphql.json`;

    try {
        if (!isConfigured) {
            throw new Error("API not configured, using mock data.");
        }

        const graphQLClient = new GraphQLClient(endpoint, {
            headers: {
                "Content-Type": "application/json",
                "X-Shopify-Storefront-Access-Token": accessToken
            }
        });

        return await graphQLClient.request(query, variables);
    } catch (error) {
        console.warn("GraphQL request failed, returning mock data to prevent crash.");
        console.warn(error.message);
        // Mock Data
        const mockProducts = [
            {
                node: {
                    id: "prod_1",
                    title: "Sofia Ottoman Divan Bed",
                    handle: "sofia-ottoman-divan-bed",
                    description: "The Sofia Ottoman Divan Bed is a perfect blend of style and practicality. Upholstered in premium plush velvet, it features a deep storage base and a stunning 54-inch floor-standing headboard.",
                    images: {
                        edges: [
                            { node: { id: "img_s1", originalSrc: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=1000" } },
                            { node: { id: "img_s2", originalSrc: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000&auto=format&fit=crop" } },
                            { node: { id: "img_s3", originalSrc: "https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa?q=80&w=1000&auto=format&fit=crop" } },
                            { node: { id: "img_s4", originalSrc: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=1000&auto=format&fit=crop" } },
                            { node: { id: "img_s5", originalSrc: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1000" } }
                        ]
                    },
                    variants: {
                        edges: [
                            {
                                node: {
                                    id: "var_1",
                                    title: "Pink Plush Velvet / Double / Free 54\" Headboard",
                                    priceV2: { amount: "419.99" },
                                    compareAtPriceV2: { amount: "839.98" },
                                    sku: "SOFIA-PINK-DBL",
                                    quantityAvailable: 10,
                                    selectedOptions: [
                                        { name: "Colour", value: "Pink Plush Velvet" },
                                        { name: "Size", value: "Double" },
                                        { name: "Headboard", value: "Free 54\" Headboard" }
                                    ]
                                }
                            },
                            {
                                node: {
                                    id: "var_2",
                                    title: "Grey Plush Velvet / King / Free 54\" Headboard",
                                    priceV2: { amount: "449.99" },
                                    compareAtPriceV2: { amount: "899.98" },
                                    sku: "SOFIA-GREY-KING",
                                    quantityAvailable: 10,
                                    selectedOptions: [
                                        { name: "Colour", value: "Grey Plush Velvet" },
                                        { name: "Size", value: "King" },
                                        { name: "Headboard", value: "Free 54\" Headboard" }
                                    ]
                                }
                            }
                        ]
                    },
                    tags: ["Bed", "Ottoman", "Velvet"],
                    collections: { edges: [] },
                    options: [
                        {
                            id: "opt_1",
                            name: "Colour",
                            values: ["Emerald Coniston", "Blue Coniston", "Pink Coniston", "Armour Coniston", "Charcoal Coniston", "Mink Coniston", "Almond Coniston", "Black Plush Velvet", "Blue Plush Velvet", "Mink Plush Velvet", "Pink Plush Velvet"]
                        },
                        {
                            id: "opt_2",
                            name: "Size",
                            values: ["Small Single 2FT6", "Single 3FT", "Small Double 4FT", "Double 4FT6", "King 5FT", "Super King 6FT"]
                        },
                        {
                            id: "opt_3",
                            name: "Headboard",
                            values: ["Free 54\" Headboard", "Premium 54\" Headboard"]
                        }
                    ]
                }
            }
        ];

        // Check for specific handle in variables or query
        const handleMatch = query.match(/handle:\s*"([^"]+)"/);
        const handle = variables?.handle || (handleMatch ? handleMatch[1] : null);

        let productByHandle = null;
        let collectionByHandle = null;

        if (handle) {
            // Check if it's a product query
            const foundProduct = mockProducts.find(p => p.node.handle === handle);
            if (foundProduct) {
                productByHandle = foundProduct.node;
            }

            // Mock Data for Collection
            // If the query asks for collectionByHandle, return a mock collection
            if (query.includes('collectionByHandle')) {
                collectionByHandle = {
                    title: handle.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
                    handle: handle,
                    products: {
                        edges: mockProducts // For now, return all products for any collection
                    }
                };
            }
        }

        return {
            blogs: {
                edges: [
                    {
                        node: {
                            id: "blog_1",
                            title: "Latest Design Trends",
                            handle: "latest-design-trends",
                            excerpt: "Discover the hottest furniture trends of 2026.",
                            publishedAt: "2026-02-15",
                            authorV2: { name: "John Doe" },
                            image: { originalSrc: "/assets/images/products/media__1771225471564.png" },
                            contentHtml: "<p>Content goes here...</p>",
                            articles: { edges: [] }
                        }
                    }
                ]
            },
            products: { edges: mockProducts },
            productByHandle: productByHandle,
            collectionByHandle: collectionByHandle,
            collections: { edges: [] },
            siteSettings: null,
            customer: null
        };
    }
}

export default client;