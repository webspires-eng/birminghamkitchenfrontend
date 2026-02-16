import { useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import Select from "@components/ui/select";
import { Container, Col, Row } from "@bootstrap";
import ProductCard from "@components/product/card";
import {
    ShopTopBar,
    ShopTopBarLeft,
    ShopTopBarRight,
    ProductsFeedWrap,
} from "@components/shop/shop.style";
import Sidebar from "@components/shop/sidebar";

export const sortByOptions = [
    { label: "Relevance", value: "relevance" },
    { label: "Name (A - Z)", value: "title-ascending" },
    { label: "Name (Z - A)", value: "title-descending" },
    { label: "Price (Low - High)", value: "price-ascending" },
    { label: "Price (High - Low)", value: "price-descending" },
];

const ShopProductsFeed = ({ products }) => {
    const router = useRouter();
    const { sort } = router.query;
    const [selectedSort, setSelectedSort] = useState(
        sortByOptions.find((item) => item.value === sort) || sortByOptions[0]
    );

    const onSortHandler = (event) => {
        setSelectedSort({ ...event });
        router.push(`${location.pathname}?sort=${event.value}`);
    };

    return (
        <ProductsFeedWrap>
            <Container>
                <Row>
                    <Col lg={3} className="order-2 order-lg-1 mt-5 mt-lg-0">
                        <Sidebar />
                    </Col>
                    <Col lg={9} className="order-1 order-lg-2">
                        <ShopTopBar>
                            <ShopTopBarLeft>
                                <p>Showing {products?.length} products</p>
                            </ShopTopBarLeft>

                            <ShopTopBarRight>
                                <Select
                                    label="Sort by"
                                    className="sort-by"
                                    value={selectedSort}
                                    options={sortByOptions}
                                    onChange={onSortHandler}
                                    classNamePrefix="sort-by"
                                />
                            </ShopTopBarRight>
                        </ShopTopBar>

                        <Row className="products-grid-mobile">
                            {products?.map((product) => (
                                <Col xs={6} md={4} key={product?.node.id}>
                                    <ProductCard product={product?.node} />
                                </Col>
                            ))}
                        </Row>

                        <div className="seo-text mt-5">
                            <h3>Premium Bedroom Furniture</h3>
                            <p>Discover our range of premium bedroom furniture designed for comfort and style. From divan beds to luxury wardrobes, we have everything you need to create your perfect sanctuary.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </ProductsFeedWrap>
    );
};

ShopProductsFeed.propTypes = {
    products: PropTypes.array.isRequired,
};

export default ShopProductsFeed;
