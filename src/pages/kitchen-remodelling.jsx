import { useState } from "react";
import Head from "next/head";
import Layout from "@components/layout";
import { Container } from "@bootstrap";
import { IoCheckmarkSharp, IoAddOutline } from "react-icons/io5";
import {
    IoHomeOutline,
    IoColorPaletteOutline,
    IoConstructOutline,
    IoWaterOutline,
    IoShieldCheckmarkOutline,
    IoLayersOutline,
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
        q: "How long does a full kitchen remodel take?",
        a: "A typical kitchen remodelling project takes between 4 to 8 weeks from start to finish, depending on the size of the kitchen, the scope of work, and the complexity of the design.",
    },
    {
        q: "Do you supply the appliances as well?",
        a: "Yes, we can source and supply all major kitchen appliances from leading brands. Alternatively, if you prefer to purchase your own, we'll design around your chosen appliances for a perfect fit.",
    },
    {
        q: "Can you work with my existing layout?",
        a: "Absolutely. Whether you want to keep the existing layout and refresh the look, or completely reconfigure the space, we tailor the project to your needs and budget.",
    },
    {
        q: "What worktop materials do you offer?",
        a: "We offer a wide range including quartz, granite, marble, solid wood, and laminate. Our design team will help you choose the best material to suit your lifestyle and aesthetic preferences.",
    },
    {
        q: "Do you handle plumbing and electrics?",
        a: "Yes. Our fully qualified team handles all plumbing, electrical work, gas fitting, tiling, and decorating — so you have a single point of contact for the entire project.",
    },
    {
        q: "Is there a guarantee on your work?",
        a: "All our kitchen installations come with a comprehensive 5-year workmanship guarantee, and all appliances carry their manufacturer's warranty.",
    },
];

