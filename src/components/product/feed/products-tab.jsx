import cn from "classnames";
import PropTypes from 'prop-types';
import Loader from "@components/ui/loader";
import ProductCard from "@components/product/card";
import { Container, Row, Col } from "@bootstrap";

const ProductsTab = ({ products, limit = 8, className }) => {
    return (
        <div className={cn(className)}>
            <Container>
                {(!products) && <Loader />}

                {products && (
                    <Row>
                        {products?.slice(0, limit)?.map(product => (
                            <Col xs={6} sm={6} md={4} lg={3} key={product?.node?.id} className="mb-4">
                                <ProductCard product={product?.node} />
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>
        </div>
    );
}

ProductsTab.propTypes = {
    products: PropTypes.array.isRequired,
};


export default ProductsTab;
