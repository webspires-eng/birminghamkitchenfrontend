import cn from "classnames";
import PropTypes from 'prop-types';
import Loader from "@components/ui/loader";
import { Col, Container, Row } from "@bootstrap";
import EmptyProduct from "@components/ui/empty";
import { getRelatedProducts } from "@utils/product";
import ProductCard from "@components/product/card";
import SectionTitle from "@components/ui/section-title";
import { RelatedProductsWrapper } from "@components/product/feed/style";

const RelatedProducts = ({ products, categories, tags, limit, currentProductId, className, ...props }) => {
    let relatedProducts = getRelatedProducts(categories, tags, products, limit);

    // Fallback: if no related products found, show any other products
    if (relatedProducts.length === 0 && products?.length > 0) {
        relatedProducts = products
            .map(p => p?.node)
            .filter(p => p && p.id !== currentProductId)
            .slice(0, limit);
    }

    return (
        relatedProducts.length > 0 ? (
            <RelatedProductsWrapper
                {...props}
                className={cn(className)}
            >
                <Container>
                    <Row>
                        <Col xs={12}>
                            <SectionTitle
                                align="left"
                                mb={[27, null, 47]}
                                title="Related Products"
                            />
                        </Col>
                    </Row>

                    {(!relatedProducts) && <Loader className="mt-5" />}

                    <Row className="products-grid-mobile mtn-30">
                        {relatedProducts.map(product => (
                            <Col xs={6} md={4} lg={3} key={product?.id}>
                                <ProductCard product={product} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </RelatedProductsWrapper>
        ) : null
    );
};

RelatedProducts.defaultProps = {
    limit: 4
}

RelatedProducts.propTypes = {
    className: PropTypes.string,
    tags: PropTypes.array.isRequired,
    products: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
};

export default RelatedProducts;
