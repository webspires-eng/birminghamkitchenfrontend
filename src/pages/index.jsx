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
import styled, { themeGet, devices, keyframes } from "@styled";
import Button from "@components/ui/button";
import { Container } from "@bootstrap";

const fadeInUp = keyframes`
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
`;

const CollectionSection = styled.section`
    padding: 100px 0 80px;
    background: #fff;

    ${devices.md} {
        padding: 60px 0 40px;
    }
`;

const ProductsSection = styled.section`
    padding: 100px 0 60px;
    background: #fafaf8;

    ${devices.md} {
        padding: 60px 0 30px;
    }
`;

const ViewAllWrap = styled.div`
    text-align: center;
    margin-top: 20px;
    padding-bottom: 20px;

    a {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: #111;
        font-weight: 600;
        font-size: 13px;
        letter-spacing: 2px;
        text-transform: uppercase;
        text-decoration: none;
        padding: 14px 36px;
        border: 2px solid #111;
        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);

        &:hover {
            background: #111;
            color: #fff;
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }
    }
`;

const CTASection = styled.section`
    padding: 120px 20px;
    background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
    text-align: center;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(
            circle at 30% 50%,
            rgba(212, 5, 17, 0.08) 0%,
            transparent 50%
        );
    }

    ${devices.md} {
        padding: 80px 20px;
    }
`;

const CTAContent = styled.div`
    position: relative;
    z-index: 1;
    max-width: 640px;
    margin: 0 auto;

    h2 {
        font-size: 48px;
        font-weight: 700;
        color: #fff;
        line-height: 1.1;
        letter-spacing: -1.5px;
        margin-bottom: 24px;

        ${devices.md} {
            font-size: 36px;
            letter-spacing: -0.5px;
        }

        ${devices.sm} {
            font-size: 30px;
        }
    }

    p {
        font-size: 17px;
        line-height: 1.8;
        color: rgba(255, 255, 255, 0.55);
        margin-bottom: 40px;
        font-weight: 400;

        ${devices.sm} {
            font-size: 15px;
        }
    }
`;

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

            <CollectionSection>
                <SectionTitle
                    label="Our Collections"
                    title="Curated for Your Home"
                    content="Explore our signature ranges, designed to bring elegance and functionality to every corner of your home."
                />
                <Categories categories={displayCollections} pt={0} pb={0} />
            </CollectionSection>

            <BrandShowcase />

            <ProductsSection>
                <SectionTitle
                    label="Top Picks"
                    title="Best Sellers"
                    content="Discover the pieces our customers love most. Timeless quality meets modern design."
                />
                <ProductsTab products={products} limit={8} />

                <ViewAllWrap>
                    <a href="/shop">View All Products →</a>
                </ViewAllWrap>
            </ProductsSection>

            <CTASection>
                <CTAContent>
                    <h2>Let's Create Your Dream Space</h2>
                    <p>
                        Book a free design consultation and let our experts help you
                        transform your home with bespoke kitchens and bedrooms.
                    </p>
                    <Button
                        tag="a"
                        href="/contact"
                        color="white"
                        bg="primary"
                        hvrBg="white"
                        hvrColor="black"
                        style={{
                            padding: '18px 48px',
                            fontSize: '12px',
                            letterSpacing: '3px',
                            textTransform: 'uppercase',
                            fontWeight: 600,
                            borderRadius: '0',
                        }}
                    >
                        Book Consultation
                    </Button>
                </CTAContent>
            </CTASection>
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
