import Head from "next/head";
import settings from "@data/settings";
import Layout from "@components/layout";
import Image from "@components/ui/image";
import { Container, Row, Col } from "@bootstrap";
import {
    AboutHero,
    StatsSection,
    StorySection,
    ValuesGrid,
    CTASection
} from "@styled/about.style";
import {
    IoDiamondOutline,
    IoHammerOutline,
    IoPeopleOutline,
} from "react-icons/io5";

const AboutPage = () => {
    return (
        <Layout>
            <Head>
                <title>{"About Us :: " + settings?.title}</title>
                <meta name="description" content="Birmingham Kitchen & Bedrooms - Crafting premium bespoke beds and furniture for over 15 years." />
            </Head>

            <AboutHero>
                <div className="content">
                    <h1>Crafting Comfort, Personalizing Luxury</h1>
                    <p>At Birmingham Kitchen & Bedrooms, we don't just sell furniture; we create the foundation for your best night's sleep and your most stylish home.</p>
                </div>
            </AboutHero>

            <Container>
                <StatsSection>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <h3>15+</h3>
                            <p>Years Experience</p>
                        </div>
                        <div className="stat-item">
                            <h3>11k+</h3>
                            <p>Happy Customers</p>
                        </div>
                        <div className="stat-item">
                            <h3>100%</h3>
                            <p>Bespoke Design</p>
                        </div>
                        <div className="stat-item">
                            <h3>5 Yr</h3>
                            <p>Guarantee</p>
                        </div>
                    </div>
                </StatsSection>

                <StorySection>
                    <Row className="row-item">
                        <Col lg={6}>
                            <div className="image-wrap">
                                <Image
                                    width={800}
                                    height={600}
                                    src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000&auto=format&fit=crop"
                                    alt="Our Workshop"
                                />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="text-content">
                                <h2>Our British Heritage</h2>
                                <p>Founded in the heart of Birmingham, we have grown from a small family workshop into a premier destination for bespoke bedroom furniture. Every bed that leaves our facility is a testament to British craftsmanship and attention to detail.</p>
                                <p>We specialize in Ottoman divan beds, luxury headboards, and personalized storage solutions, ensuring that functionality never comes at the expense of aesthetic beauty.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="row-item">
                        <Col lg={6}>
                            <div className="image-wrap">
                                <Image
                                    width={800}
                                    height={600}
                                    src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=1000"
                                    alt="Design Process"
                                />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="text-content">
                                <h2>The Bespoke Difference</h2>
                                <p>Unlike mass-produced furniture, our pieces are built to order. This allows us to offer an unprecedented level of customization, from fabric selection and color matching to specific dimensions that fit your living space perfectly.</p>
                                <p>We source only the finest UK-certified materials, from sustainably grown wood to premium plush velvets and Coniston fabrics, ensuring longevity and luxury in every thread.</p>
                            </div>
                        </Col>
                    </Row>
                </StorySection>
            </Container>

            <ValuesGrid>
                <Container>
                    <div className="section-title">
                        <h2>Our Core Values</h2>
                        <p>What drives us to create the perfect home for you.</p>
                    </div>
                    <div className="grid">
                        <div className="value-card">
                            <div className="icon"><IoDiamondOutline /></div>
                            <h4>Uncompromising Quality</h4>
                            <p>We use only premium materials and rigorous quality checks to ensure your furniture lasts for decades, not just years.</p>
                        </div>
                        <div className="value-card">
                            <div className="icon"><IoHammerOutline /></div>
                            <h4>True Craftsmanship</h4>
                            <p>Our skilled artisans bring years of traditional techniques combined with modern precision to every piece.</p>
                        </div>
                        <div className="value-card">
                            <div className="icon"><IoPeopleOutline /></div>
                            <h4>Customer Centric</h4>
                            <p>From 60-night trials to professional home assembly, everything we do is designed to make your experience seamless.</p>
                        </div>
                    </div>
                </Container>
            </ValuesGrid>

            <CTASection>
                <Container>
                    <div className="cta-content">
                        <h2>Ready to Transform Your Bedroom?</h2>
                        <p>Browse our latest collection of bespoke Ottoman beds and headboards.</p>
                        <a href="/shop" className="btn-shop">Explore the Shop</a>
                    </div>
                </Container>
            </CTASection>
        </Layout>
    );
};

export default AboutPage;
