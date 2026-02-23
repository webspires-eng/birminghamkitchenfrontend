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
import Link from "next/link";
import { IoTvOutline, IoHomeOutline, IoBedOutline } from "react-icons/io5";

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

const ServicesSection = styled.section`
    padding: 80px 0;
    background: #fff;

    ${devices.sm} {
        padding: 50px 0;
    }
`;

const ServicesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
    margin-top: 10px;

    ${devices.md} {
        grid-template-columns: 1fr;
        gap: 20px;
    }
`;

const ServiceCard = styled.a`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height: 380px;
    border-radius: 20px;
    overflow: hidden;
    text-decoration: none;
    color: #fff;
    transition: transform 0.45s cubic-bezier(0.165, 0.84, 0.44, 1);

    ${devices.sm} {
        min-height: 300px;
    }

    &:hover {
        transform: translateY(-8px);
        color: #fff;

        .card-bg img {
            transform: scale(1.08);
        }

        .card-arrow {
            transform: translateX(6px);
        }
    }

    .card-bg {
        position: absolute;
        inset: 0;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.7s ease;
        }

        &::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.05) 0%,
                rgba(0, 0, 0, 0.7) 100%
            );
        }
    }

    .card-content {
        position: relative;
        z-index: 2;
        padding: 32px;

        .card-icon {
            width: 52px;
            height: 52px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(8px);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            margin-bottom: 18px;
        }

        h3 {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 10px;
            color: #fff;
            font-family: 'Raleway', sans-serif;
        }

        p {
            font-size: 15px;
            line-height: 1.6;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 16px;
        }

        .card-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #fff;
        }

        .card-arrow {
            transition: transform 0.3s ease;
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

            <ServicesSection>
                <Container>
                    <SectionTitle
                        label="What We Do"
                        title="Our Services"
                        content="From bespoke media walls to complete kitchen transformations, we bring expert craftsmanship to every project."
                    />

                    <ServicesGrid>
                        <Link href="/media-walls" passHref legacyBehavior>
                            <ServiceCard>
                                <div className="card-bg">
                                    <img src="https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=700" alt="Media Walls" />
                                </div>
                                <div className="card-content">
                                    <div className="card-icon"><IoTvOutline /></div>
                                    <h3>Media Walls</h3>
                                    <p>Stunning bespoke feature walls with integrated fireplaces, ambient lighting, and concealed storage.</p>
                                    <span className="card-link">Learn More <span className="card-arrow">→</span></span>
                                </div>
                            </ServiceCard>
                        </Link>

                        <Link href="/kitchen-remodelling" passHref legacyBehavior>
                            <ServiceCard>
                                <div className="card-bg">
                                    <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=700" alt="Kitchen Remodelling" />
                                </div>
                                <div className="card-content">
                                    <div className="card-icon"><IoHomeOutline /></div>
                                    <h3>Kitchen Remodelling</h3>
                                    <p>Complete kitchen transformations — from design and supply to expert installation and finishing.</p>
                                    <span className="card-link">Learn More <span className="card-arrow">→</span></span>
                                </div>
                            </ServiceCard>
                        </Link>

                        <Link href="/collection/ottoman-divan-bed" passHref legacyBehavior>
                            <ServiceCard>
                                <div className="card-bg">
                                    <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=700" alt="Bespoke Bedrooms" />
                                </div>
                                <div className="card-content">
                                    <div className="card-icon"><IoBedOutline /></div>
                                    <h3>Bespoke Bedrooms</h3>
                                    <p>Handcrafted Ottoman divan beds, luxury headboards, and fitted bedroom furniture built to order.</p>
                                    <span className="card-link">Learn More <span className="card-arrow">→</span></span>
                                </div>
                            </ServiceCard>
                        </Link>
                    </ServicesGrid>
                </Container>
            </ServicesSection>

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
