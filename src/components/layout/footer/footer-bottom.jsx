import { IoIosHeart } from "react-icons/io";
import { Container, Col, Row } from "@bootstrap";
import { CopyrightText, FooterBottomWrapper } from "./footer.style";

const FooterBottom = ({ bg }) => {
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
                            © {new Date().getFullYear()} Birmingham Kitchens & Bedrooms. All rights reserved.
                        </CopyrightText>
                    </Col>

                    <Col md={6} className="text-center text-md-right">
                        <CopyrightText>
                            Crafted with <IoIosHeart /> in Birmingham, UK
                        </CopyrightText>
                    </Col>
                </Row>
            </Container>
        </FooterBottomWrapper>
    );
};

export default FooterBottom;
