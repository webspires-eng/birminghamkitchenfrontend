import Head from "next/head";
import Layout from "@components/layout";
import settings from "@data/settings.json";
import Categories from "@components/categories";
import sliderData from "@data/slider/home-2.json";
import categoriesData from "@data/categories.json";
import { ProductsTab } from "@components/product/feed";
import { SliderTwo as Slider } from "@components/slider";
import Features from "@components/features";
import BrandShowcase from "@components/brand-showcase";
import SectionTitle from "@components/ui/section-title";
import { client, productsQuery, collectionsQuery } from "@graphql";

const HomeTwo = ({ products, collections }) => {
    const displayCollections = collections?.length > 0 ? collections : categoriesData;
    return (
        <Layout bg="#fff">
            <Head>
                <title>{"Birmingham Kitchen & Bedroom | Bespoke Design"}</title>
                <meta name="description" content={settings?.description} />
            </Head>

            <Slider
                animate={true}
                data={sliderData}
                className="hero-slider-one"
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

                <div className="text-center mt-5 mb-5">
                    <a href="/shop" style={{ textDecoration: 'underline', color: '#333', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '13px' }}>View All Products</a>
                </div>
            </div>
        </Layout>
    );
};

export const getStaticProps = async () => {
    const productsData = await client(productsQuery(50)),
        products = productsData?.products?.edges,
        collectionsData = await client(collectionsQuery(5)),
        collections = collectionsData?.collections?.edges;

    return {
        props: {
            products,
            collections,
        },
        revalidate: 60,
    };
};

export default HomeTwo;
