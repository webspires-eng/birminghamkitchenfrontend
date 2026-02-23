import { useState } from "react";
import Head from "next/head";
import Layout from "@components/layout";
import { Container } from "@bootstrap";
import { IoCheckmarkSharp, IoAddOutline } from "react-icons/io5";
import {
    IoTvOutline,
    IoColorPaletteOutline,
    IoFlameOutline,
    IoResizeOutline,
    IoShieldCheckmarkOutline,
    IoBulbOutline,
} from "react-icons/io5";
import { RiDoubleQuotesL } from "react-icons/ri";
import {
    ServiceHero,
    ServiceIntro,
    ServiceFeatures,
    ServiceProcess,
    ServiceGallery,
    ServiceTestimonial,
    ServiceFAQ,
    ServiceCTA,
} from "@styled/service.style";

const faqs = [
    {
        q: "What is a media wall?",
        a: "A media wall is a bespoke feature wall designed to house your television, a built-in electric fireplace, shelving, and ambient lighting — all integrated into one stylish centrepiece for your living room.",
    },
    {
        q: "How long does installation take?",
        a: "A standard media wall installation typically takes between 3 to 5 working days, depending on the complexity of the design, wiring requirements, and finish selections.",
    },
    {
        q: "Can I choose the materials and colours?",
        a: "Absolutely. Every media wall we build is fully bespoke. You can select from a wide range of finishes including marble effect panels, wood veneers, high-gloss surfaces, and custom paint colours to match your interior.",
    },
    {
        q: "Do you handle the electrical work?",
        a: "Yes. Our team includes qualified electricians who take care of all wiring, socket relocation, and lighting installation as part of the project.",
    },
    {
        q: "What sizes of TV can a media wall accommodate?",
        a: "Our media walls are custom built to fit any TV size, from 43 inches up to 85 inches and beyond. We design the proportions around your specific television for a seamless look.",
    },
];

