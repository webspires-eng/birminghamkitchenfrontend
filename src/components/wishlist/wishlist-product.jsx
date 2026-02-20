import Link from "next/link";
import { Td } from "@bootstrap";
import Image from "@components/ui/image";
import { useProduct } from "@hooks";
import PropTypes from 'prop-types';
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import Button from "@components/ui/button";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { addToCartAction } from "@global/actions/cartAction";
import { removeWishlistAction } from "@global/actions/wishlistAction";
import {
    CartProInfo,
    CartProName,
    CartProThumb,
    CartProPrice,
    CartActionBtn,
    CartProAction,
    SingleCartItem
} from "@components/cart/cart-product/style";
import { placeholder } from "@utils/constant";

const WishlistItem = ({ product }) => {
    const { title, images, apiId } = product;
    const dispatch = useDispatch();
    const {
        price,
        isStock,
        isInCart,
        quantity,
        variations,
        isInWishlist // Added isInWishlist
    } = useProduct(product);

    const imageSrc = images?.edges?.[0]?.node?.originalSrc ||
        images?.[0]?.node?.originalSrc ||
        images?.[0]?.originalSrc ||
        product?.image?.originalSrc ||
        placeholder;

    const onAddToCart = (rest) => {
        !isInWishlist ? dispatch(addToWishlistAction(product)) : dispatch(removeWishlistAction(product));
        !isInWishlist ? toast.success(`"${product?.title}" is successfully added.`) : toast.error(`"${product?.title}" is removed.`);
    }

    return (
        <SingleCartItem>
            <CartProThumb>
                <Link href={`/product/${apiId || product.id}`} className="d-block">
                    <Image
                        width={150}
                        height={150}
                        src={imageSrc}
                        alt={title}
                    />
                </Link>
            </CartProThumb>
            <CartProInfo>
                <Link href={`/product/${apiId || product.id}`}>
                    <CartProName>{title}</CartProName>
                </Link>
            </CartProInfo>
            <CartProPrice>
                {price}
            </CartProPrice>
            <Td>
                <Button
                    p={10}
                    tag="button"
                    bg="primary"
                    color="white"
                    fontSize={12}
                    style={{ opacity: isStock ? 0.5 : 1, pointerEvents: isStock ? "none" : "visible" }}
                    onClick={() => onAddToCart({
                        ...product,
                        price,
                        quantity,
                        variations
                    })}
                >
                    {!isStock && !isInCart ? "Add to Cart" : !isStock && isInCart ? "Already Added" : "Out of Stock"}
                </Button>
            </Td>
            <CartProAction>
                <CartActionBtn
                    tag="button"
                    onClick={() => dispatch(removeWishlistAction(product))}
                >
                    <AiOutlineCloseCircle />
                </CartActionBtn>
            </CartProAction>
        </SingleCartItem>
    )
};

WishlistItem.propTypes = {
    product: PropTypes.object.isRequired,
};


export default WishlistItem;
