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

const Contact = (props) => {
    return (
        <ContactWrapper {...props}>
            <Container>
                <div className="section-title">
                    <h2>Get in Touch</h2>
                    <p>Have questions about our bespoke beds? We're here to help you.</p>
                </div>

                <Row>
                    <Col lg={5}>
                        <ContactInfoCard>
                            <ContactInfoItem>
                                <div className="icon"><IoCallOutline /></div>
                                <div className="content">
                                    <h4>Call Us</h4>
                                    <p><a href="tel:+447814444983">0781 444 4983</a></p>
                                    <p>Available Mon-Sat, 9am - 6pm</p>
                                </div>
                            </ContactInfoItem>

                            <ContactInfoItem>
                                <div className="icon"><IoMailOutline /></div>
                                <div className="content">
                                    <h4>Email Us</h4>
                                    <p><a href="mailto:Group961sales@gmail.com">Group961sales@gmail.com</a></p>
                                    <p><a href="mailto:webspires@gmail.com">webspires@gmail.com</a></p>
                                </div>
                            </ContactInfoItem>

                            <ContactInfoItem>
                                <div className="icon"><IoLocationOutline /></div>
                                <div className="content">
                                    <h4>Our Location</h4>
                                    <p>Birmingham, West Midlands</p>
                                    <p>United Kingdom</p>
                                </div>
                            </ContactInfoItem>

                            <ContactInfoItem>
                                <div className="icon"><IoTimeOutline /></div>
                                <div className="content">
                                    <h4>Showroom Hours</h4>
                                    <p>Mon - Fri: 09:00 - 18:00</p>
                                    <p>Sat: 10:00 - 16:00</p>
                                    <p>Sun: Closed</p>
                                </div>
                            </ContactInfoItem>
                        </ContactInfoCard>
                    </Col>

                    <Col lg={7}>
                        <ContactFormWrap>
                            <h3>Send a Message</h3>
                            <Form>
                                <InputField>
                                    <Row>
                                        <Col md={6}>
                                            <Input
                                                id="firstName"
                                                name="firstName"
                                                label="First Name"
                                                placeholder="Enter your first name"
                                            />
                                        </Col>

                                        <Col md={6} className="mt-3 mt-md-0">
                                            <Input
                                                id="lastName"
                                                name="lastName"
                                                label="Last Name"
                                                placeholder="Enter your last name"
                                            />
                                        </Col>
                                    </Row>
                                </InputField>

                                <InputField>
                                    <Input
                                        id="email"
                                        name="email"
                                        label="Email Address"
                                        placeholder="Enter your email"
                                    />
                                </InputField>

                                <InputField>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        label="Subject"
                                        placeholder="What is this regarding?"
                                    />
                                </InputField>

                                <InputField>
                                    <TextArea
                                        rows={5}
                                        id="message"
                                        name="message"
                                        label="Message"
                                        placeholder="Tell us more about what you're looking for..."
                                    />
                                </InputField>

                                <Button
                                    tag="button"
                                    type="submit"
                                    color="white"
                                    bg="primary"
                                    hvrBg="secondary"
                                    className="w-100"
                                    fontSize="standard"
                                    textTransform="uppercase"
                                    style={{ padding: '15px', borderRadius: '5px', fontWeight: 'bold' }}
                                >
                                    Send Message
                                </Button>
                            </Form>
                        </ContactFormWrap>
                    </Col>
                </Row>

                <ContactMapWrap>
                    <iframe
                        title="Birmingham Kitchen & Bedrooms Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155458.1189196155!2d-2.02293425!3d52.47743915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870942d1b417173%3A0xca81f1a4f618f9e!2sBirmingham!5e0!3m2!1sen!2suk!4v1700000000000"
                    />
                </ContactMapWrap>
            </Container>
        </ContactWrapper>
    );
};


export default Contact;
