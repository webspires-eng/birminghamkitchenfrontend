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
    const { descriptionHtml, options, variants } = product;
    const [reviews, setReviews] = useState([...reviewsDefaultData]);

    const getReviewValue = value => {
        setReviews(prevState => ([
            ...prevState,
            { id: prevState.length + 1, ...value }
        ]));
    }

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
                                {parse(descriptionHtml)}
                            </ProDescription>
                        </TabPanel>

                        <TabPanel>
                            <ProDescription>
                                <h3>Dimensions</h3>
                                <p><strong>Single:</strong> 90cm x 190cm</p>
                                <p><strong>Double:</strong> 135cm x 190cm</p>
                                <p><strong>King Size:</strong> 150cm x 200cm</p>
                                <p><strong>Super King:</strong> 180cm x 200cm</p>
                            </ProDescription>
                        </TabPanel>

                        <TabPanel>
                            <ProDescription>
                                <h3>Delivery Information</h3>
                                <p>We deliver to all UK mainland addresses. Delivery times are typically 5-7 working days.</p>
                            </ProDescription>
                        </TabPanel>

                        <TabPanel>
                            <ProDescription>
                                <h3>Finance Options</h3>
                                <p>Spread the cost with our flexible finance options. 0% APR available on orders over £500.</p>
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
