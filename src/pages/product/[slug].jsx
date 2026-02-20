import Head from "next/head";
import settings from "@data/settings";
import { useRouter } from "next/router";
import Layout from "@components/layout";
import Loader from "@components/ui/loader";
import Breadcrumb from "@components/ui/breadcrumb";
import { Fragment, useState, useEffect } from "react";
import { fetchProducts, fetchProductById } from "@lib/api";
import ProductDetailsContent from "@components/product/details";
import RelatedProducts from "@components/product/feed/related-products";
import ProductDescriptionReview from "@components/product/details/desc-review";

const ProductDetailsPage = ({ products, product }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const handleStart = (url) => url !== router.pathname ? setIsLoading(true) : setIsLoading(false);
        const handleComplete = () => setIsLoading(false);

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);
    }, [router]);

    return (
        <Layout>
            <Head>
                <title>{product?.title + " :: " + settings?.title}</title>
                <meta name="description" content={settings?.title} />
            </Head>


            {isLoading ? <Loader /> : (
                <Fragment>
                    <ProductDetailsContent product={product} />

                    <ProductDescriptionReview product={product} mt={[55, null, 93]} />

                    <RelatedProducts
                        products={products}
                        tags={product?.tags}
                        mt={[48, null, 85]}
                        pb={[60, null, 100]}
                        categories={product?.collections?.edges}
                    />
                </Fragment>
            )}
        </Layout>
    );
};

export const getServerSideProps = async ({ params }) => {
    const { slug } = params;
    const product = await fetchProductById(slug);
    const productsData = await fetchProducts();

    if (!product) {
        return { notFound: true };
    }

    return {
        props: {
            product,
            products: productsData?.products?.edges || [],
        },
    };
};

export default ProductDetailsPage;
