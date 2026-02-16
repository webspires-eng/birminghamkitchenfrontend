import PropTypes from "prop-types";
import Button from "@components/ui/button";
import Image from "next/image";
import { Col, Container, Row } from "@bootstrap";
import { SlideContent, SlideItem, SlideSubTitle, SlideTitle, SliderThumb, ScrollIndicator } from "@components/slider/slider.style";

const SlideTwo = ({ subTitle, title, content, thumb, priority }) => {
    return (
        <SlideItem>
            {thumb && (
                <SliderThumb className="style-2">
                    <Image
                        src={thumb}
                        alt={title}
                        fill
                        priority={priority}
                        sizes="100vw"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                </SliderThumb>
            )}

            <Container className="align-self-center">
                <Row className="justify-content-center">
                    <Col md={10} lg={8} className="m-auto">
                        <SlideContent mode="light" textAlign="center">
                            {subTitle && <SlideSubTitle>{subTitle}</SlideSubTitle>}
                            {title && <SlideTitle>{title}</SlideTitle>}
                            {content && <p>{content}</p>}
                            <div style={{ opacity: 0, animation: 'fadeInUp 1s cubic-bezier(0.16,1,0.3,1) forwards', animationDelay: '0.9s' }}>
                                <Button
                                    tag="a"
                                    href="/shop"
                                    color="white"
                                    bg="primary"
                                    hvrBg="black"
                                    hvrColor="white"
                                    className="mt-4 mt-md-5"
                                    style={{
                                        padding: '16px 48px',
                                        fontSize: '12px',
                                        letterSpacing: '3px',
                                        textTransform: 'uppercase',
                                        fontWeight: 600,
                                        borderRadius: '0',
                                    }}
                                >
                                    Explore Collection
                                </Button>
                            </div>
                        </SlideContent>
                    </Col>
                </Row>
            </Container>

            <ScrollIndicator>
                <div className="scroll-mouse" />
                <div className="scroll-line" />
            </ScrollIndicator>
        </SlideItem>
    );
};

SlideTwo.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    thumb: PropTypes.string,
    priority: PropTypes.bool
};


export { SlideTwo };