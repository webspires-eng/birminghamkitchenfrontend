import Link from "next/link";
import { useProduct } from "@hooks";
import toast from "react-hot-toast";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { IoIosCart } from "react-icons/io";
import { addToCartAction } from "@global/actions/cartAction";
import { AddToCartButton as CartButtonStyle, SelectOptionButton } from "./product.style";

const AddToCartButton = ({ isShowInMobile, product }) => {
    const { title, variants, apiId } = product;
    const dispatch = useDispatch();
    const {
        price,
        isStock,
        isInCart,
        quantity,
        variations,
    } = useProduct(product);

    const addToCartHandler = (rest) => {
        if (!isInCart) {
            dispatch(addToCartAction(rest));
            toast.success(`${rest?.title} is added to cart.`);
        } else {
            toast.error(`${rest?.title} is already added.`);
        }
    };

    return (
        variants?.edges?.length > 1 ? (
            <Link href={`/product/${apiId || product.id}`}>
                <SelectOptionButton mobile={isShowInMobile}>
                    <IoIosCart /> Select Options
                </SelectOptionButton>
            </Link>
        ) : (
            <CartButtonStyle
                mobile={isShowInMobile}
                disabled={isInCart || isStock}
                onClick={() => addToCartHandler({
                    ...product,
                    price,
                    quantity,
                    variations
                })}
            >
                <IoIosCart />
                {!isStock && !isInCart ? "Add to Cart" : !isStock && isInCart ? "Already Added" : "Out of Stock"}
            </CartButtonStyle>
        )
    );
};

AddToCartButton.defaultProps = {
    isShowInMobile: false
}

AddToCartButton.propTypes = {
    product: PropTypes.object.isRequired,
    isShowInMobile: PropTypes.bool
};


export default AddToCartButton;
