import cn from "classnames";
import Link from "next/link";
import PropTypes from "prop-types";
import Dropdown from "@components/ui/dropdown";
import { Col, Container, DropdownItem, Row } from "@bootstrap";
import { HeaderTopWrap, HeaderTopMessage, HeaderTopSetLanCurr } from "@components/layout/header/header.style";

const HeaderTop = ({ className }) => {
    return (
        <HeaderTopWrap className={cn(className)}>
            <Container>
                <Row>
                    <Col md={12} className="text-center">
                        <HeaderTopMessage center={true} style={{ fontSize: '13px', letterSpacing: '1px', fontStyle: 'normal', fontWeight: '500' }}>
                            FREE DELIVERY ON ALL ORDERS | 0% FINANCE AVAILABLE | CRAFTED IN THE UK
                        </HeaderTopMessage>
                    </Col>
                </Row>
            </Container>
        </HeaderTopWrap>
    );
};

HeaderTop.propTypes = {
    bg: PropTypes.string,
    className: PropTypes.string
};


export default HeaderTop;