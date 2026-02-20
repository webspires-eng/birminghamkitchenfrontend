import Head from "next/head";
import settings from "@data/settings";
import Layout from "@components/layout";
import Breadcrumb from "@components/ui/breadcrumb";
import ShopProductsFeed from "@components/shop";
import { fetchProducts } from "@lib/api";

const ShopPage = ({ products }) => {
    return (
        <Layout>
            <Head>
                <title>{"Products :: " + settings?.title}</title>
                <meta name="description" content={settings?.title} />
            </Head>

            <Breadcrumb
                pageTitle="Products"
                thumb="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=2000"
            />

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

export default ShopPage;
