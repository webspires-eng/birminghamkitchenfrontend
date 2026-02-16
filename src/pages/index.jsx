import Head from "next/head";
import Layout from "@components/layout";
import settings from "@data/settings.json";
import LatestBlog from "@components/blog/posts";
import Promotions from "@components/promotions";
import Categories from "@components/categories";
import sliderData from "@data/slider/home-2.json";
import categoriesData from "@data/categories.json";
import { ProductsTab } from "@components/product/feed";
import { SliderTwo as Slider } from "@components/slider";
import Features from "@components/features";
import BrandShowcase from "@components/brand-showcase";
import SectionTitle from "@components/ui/section-title";
import { client, blogsQuery, productsQuery, collectionsQuery } from "@graphql";

const HomeTwo = ({ blogs, products, collections }) => {
    const displayCollections = collections?.length > 0 ? collections : categoriesData;
    return (
        <Layout bg="white">
            <Head>
                <title>{"Home :: " + settings?.title}</title>
                <meta name="description" content={settings?.description} />
            </Head>

            <Slider
                animate={true}
                data={sliderData}
                settings={{ effect: "fade", speed: 1000 }}
            />

            <Features />

            <div className="collection-section py-5 my-0 bg-white">
                <SectionTitle
                    title="Shop By Category"
                    content="Browse our wide selection of bespoke kitchen and bedroom collections."
                />
                <Categories categories={displayCollections} pt={0} pb={80} />
            </div>

            <BrandShowcase />

            <div className="products-section py-5 my-4 bg-white">
                <SectionTitle
                    title="Our Best Sellers"
                    content="Hand-picked premium products for your modern home."
                />
                <ProductsTab products={products} limit={8} />
            </div>

            <Promotions fluid={true} />

            <div className="blog-section py-5 my-4 bg-white">
                <SectionTitle
                    title="Latest From Journal"
                    content="Experience modern living through our latest design tips and project showcases."
                />
                <LatestBlog posts={blogs} pt={0} pb={80} />
            </div>
        </Layout>
    );
};

export const getStaticProps = async () => {
    const blogsData = await client(blogsQuery(4)),
        blogs = blogsData?.blogs?.edges[0]?.node?.articles?.edges,
        productsData = await client(productsQuery(50)),
        products = productsData?.products?.edges,
        collectionsData = await client(collectionsQuery(5)),
        collections = collectionsData?.collections?.edges;

    return {
        props: {
            blogs,
            products,
            collections,
        },
        revalidate: 60,
    };
};

export default HomeTwo;
