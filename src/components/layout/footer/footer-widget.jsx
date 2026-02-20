import Link from "next/link";
import Widget from "@components/ui/widget";
import NewsletterForm from "@components/newsletter";
import { Container, Col, Row, Ul, Li, } from "@bootstrap";
import { WidgetWrapper, SocialIcons } from "./footer.style";
import { SiFacebook, SiInstagram, SiTwitter, SiLinkedin, SiPinterest, SiYoutube } from "react-icons/si";
import { useSettings } from "@context/SettingsContext";

const FooterWidget = (props) => {
    const settings = useSettings();

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
                                {settings?.site_tagline || "Premium Kitchens & Bedrooms designed and crafted in the UK for your lifestyle. Quality you can trust, designs you'll love."}
                            </p>

                            <SocialIcons mt={24}>
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

                    <Col xs={6} sm={6} lg={2} className="mb-4 mb-lg-0">
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

                    <Col xs={6} sm={6} lg={2} className="mb-4 mb-lg-0">
                        <Widget
                            title="CONTACT"
                            mb={[30, null, null, 0]}
                        >
                            <Ul className="widget-list">
                                {settings?.contact_phone && (
                                    <Li><a href={`tel:${settings.contact_phone}`}>{settings.contact_phone}</a></Li>
                                )}
                                {settings?.contact_email && (
                                    <Li><a href={`mailto:${settings.contact_email}`}>{settings.contact_email}</a></Li>
                                )}
                                {settings?.contact_address && (
                                    <Li><span>{settings.contact_address}</span></Li>
                                )}
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