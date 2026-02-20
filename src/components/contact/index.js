import { Container, Col, Row, Form } from "@bootstrap";
import {
    ContactMapWrap,
    ContactWrapper,
    ContactInfoCard,
    ContactInfoItem,
    ContactFormWrap
} from "@components/contact/contact.style";
import { InputField } from "@components/checkout/checkout-form.style";
import Input, { TextArea } from "@components/ui/input";
import Button from "@components/ui/button";
import { IoCallOutline, IoMailOutline, IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import { SiFacebook, SiInstagram, SiTwitter, SiYoutube, SiWhatsapp, SiTiktok } from "react-icons/si";
import { useSettings } from "@context/SettingsContext";

const Contact = (props) => {
    const settings = useSettings();

    // Parse showroom hours into lines
    const hoursLines = settings?.showroom_hours
        ? settings.showroom_hours.split(/\r?\n/).filter(Boolean)
        : ['Mon - Fri: 09:00 - 18:00', 'Sat: 10:00 - 16:00', 'Sun: Closed'];

    const socialLinks = [
        { url: settings?.social_facebook, icon: <SiFacebook />, label: 'Facebook' },
        { url: settings?.social_instagram, icon: <SiInstagram />, label: 'Instagram' },
        { url: settings?.social_twitter, icon: <SiTwitter />, label: 'Twitter' },
        { url: settings?.social_youtube, icon: <SiYoutube />, label: 'YouTube' },
        { url: settings?.social_whatsapp, icon: <SiWhatsapp />, label: 'WhatsApp' },
        { url: settings?.social_tiktok, icon: <SiTiktok />, label: 'TikTok' },
    ].filter(s => s.url);

    return (
        <ContactWrapper {...props}>
            <Container>
                <div className="section-title">
                    <h2>Get in Touch</h2>
                    <p>Have questions about our bespoke kitchens & bedrooms? We're here to help you.</p>
                </div>

                <Row>
                    <Col lg={5}>
                        <ContactInfoCard>
                            <ContactInfoItem>
                                <div className="icon"><IoCallOutline /></div>
                                <div className="content">
                                    <h4>Call Us</h4>
                                    <p>
                                        <a href={`tel:${settings?.contact_phone || '+441211234567'}`}>
                                            {settings?.contact_phone || '+44 121 123 4567'}
                                        </a>
                                    </p>
                                </div>
                            </ContactInfoItem>

                            <ContactInfoItem>
                                <div className="icon"><IoMailOutline /></div>
                                <div className="content">
                                    <h4>Email Us</h4>
                                    <p>
                                        <a href={`mailto:${settings?.contact_email || 'info@birminghamkitchens.co.uk'}`}>
                                            {settings?.contact_email || 'info@birminghamkitchens.co.uk'}
                                        </a>
                                    </p>
                                </div>
                            </ContactInfoItem>

                            <ContactInfoItem>
                                <div className="icon"><IoLocationOutline /></div>
                                <div className="content">
                                    <h4>Our Location</h4>
                                    <p>{settings?.our_location || settings?.contact_address || 'Birmingham, West Midlands, United Kingdom'}</p>
                                </div>
                            </ContactInfoItem>

                            <ContactInfoItem>
                                <div className="icon"><IoTimeOutline /></div>
                                <div className="content">
                                    <h4>Showroom Hours</h4>
                                    {hoursLines.map((line, i) => (
                                        <p key={i}>{line}</p>
                                    ))}
                                </div>
                            </ContactInfoItem>

                            {socialLinks.length > 0 && (
                                <div style={{
                                    display: 'flex',
                                    gap: '12px',
                                    marginTop: '10px',
                                    flexWrap: 'wrap'
                                }}>
                                    {socialLinks.map((social, i) => (
                                        <a
                                            key={i}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title={social.label}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: '44px',
                                                height: '44px',
                                                borderRadius: '12px',
                                                background: '#fff',
                                                boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                                                color: '#7e2d67',
                                                fontSize: '20px',
                                                transition: 'all 0.3s ease',
                                                textDecoration: 'none'
                                            }}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </ContactInfoCard>
                    </Col>

                    <Col lg={7}>
                        <ContactMapWrap style={{ marginTop: 0, height: '100%', minHeight: '500px' }}>
                            <iframe
                                title="Our Location Map"
                                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(settings?.our_location || settings?.contact_address || 'Birmingham, UK')}`}
                            />
                        </ContactMapWrap>
                    </Col>
                </Row>
            </Container>
        </ContactWrapper>
    );
};


export default Contact;
