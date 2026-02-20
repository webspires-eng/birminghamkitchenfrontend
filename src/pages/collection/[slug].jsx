import Head from "next/head";
import settings from "@data/settings";
import Layout from "@components/layout";
import ShopProductsFeed from "@components/shop";
import EmptyProduct from "@components/ui/empty";
import { fetchProductsByCategory } from "@lib/api";
import Breadcrumb from "@components/ui/breadcrumb";

const CollectionPage = ({ collection }) => {
    return (
        <Layout>
            <Head>
                <title>{collection?.title + " | Birmingham Kitchens & Bedrooms"}</title>
                <meta name="description" content={`Shop our ${collection?.title} collection. Premium quality, crafted in the UK.`} />
            </Head>

            <Breadcrumb
                pageTitle={collection?.title}
                thumb="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2000"
            />

            {collection?.products?.length ? (
                <ShopProductsFeed products={collection?.products} />
            ) : (
                <EmptyProduct />
            )}
        </Layout>
    );
};

export const getServerSideProps = async ({ params }) => {
    const { slug } = params;
    const data = await fetchProductsByCategory(slug);

    return {
        props: {
            collection: {
                title: data.title,
                products: data.products,
            },
        }
    };
};

export default CollectionPage;
