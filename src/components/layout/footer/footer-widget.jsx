import Link from "next/link";
import Widget from "@components/ui/widget";
import NewsletterForm from "@components/newsletter";
import { Container, Col, Row, Ul, Li, } from "@bootstrap";
import { WidgetWrapper, SocialIcons } from "./footer.style";
import { SiFacebook, SiTwitter, SiLinkedin, SiPinterest, SiYoutube } from "react-icons/si";

const FooterWidget = (props) => {

    return (
        <WidgetWrapper
            {...props}
            py={[60, 60, 100]}
        >
            <Container>
                <Row>
                    <Col md={6} lg={4} className="mb-4 mb-lg-0">
                        <Widget
                            title="ABOUT US"
                            mb={[30, null, null, 0]}
                        >
                            <p className="about-text">
                                Premium Kitchens & Bedrooms designed and crafted in the UK for your lifestyle. Quality you can trust, designs you'll love.
                            </p>

                            <SocialIcons mt={24}>
                                <Li inline={true}>
                                    <a href="https://facebook.com" target="_blank" rel="noopener"><SiFacebook /></a>
                                </Li>
                                <Li inline={true}>
                                    <a href="https://twitter.com" target="_blank" rel="noopener"><SiTwitter /></a>
                                </Li>
                                <Li inline={true}>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener"><SiLinkedin /></a>
                                </Li>
                                <Li inline={true}>
                                    <a href="https://youtube.com" target="_blank" rel="noopener"><SiYoutube /></a>
                                </Li>
                                <Li inline={true}>
                                    <a href="https://pinterest.com" target="_blank" rel="noopener"><SiPinterest /></a>
                                </Li>
                            </SocialIcons>
                        </Widget>
                    </Col>

                    <Col sm={6} lg={2} className="mb-4 mb-lg-0">
                        <Widget
                            title="QUICK LINKS"
                            mb={[30, null, null, 0]}
                        >
                            <Ul className="widget-list">
                                <Li><Link href="/about">About Us</Link></Li>
                                <Li><Link href="/shop">Shop</Link></Li>
                                <Li><Link href="/contact">Contact</Link></Li>
                                <Li><Link href="/cart">My Cart</Link></Li>
                            </Ul>
                        </Widget>
                    </Col>

                    <Col sm={6} lg={2} className="mb-4 mb-lg-0">
                        <Widget
                            title="SUPPORT"
                            mb={[30, null, null, 0]}
                        >
                            <Ul className="widget-list">
                                <Li><Link href="/contact">Help Centre</Link></Li>
                                <Li><Link href="/contact">Delivery Info</Link></Li>
                                <Li><Link href="/contact">Returns</Link></Li>
                                <Li><Link href="/contact">FAQs</Link></Li>
                            </Ul>
                        </Widget>
                    </Col>

                    <Col sm={12} lg={4}>
                        <Widget
                            title="NEWSLETTER"
                        >
                            <p className="about-text" style={{ marginBottom: '20px' }}>
                                Subscribe to get special offers, free giveaways, and latest updates.
                            </p>
                            <NewsletterForm />
                        </Widget>
                    </Col>
                </Row>
            </Container>
        </WidgetWrapper>
    );
};

export default FooterWidget;