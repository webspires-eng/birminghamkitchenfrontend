import cn from "classnames";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@bootstrap";
import Category from "@components/category";
import { CategoriesWrap } from "./categories.style";
import EmptyProduct from "@components/ui/empty";

const Categories = ({ categories, className, ...props }) => {
    return (
        <CategoriesWrap
            className={cn(className)}
            {...props}
        >
            <Container>
                {categories.length > 0 ? (
                    <Row>
                        {categories?.map(({ node: category }) => (
                            <Col xs={6} sm={6} md={3} key={category?.id} className="mb-4">
                                <Category
                                    category={category?.title}
                                    icon={category?.image?.originalSrc}
                                    slug={`/collection/${category?.handle}`}
                                />
                            </Col>
                        ))}
                    </Row>
                ) : (
                    <EmptyProduct className="mt-0" message="Collections not found!" />
                )}
            </Container>
        </CategoriesWrap>
    );
};

Categories.propTypes = {
    categories: PropTypes.array.isRequired,
};


export default Categories;