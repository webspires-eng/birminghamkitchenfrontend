import { useState } from "react";
import PropTypes from 'prop-types';
import parse from "react-html-parser";
import { toCapitalize } from "@utils/method";
import reviewsDefaultData from "@data/rating";
import { Row, Col, Container } from "@bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Review from "@components/product/details/review";
import ReviewForm from "@components/product/details/review-form";
import { ProductDescReviewWrapper, ProductDescReviewContent, ProInfoList, ProDescription } from "./details.style";

const ProductDescriptionReview = ({ product, ...props }) => {
    const { descriptionHtml, dimensions, delivery, finance, options, variants } = product;
    const [reviews, setReviews] = useState([...reviewsDefaultData]);

    const getReviewValue = value => {
        setReviews(prevState => ([
            ...prevState,
            { id: prevState.length + 1, ...value }
        ]));
    }

    // Convert plain text with \r\n to HTML paragraphs
    const formatText = (text) => {
        if (!text) return '';
        return text
            .split(/\r?\n/)
            .filter(line => line.trim())
            .map(line => `<p>${line}</p>`)
            .join('');
    };

    return (
        <ProductDescReviewWrapper {...props}>
            <Container>
                <Tabs>
                    <TabList className="description-review-nav">
                        <Tab>Description</Tab>
                        <Tab>Dimensions</Tab>
                        <Tab>Delivery</Tab>
                        <Tab>Finance</Tab>
                    </TabList>

                    <ProductDescReviewContent>
                        <TabPanel>
                            <ProDescription>
                                {parse(descriptionHtml || '<p>No description available.</p>')}
                            </ProDescription>
                        </TabPanel>

                        <TabPanel>
                            <ProDescription>
                                <h3>Dimensions</h3>
                                {dimensions
                                    ? parse(formatText(dimensions))
                                    : <p>Dimensions information not available.</p>
                                }
                            </ProDescription>
                        </TabPanel>

                        <TabPanel>
                            <ProDescription>
                                <h3>Delivery Information</h3>
                                {delivery
                                    ? parse(formatText(delivery))
                                    : <p>Delivery information not available.</p>
                                }
                            </ProDescription>
                        </TabPanel>

                        <TabPanel>
                            <ProDescription>
                                <h3>Finance Options</h3>
                                {finance
                                    ? parse(formatText(finance))
                                    : <p>Finance information not available.</p>
                                }
                            </ProDescription>
                        </TabPanel>
                    </ProductDescReviewContent>
                </Tabs>
            </Container>
        </ProductDescReviewWrapper>
    );
};

ProductDescriptionReview.propTypes = {
    product: PropTypes.object.isRequired,
};


export default ProductDescriptionReview;
