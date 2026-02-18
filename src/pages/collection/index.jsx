import Head from "next/head";
import Layout from "@components/layout";
import settings from "@data/settings.json";
import Category from "@components/category";
import { Container, Row, Col } from "@bootstrap";
import Breadcrumb from "@components/ui/breadcrumb";
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

            <Breadcrumb pageTitle="All Collections" />

            <Container className="standard-page-padding">
                <style jsx>{`
                    .standard-page-padding {
                        padding-top: 60px;
                        padding-bottom: 60px;
                    }
                    @media (max-width: 768px) {
                        .standard-page-padding {
                            padding-top: 40px !important;
                            padding-bottom: 40px !important;
                        }
                    }
                `}</style>
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
