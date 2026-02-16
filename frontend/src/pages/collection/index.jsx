import Head from "next/head";
import Layout from "@components/layout";
import settings from "@data/settings.json";
import Category from "@components/category";
import { Container, Row, Col } from "@bootstrap";
import categoriesData from "@data/categories.json";
import { client, collectionsQuery } from "@graphql";

const CollectionsPage = ({ collections }) => {
    const displayCollections = collections?.length > 0 ? collections : categoriesData;

    return (
        <Layout bg="gray250">
            <Head>
                <title>{"Collections :: " + settings?.title}</title>
                <meta name="description" content={settings?.description} />
            </Head>

            <div className="page-header text-center" style={{ padding: '80px 0', background: '#f8f8f8' }}>
                <h1 style={{ fontSize: '40px', fontWeight: '700', color: '#191919' }}>All Collections</h1>
                <p style={{ color: '#666', marginTop: '10px' }}>Explore our range of premium kitchens, bedrooms, and more.</p>
            </div>

            <Container className="py-5">
                <Row>
                    {displayCollections?.map(({ node: category }) => (
                        <Col key={category?.id} md={6} lg={4} className="mb-4">
                            <Category
                                category={category?.title}
                                icon={category?.image?.originalSrc}
                                slug={`/collection/${category?.handle}`}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Layout>
    );
};

export const getStaticProps = async () => {
    const collectionsData = await client(collectionsQuery(50)),
        collections = collectionsData?.collections?.edges;

    return {
        props: {
            collections: collections || [],
        },
        revalidate: 60,
    };
};

export default CollectionsPage;
