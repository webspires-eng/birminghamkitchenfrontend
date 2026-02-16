import cn from "classnames";
import PropTypes from "prop-types";
import { Container } from "@bootstrap";
import Category from "@components/category";
import { CategoriesWrap } from "./categories.style";
import Slider, { Slide } from "@components/ui/swiper";
import EmptyProduct from "@components/ui/empty";

const Categories = ({ categories, className, ...props }) => {
    const settings = {
        loop: true,
        slidesPerView: 1.2,
        spaceBetween: 15,
        autoplay: false,
        pagination: false,
        navigation: true,
        breakpoints: {
            480: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 25
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    }

    return (
        <CategoriesWrap
            className={cn(className)}
            {...props}
        >
            <Container>
                {categories.length > 0 ? (
                    <Slider
                        settings={settings}
                    >
                        {categories?.map(({ node: category }) => (
                            <Slide key={category?.id}>
                                <Category
                                    category={category?.title}
                                    icon={category?.image?.originalSrc}
                                    slug={`/collection/${category?.handle}`}
                                />
                            </Slide>
                        ))}
                    </Slider>
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