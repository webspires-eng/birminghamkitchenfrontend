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
        <Layout bg="#fcfcfc">
            <Head>
                <title>{"Birmingham Kitchen & Bedroom | Bespoke Design"}</title>
                <meta name="description" content={settings?.description} />
            </Head>

            <Slider
                animate={true}
                data={sliderData}
                settings={{
                    effect: "fade",
                    speed: 1000,
                    autoplay: {
                        delay: 6000,
                        disableOnInteraction: false
                    }
                }}
            />

            <Features />

            <div className="collection-section py-5 my-5">
                <SectionTitle
                    title="Curated Collections"
                    content="Explore our signature ranges, designed to bring elegance and functionality to every corner of your home."
                />
                <Categories categories={displayCollections} pt={0} pb={60} />
            </div>

            <BrandShowcase />

            <div className="products-section py-5 my-5 bg-white">
                <SectionTitle
                    title="Best Sellers"
                    content="Discover the pieces our customers love most. Timeless quality meets modern design."
                />
                <ProductsTab products={products} limit={8} />

                {/* Add a view all button wrapper if needed later */}
                <div className="text-center mt-5">
                    <a href="/shop" style={{ textDecoration: 'underline', color: '#333', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '13px' }}>View All Products</a>
                </div>
            </div>

            <div className="my-5">
                <Promotions fluid={true} />
            </div>

            <div className="blog-section py-5 my-5 bg-light">
                <SectionTitle
                    title="Design Journal"
                    content="Inspiration, tips, and stories from the world of bespoke interiors."
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