const MediaWallsPage = () => {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <Layout>
            <Head>
                <title>Bespoke Media Walls | Birmingham Kitchens &amp; Bedrooms</title>
                <meta
                    name="description"
                    content="Transform your living space with a stunning bespoke media wall. Integrated fireplaces, ambient lighting, and premium finishes crafted by Birmingham's finest."
                />
            </Head>

            {/* ── Hero ── */}
            <ServiceHero bg="https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=2000">
                <div className="hero-content">
                    <h1>Bespoke Media Walls</h1>
                    <p>
                        Elevate your living room with a hand-crafted media wall — designed
                        to integrate your TV, fireplace, and storage into one breathtaking
                        centrepiece.
                    </p>
                    <a href="/contact" className="hero-cta">
                        Get a Free Quote
                    </a>
                </div>
            </ServiceHero>

            {/* ── Intro ── */}
            <ServiceIntro>
                <Container>
                    <div className="intro-grid">
                        <div className="intro-image">
                            <img
                                src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=900"
                                alt="Modern media wall with integrated fireplace"
                            />
                        </div>
                        <div className="intro-text">
                            <h2>The Centrepiece Your Home Deserves</h2>
                            <p>
                                Our media walls are more than just a place for your TV — they
                                are a statement of style. We combine expert joinery with
                                contemporary design to create feature walls that become the
                                focal point of any room.
                            </p>
                            <p>
                                Whether you envision a sleek, modern aesthetic with recessed
                                LED lighting, or a cosy setup with an integrated electric
                                fireplace, our team brings your vision to life with meticulous
                                attention to detail.
                            </p>
                            <ul>
                                <li><span className="check-icon"><IoCheckmarkSharp /></span>Fully bespoke designs</li>
                                <li><span className="check-icon"><IoCheckmarkSharp /></span>Integrated fireplaces</li>
                                <li><span className="check-icon"><IoCheckmarkSharp /></span>Hidden cable management</li>
                                <li><span className="check-icon"><IoCheckmarkSharp /></span>Ambient LED lighting</li>
                                <li><span className="check-icon"><IoCheckmarkSharp /></span>Premium finishes</li>
                                <li><span className="check-icon"><IoCheckmarkSharp /></span>Fitted by experts</li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </ServiceIntro>

            {/* ── Features ── */}
            <ServiceFeatures>
                <Container>
                    <div className="section-header">
                        <h2>Why Choose Our Media Walls?</h2>
                        <p>Every detail is considered, from the initial sketch to the final
                            finish.</p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="icon-wrap"><IoTvOutline /></div>
                            <h4>Custom TV Integration</h4>
                            <p>Designed to perfectly frame your television, with recessed mounting for a flush, cinema-like appearance.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-wrap"><IoFlameOutline /></div>
                            <h4>Built-in Fireplaces</h4>
                            <p>We integrate premium electric fireplaces that add warmth and ambience without the hassle of a traditional fireplace.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-wrap"><IoBulbOutline /></div>
                            <h4>Ambient Lighting</h4>
                            <p>Recessed LED strips and spot lighting create a beautiful glow that transforms your room after dark.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-wrap"><IoColorPaletteOutline /></div>
                            <h4>Premium Finishes</h4>
                            <p>Choose from marble-effect panels, natural wood veneers, high-gloss lacquer, or custom paint for a look that's uniquely yours.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-wrap"><IoResizeOutline /></div>
                            <h4>Built to Any Size</h4>
                            <p>Whether it's a compact feature alcove or a full wall-to-wall installation, we design to fit your exact space.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-wrap"><IoShieldCheckmarkOutline /></div>
                            <h4>Quality Guaranteed</h4>
                            <p>All our work comes with a comprehensive warranty and is completed by our own trusted in-house team.</p>
                        </div>
                    </div>
                </Container>
            </ServiceFeatures>

            {/* ── Process ── */}
            <ServiceProcess>
                <Container>
                    <div className="section-header">
                        <h2>How It Works</h2>
                        <p>From concept to completion, we make the process simple and
                            stress-free.</p>
                    </div>

                    <div className="process-timeline">
                        <div className="process-step">
                            <div className="step-number">1</div>
                            <h4>Free Consultation</h4>
                            <p>We visit your home to discuss your vision, take measurements, and understand your style preferences.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">2</div>
                            <h4>Design &amp; Quote</h4>
                            <p>Our designers create a detailed plan with material samples and provide a transparent, fixed-price quote.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">3</div>
                            <h4>Expert Build</h4>
                            <p>Our skilled craftsmen construct and install your media wall with minimal disruption to your daily life.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">4</div>
                            <h4>Final Reveal</h4>
                            <p>We walk you through the finished installation, ensure everything is perfect, and leave your home spotless.</p>
                        </div>
                    </div>
                </Container>
            </ServiceProcess>

            {/* ── Gallery ── */}
            <ServiceGallery>
                <Container>
                    <div className="section-header">
                        <h2>Our Recent Work</h2>
                        <p>A selection of bespoke media walls we've designed and installed across Birmingham and the wider West Midlands.</p>
                    </div>

                    <div className="gallery-grid">
                        <div className="gallery-item">
                            <img src="https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=600" alt="Media wall with fireplace" />
                            <span className="gallery-caption">Modern Fireplace Feature</span>
                        </div>
                        <div className="gallery-item">
                            <img src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=600" alt="Minimalist media wall" />
                            <span className="gallery-caption">Minimalist Entertainment Unit</span>
                        </div>
                        <div className="gallery-item">
                            <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600" alt="Luxury media wall design" />
                            <span className="gallery-caption">Luxury Living Room Setup</span>
                        </div>
                        <div className="gallery-item">
                            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600" alt="Contemporary media wall" />
                            <span className="gallery-caption">Contemporary Open Plan</span>
                        </div>
                        <div className="gallery-item">
                            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600" alt="Bespoke media wall install" />
                            <span className="gallery-caption">Bespoke Alcove Feature</span>
                        </div>
                        <div className="gallery-item">
                            <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=600" alt="Media wall with shelving" />
                            <span className="gallery-caption">Integrated Shelving Design</span>
                        </div>
                    </div>
                </Container>
            </ServiceGallery>

            {/* ── Testimonial ── */}
            <ServiceTestimonial>
                <Container>
                    <div className="testimonial-content">
                        <div className="quote-icon"><RiDoubleQuotesL /></div>
                        <blockquote>
                            "The team transformed our living room beyond what we imagined.
                            The media wall is absolutely stunning — everyone who visits asks
                            who did the work!"
                        </blockquote>
                        <div className="author">— Sarah T., Solihull</div>
                    </div>
                </Container>
            </ServiceTestimonial>

            {/* ── FAQ ── */}
            <ServiceFAQ>
                <Container>
                    <div className="section-header">
                        <h2>Frequently Asked Questions</h2>
                        <p>Everything you need to know about our media wall service.</p>
                    </div>

                    <div className="faq-list">
                        {faqs.map((faq, idx) => (
                            <div className="faq-item" key={idx}>
                                <button
                                    className="faq-question"
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                >
                                    <h4>{faq.q}</h4>
                                    <span className={`faq-icon ${openFaq === idx ? "open" : ""}`}>
                                        <IoAddOutline />
                                    </span>
                                </button>
                                <div className={`faq-answer ${openFaq === idx ? "open" : ""}`}>
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </ServiceFAQ>

            {/* ── CTA ── */}
            <ServiceCTA>
                <Container>
                    <div className="cta-inner">
                        <h2>Ready to Transform Your Living Room?</h2>
                        <p>
                            Book a free, no-obligation home consultation and let us design
                            the perfect media wall for your space.
                        </p>
                        <a href="/contact" className="cta-btn">
                            Book Your Free Consultation
                        </a>
                    </div>
                </Container>
            </ServiceCTA>
        </Layout>
    );
};

export default MediaWallsPage;
