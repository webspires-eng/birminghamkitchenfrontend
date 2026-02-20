import Link from "next/link";
import Widget from "@components/ui/widget";
import NewsletterForm from "@components/newsletter";
import { Container, Col, Row, Ul, Li } from "@bootstrap";
import { WidgetWrapper, SocialIcons, ContactItem } from "./footer.style";
import { SiFacebook, SiInstagram, SiTwitter, SiYoutube, SiPinterest } from "react-icons/si";
import { IoCallOutline, IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { useSettings } from "@context/SettingsContext";

const FooterWidget = (props) => {
    const settings = useSettings();

    return (
        <WidgetWrapper
            {...props}
            py={[50, 50, 80]}
        >
            <Container>
                <Row>
                    {/* About + Social */}
                    <Col md={6} lg={3} className="mb-4 mb-lg-0">
                        <Widget
                            mb={[30, null, null, 0]}
                        >
                            <Link href="/">
                                <img src="/images/logo/logo.png" alt={settings?.site_name || "Birmingham Kitchens & Bedrooms"} style={{ maxWidth: '180px', marginBottom: '16px' }} />
                            </Link>
                            <p className="about-text">
                                {settings?.site_tagline || "Premium Kitchens & Bedrooms designed and crafted in the UK for your lifestyle."}
                            </p>

                            <SocialIcons mt={20}>
                                {settings?.social_facebook && (
                                    <Li inline={true}>
                                        <a href={settings.social_facebook} target="_blank" rel="noopener"><SiFacebook /></a>
                                    </Li>
                                )}
                                {settings?.social_instagram && (
                                    <Li inline={true}>
                                        <a href={settings.social_instagram} target="_blank" rel="noopener"><SiInstagram /></a>
                                    </Li>
                                )}
                                {settings?.social_twitter && (
                                    <Li inline={true}>
                                        <a href={settings.social_twitter} target="_blank" rel="noopener"><SiTwitter /></a>
                                    </Li>
                                )}
                                {settings?.social_youtube && (
                                    <Li inline={true}>
                                        <a href={settings.social_youtube} target="_blank" rel="noopener"><SiYoutube /></a>
                                    </Li>
                                )}
                                {settings?.social_pinterest && (
                                    <Li inline={true}>
                                        <a href={settings.social_pinterest} target="_blank" rel="noopener"><SiPinterest /></a>
                                    </Li>
                                )}
                            </SocialIcons>
                        </Widget>
                    </Col>

                    {/* Quick Links */}
                    <Col xs={6} sm={6} lg={2} className="mb-4 mb-lg-0">
                        <Widget
                            title="QUICK LINKS"
                            mb={[30, null, null, 0]}
                        >
                            <Ul className="widget-list">
                                <Li><Link href="/about">About Us</Link></Li>
                                <Li><Link href="/shop">Shop All</Link></Li>
                                <Li><Link href="/contact">Contact</Link></Li>
                                <Li><Link href="/cart">My Cart</Link></Li>
                                <Li><Link href="/checkout">Checkout</Link></Li>
                            </Ul>
                        </Widget>
                    </Col>

                    {/* Contact Info */}
                    <Col xs={6} sm={6} lg={3} className="mb-4 mb-lg-0">
                        <Widget
                            title="CONTACT US"
                            mb={[30, null, null, 0]}
                        >
                            {settings?.contact_phone && (
                                <ContactItem>
                                    <div className="contact-icon"><IoCallOutline /></div>
                                    <div className="contact-text">
                                        <a href={`tel:${settings.contact_phone}`}>{settings.contact_phone}</a>
                                    </div>
                                </ContactItem>
                            )}
                            {settings?.contact_email && (
                                <ContactItem>
                                    <div className="contact-icon"><IoMailOutline /></div>
                                    <div className="contact-text">
                                        <a href={`mailto:${settings.contact_email}`}>{settings.contact_email}</a>
                                    </div>
                                </ContactItem>
                            )}
                            {settings?.contact_address && (
                                <ContactItem>
                                    <div className="contact-icon"><IoLocationOutline /></div>
                                    <div className="contact-text">
                                        <span>{settings.contact_address}</span>
                                    </div>
                                </ContactItem>
                            )}
                        </Widget>
                    </Col>

                    {/* Newsletter */}
                    <Col sm={12} lg={4}>
                        <Widget
                            title="NEWSLETTER"
                        >
                            <p className="about-text" style={{ marginBottom: '16px', maxWidth: '100%' }}>
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