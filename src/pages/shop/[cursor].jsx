import Head from "next/head";
import settings from "@data/settings";
import Layout from "@components/layout";
import { fetchProducts } from "@lib/api";
import ShopProductsFeed from "@components/shop";
import Breadcrumb from "@components/ui/breadcrumb";

const ShopPageWithPaginate = ({ products }) => {
    return (
        <Layout>
            <Head>
                <title>{"Products :: " + settings?.title}</title>
                <meta name="description" content={settings?.title} />
            </Head>

            <Breadcrumb py={[40, 80]} mb={[60, null, 100]} pageTitle="Products" />

            <ShopProductsFeed products={products} />
        </Layout>
    );
};

export const getServerSideProps = async ({ query }) => {
    const productsData = await fetchProducts();
    const products = productsData?.products?.edges || [];

    return {
        props: {
            products,
        },
    };
};

export default ShopPageWithPaginate;
