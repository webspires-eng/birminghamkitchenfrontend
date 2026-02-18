import Head from "next/head";
import settings from "@data/settings";
import Layout from "@components/layout";
import ShopProductsFeed from "@components/shop";
import EmptyProduct from "@components/ui/empty";
import { client, collectionQuery } from "@graphql";
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

export const getServerSideProps = async ({ params, query }) => {
    const { slug } = params;
    const { sort } = query;
    const sortKey = sort?.split("-")[0].toUpperCase();
    const reverse = sort?.split("-")[1] !== "ascending";
    const collectionData = await client(collectionQuery(slug, sortKey, reverse));

    return {
        props: {
            collection: {
                title: collectionData?.collectionByHandle?.title,
                products: collectionData?.collectionByHandle?.products?.edges,
            },
        }
    };
};

export default CollectionPage;