const KitchenRemodellingPage = () => {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <Layout>
            <Head>
                <title>Kitchen Remodelling | Birmingham Kitchens &amp; Bedrooms</title>
                <meta
                    name="description"
                    content="Complete kitchen remodelling services in Birmingham. From design to installation, we create stunning bespoke kitchens tailored to your lifestyle and budget."
                />
            </Head>

            {/* ── Hero ── */}
            <ServiceHero bg="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=2000">
                <div className="hero-content">
                    <h1>Kitchen Remodelling</h1>
                    <p>
                        From tired and dated to truly transformative — we design, supply,
                        and install bespoke kitchens that become the heart of your home.
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
                                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=900"
                                alt="Modern remodelled kitchen"
                            />
                        </div>
                        <div className="intro-text">
                            <h2>Your Dream Kitchen, Brought to Life</h2>
                            <p>
                                A kitchen remodel is one of the most impactful home
                                improvements you can make. Whether you're looking for a
                                complete transformation or a stylish refresh, our team handles
                                every aspect — from initial design concepts to the final coat
                                of paint.
                            </p>
                            <p>
                                We specialise in creating kitchens that balance beauty and
                                practicality, using premium materials and time-tested
                                craftsmanship to deliver a space you'll love for years to come.
                            </p>
                            <ul>
                                <li><span className="check-icon"><IoCheckmarkSharp /></span>Full design service</li>
                                <li><span className="check-icon"><IoCheckmarkSharp /></span>Premium cabinetry</li>
                                <li><span className="check-icon"><IoCheckmarkSharp /></span>Quartz &amp; granite worktops</li>
                                <li><span className="check-icon"><IoCheckmarkSharp /></span>Plumbing &amp; electrics</li>
                                <li><span className="check-icon"><IoCheckmarkSharp /></span>Tiling &amp; flooring</li>
                                <li><span className="check-icon"><IoCheckmarkSharp /></span>5-year guarantee</li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </ServiceIntro>

            {/* ── Features ── */}
            <ServiceFeatures>
                <Container>
                    <div className="section-header">
                        <h2>Why Choose Us for Your Kitchen?</h2>
                        <p>We don't just fit kitchens — we craft them, with care and
                            precision at every stage.</p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="icon-wrap"><IoHomeOutline /></div>
                            <h4>Complete Remodels</h4>
                            <p>We manage the entire project, from stripping out the old kitchen to installing the new one, including all trades.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-wrap"><IoColorPaletteOutline /></div>
                            <h4>Bespoke Design</h4>
                            <p>Every kitchen is designed around your space, your lifestyle, and your taste — no off-the-shelf compromises.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-wrap"><IoLayersOutline /></div>
                            <h4>Premium Materials</h4>
                            <p>From soft-close hinges to stone worktops and solid wood doors, we use only the finest materials.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-wrap"><IoWaterOutline /></div>
                            <h4>Plumbing &amp; Gas</h4>
                            <p>Our Gas Safe registered engineers handle all plumbing, gas, and water connections for a hassle-free experience.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-wrap"><IoConstructOutline /></div>
                            <h4>Expert Installation</h4>
                            <p>Our in-house fitters have decades of experience. We never subcontract — your project stays in trusted hands.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-wrap"><IoShieldCheckmarkOutline /></div>
                            <h4>5-Year Guarantee</h4>
                            <p>Every installation is backed by our comprehensive workmanship guarantee for complete peace of mind.</p>
                        </div>
                    </div>
                </Container>
            </ServiceFeatures>

            {/* ── Process ── */}
            <ServiceProcess>
                <Container>
                    <div className="section-header">
                        <h2>Our Kitchen Remodelling Process</h2>
                        <p>A seamless journey from your first idea to your finished
                            kitchen.</p>
                    </div>

                    <div className="process-timeline">
                        <div className="process-step">
                            <div className="step-number">1</div>
                            <h4>Home Survey</h4>
                            <p>We visit your home to measure, discuss your requirements, and understand how you use your kitchen.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">2</div>
                            <h4>3D Design</h4>
                            <p>Our designers produce a photorealistic 3D render so you can visualise your new kitchen before we begin.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">3</div>
                            <h4>Installation</h4>
                            <p>Our experienced fitters carry out the full installation, including all plumbing, electrics, and tiling.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">4</div>
                            <h4>Handover</h4>
                            <p>We do a thorough walkthrough, ensure every detail is perfect, and leave your home clean and tidy.</p>
                        </div>
                    </div>
                </Container>
            </ServiceProcess>

            {/* ── Gallery ── */}
            <ServiceGallery>
                <Container>
                    <div className="section-header">
                        <h2>Kitchen Transformations</h2>
                        <p>Browse a selection of kitchens we've recently designed and installed across the Midlands.</p>
                    </div>

                    <div className="gallery-grid">
                        <div className="gallery-item">
                            <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=600" alt="Modern white kitchen" />
                            <span className="gallery-caption">Handleless White Gloss</span>
                        </div>
                        <div className="gallery-item">
                            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600" alt="Contemporary kitchen island" />
                            <span className="gallery-caption">Island with Quartz Worktop</span>
                        </div>
                        <div className="gallery-item">
                            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600" alt="Open plan kitchen" />
                            <span className="gallery-caption">Open Plan Living Kitchen</span>
                        </div>
                        <div className="gallery-item">
                            <img src="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&q=80&w=600" alt="Shaker kitchen design" />
                            <span className="gallery-caption">Classic Shaker in Sage</span>
                        </div>
                        <div className="gallery-item">
                            <img src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=600" alt="Dark modern kitchen" />
                            <span className="gallery-caption">Dark Anthracite &amp; Walnut</span>
                        </div>
                        <div className="gallery-item">
                            <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=600" alt="Bright kitchen remodel" />
                            <span className="gallery-caption">Bright Scandi Renovation</span>
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
                            "From day one, the team were professional, tidy, and incredibly
                            skilled. Our new kitchen is absolutely gorgeous — it's like being
                            in a completely different house!"
                        </blockquote>
                        <div className="author">— James &amp; Priya M., Edgbaston</div>
                    </div>
                </Container>
            </ServiceTestimonial>

            {/* ── FAQ ── */}
            <ServiceFAQ>
                <Container>
                    <div className="section-header">
                        <h2>Kitchen Remodelling FAQs</h2>
                        <p>Common questions about our kitchen remodelling service.</p>
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
                        <h2>Let's Build Your Perfect Kitchen</h2>
                        <p>
                            Book a free home design consultation and take the first step
                            towards the kitchen you've always wanted.
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

export default KitchenRemodellingPage;
