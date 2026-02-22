import { IoIosHeart } from "react-icons/io";
import { Container, Col, Row } from "@bootstrap";
import { CopyrightText, FooterBottomWrapper } from "./footer.style";
import { useSettings } from "@context/SettingsContext";

const FooterBottom = ({ bg }) => {
    const settings = useSettings();
    const siteName = settings?.site_name || "Birmingham Kitchens & Bedrooms";

    return (
        <FooterBottomWrapper
            bg={bg}
            pt={[20, null, null, 28]}
            pb={[20, null, null, 28]}
        >
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="text-center text-md-left">
                        <CopyrightText>
                            © {new Date().getFullYear()} {siteName}. All rights reserved.
                        </CopyrightText>
                    </Col>

                    <Col md={6} className="text-center text-md-right">
                        <CopyrightText>
                            Developed with <IoIosHeart /> by <a href="https://webspires.co.uk?utm_souce=birmkitch" target="_blank" rel="noopener" style={{ fontWeight: 700, color: '#2563EB', textDecoration: 'none' }}>Webspires Limited</a>
                        </CopyrightText>
                    </Col>
                </Row>
            </Container>
        </FooterBottomWrapper>
    );
};

export default FooterBottom;
