import { useState, useEffect } from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import { Col, Container, Row } from "@bootstrap";
import { HeaderTopWrap, HeaderTopMessage } from "@components/layout/header/header.style";
import { useSettings } from "@context/SettingsContext";

const HeaderTop = ({ className }) => {
    const settings = useSettings();

    const freeAbove = parseFloat(settings?.free_delivery_above) || 0;
    const currencySymbol = settings?.currency_symbol || '£';
    const deliveryMsg = freeAbove > 0
        ? `FREE DELIVERY ON ORDERS OVER ${currencySymbol}${freeAbove}`
        : 'FREE DELIVERY ON ALL ORDERS';

    const messages = [
        deliveryMsg,
        '0% FINANCE AVAILABLE',
        'CRAFTED IN THE UK',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex(prev => (prev + 1) % messages.length);
                setIsAnimating(false);
            }, 400);
        }, 3500);

        return () => clearInterval(interval);
    }, [messages.length]);

    return (
        <HeaderTopWrap className={cn(className)}>
            <Container>
                <Row>
                    <Col md={12} className="text-center">
                        <style jsx>{`
                            .top-bar-slider {
                                overflow: hidden;
                                height: 20px;
                                position: relative;
                            }
                            .top-bar-message {
                                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                                opacity: 1;
                                transform: translateY(0);
                            }
                            .top-bar-message.slide-out {
                                opacity: 0;
                                transform: translateY(-100%);
                            }
                        `}</style>
                        <div className="top-bar-slider">
                            <HeaderTopMessage
                                center={true}
                                className={`top-bar-message ${isAnimating ? 'slide-out' : ''}`}
                                style={{ fontSize: '13px', letterSpacing: '1px', fontStyle: 'normal', fontWeight: '500', margin: 0 }}
                            >
                                {messages[currentIndex]}
                            </HeaderTopMessage>
                        </div>
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