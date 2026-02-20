import PropTypes from 'prop-types';
import { Fragment, useState } from "react";
import Slider, { Slide } from "@components/ui/swiper";
import { ProductThumbGallery, ProductThumbNav } from "@components/product/details/details.style";

const ProductDetailsThumb = ({ thumbnails }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const thumbGalleryConfig = {
        pagination: false,
        thumbs: {
            swiper: thumbsSwiper
        }
    }

    const thumbNavConfig = {
        freeMode: true,
        slidesPerView: 4,
        spaceBetween: 10,
        pagination: false,
        navigation: thumbnails?.length > 4,
        watchSlidesProgress: true,
        onSwiper: setThumbsSwiper,
        watchSlidesVisibility: true
    }

    return (
        <Fragment>
            <ProductThumbGallery>
                <Slider settings={thumbGalleryConfig}>
                    {thumbnails?.map(image => (
                        <Slide key={image?.node?.id}>
                            <figure>
                                <img
                                    alt={image?.node?.altText || "Product image"}
                                    src={image?.node?.originalSrc}
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                />
                            </figure>
                        </Slide>
                    ))}
                </Slider>
            </ProductThumbGallery>

            {thumbnails?.length > 1 && (
                <ProductThumbNav>
                    <Slider settings={{ ...thumbNavConfig }}>
                        {thumbnails?.map(image => (
                            <Slide key={image?.node?.id}>
                                <figure>
                                    <img
                                        alt={image?.node?.altText || "Product thumbnail"}
                                        src={image?.node?.originalSrc}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </figure>
                            </Slide>
                        ))}
                    </Slider>
                </ProductThumbNav>
            )}
        </Fragment>
    );
};

ProductDetailsThumb.propTypes = {
    thumbnails: PropTypes.array.isRequired,
};

export default ProductDetailsThumb;
