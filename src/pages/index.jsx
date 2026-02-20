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
import { fetchProducts, fetchCategories } from "@lib/api";
import styled, { themeGet, devices } from "@styled";
import Button from "@components/ui/button";
import { Container } from "@bootstrap";

const CollectionSection = styled.section`
    padding: 60px 0;
    background: #fff;

    ${devices.sm} {
        padding: 40px 0;
    }
`;

const ProductsSection = styled.section`
    padding: 60px 0;
    background: #f9f9f7;

    ${devices.sm} {
        padding: 40px 0;
    }
`;

const ViewAllWrap = styled.div`
    text-align: center;
    margin-top: 16px;
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
        transition: all 0.4s ease;

        &:hover {
            background: #111;
            color: #fff;
        }
    }
`;

const CTASection = styled.section`
    background: #111;
`;

const CTAInner = styled.div`
    display: flex;
    min-height: 460px;
    
    ${devices.md} {
        flex-direction: column;
        min-height: auto;
    }
`;

const CTAContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px 60px 60px 0;
    
    ${devices.lg} {
        padding: 60px 40px 60px 0;
    }
    
    ${devices.md} {
        padding: 40px 0;
        text-align: center;
        align-items: center;
    }

    h2 {
        font-size: 40px;
        font-weight: 700;
        color: #fff;
        line-height: 1.1;
        letter-spacing: -1.5px;
        margin-bottom: 20px;
        max-width: 420px;

        ${devices.md} {
            font-size: 30px;
            letter-spacing: -0.5px;
            max-width: 100%;
        }
    }

    p {
        font-size: 16px;
        line-height: 1.8;
        color: rgba(255, 255, 255, 0.55);
        margin-bottom: 36px;
        max-width: 400px;

        ${devices.md} {
            max-width: 100%;
        }
    }
`;

const CTAImage = styled.div`
    flex: 1;
    position: relative;
    min-height: 400px;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
    }

    ${devices.md} {
        min-height: 280px;
    }

    ${devices.xs} {
        min-height: 220px;
    }
`;

const HomeTwo = ({ products, collections }) => {
    const hasUsableCollections = collections?.length > 0 && collections.some(c => c?.node?.image?.originalSrc);
    const displayCollections = hasUsableCollections ? collections : categoriesData;
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
                <Container>
                    <SectionTitle
                        label="Our Collections"
                        title="Curated for Your Home"
                        content="Explore our signature ranges, designed to bring elegance and functionality to every corner of your home."
                    />
                </Container>
                <Categories categories={displayCollections} pt={0} pb={0} />
            </CollectionSection>

            <ProductsSection>
                <Container>
                    <SectionTitle
                        label="Top Picks"
                        title="Best Sellers"
                        content="Discover the pieces our customers love most. Timeless quality meets modern design."
                    />
                </Container>
                <ProductsTab products={products} limit={8} />

                <ViewAllWrap>
                    <a href="/shop">View All Products →</a>
                </ViewAllWrap>
            </ProductsSection>

            <BrandShowcase />

            <CTASection>
                <Container>
                    <CTAInner>
                        <CTAContent>
                            <h2>Let's Create Your Dream Space</h2>
                            <p>
                                Book a free design consultation and let our experts help you
                                transform your home with bespoke kitchens and bedrooms.
                            </p>
                            <div>
                                <Button
                                    tag="a"
                                    href="/contact"
                                    color="white"
                                    bg="primary"
                                    hvrBg="white"
                                    hvrColor="black"
                                    style={{
                                        padding: '16px 44px',
                                        fontSize: '12px',
                                        letterSpacing: '3px',
                                        textTransform: 'uppercase',
                                        fontWeight: 700,
                                        borderRadius: '0',
                                    }}
                                >
                                    Book Consultation
                                </Button>
                            </div>
                        </CTAContent>
                        <CTAImage>
                            <img
                                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80"
                                alt="Modern kitchen design consultation"
                            />
                        </CTAImage>
                    </CTAInner>
                </Container>
            </CTASection>
        </Layout>
    );
};

export const getStaticProps = async () => {
    const [productsData, collections] = await Promise.all([
        fetchProducts(),
        fetchCategories(),
    ]);
    const products = productsData?.products?.edges || [];

    return {
        props: {
            products,
            collections,
        },
        revalidate: 60,
    };
};

export default HomeTwo;
