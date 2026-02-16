import cn from "classnames";
import PropTypes from 'prop-types';
import Loader from "@components/ui/loader";
import ProductCard from "@components/product/card";
import { Container } from "@bootstrap-styled/v4";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductsTab = ({ products, limit = 8, className }) => {
    const settings = {
        slidesPerView: 1,
        spaceBetween: 15,
        breakpoints: {
            480: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    }

    return (
        <div className={cn(className)}>
            <Container>
                {/* Section title is handled in the parent component now to avoid duplication */}

                {(!products) && <Loader />}

                {products && (
                    <div className="product-slider-wrap">
                        <Swiper
                            {...settings}
                            navigation={true}
                            pagination={false}
                            className="product-slider"
                        >
                            {products?.slice(0, limit)?.map(product => (
                                <SwiperSlide key={product?.node?.id}>
                                    <ProductCard product={product?.node} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )}
            </Container>
        </div>
    );
}

ProductsTab.propTypes = {
    products: PropTypes.array.isRequired,
};


export default ProductsTab;
