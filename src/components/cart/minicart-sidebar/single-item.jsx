import Link from "next/link";
import Image from "@components/ui/image";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { CURRENCY } from "@utils/constant";
import { getProductStock } from "@utils/product";
import { Quantity } from "@components/cart/cart.style";
import { CgMathPlus, CgMathMinus, CgTrash } from "react-icons/cg";
import {
    PriceAmount,
    RemoveButton,
    MiniCartProName,
    MiniCartProMeta,
    MiniCartProPrice,
    MiniCartProThumb,
    MiniCartProContent,
    MiniCartProductItem
} from "@components/cart/minicart-sidebar/style";
import {
    removeCartAction,
    incrementCartQuantityAction,
    decrementCartQuantityAction
} from "@global/actions/cartAction";
import { placeholder } from "@utils/constant";

const MiniCartProduct = ({ product }) => {
    const { title, handle, images, quantity, price, variations, variants } = product;
    const stock = getProductStock(product, variations);
    const dispatch = useDispatch();

    const imageSrc = images?.edges?.[0]?.node?.originalSrc ||
        images?.[0]?.node?.originalSrc ||
        images?.[0]?.originalSrc ||
        product?.image?.originalSrc ||
        placeholder;

    return (
        <MiniCartProductItem>

            <MiniCartProContent>
                <div>
                    <Link href={`/product/${product.apiId || product.id}`}>
                        <MiniCartProName>{title}</MiniCartProName>
                    </Link>

                    {variants?.edges?.length > 1 && (
                        <MiniCartProMeta>
                            {variations?.title}
                        </MiniCartProMeta>
                    )}

                    {product?.selectedMattress && (
                        <MiniCartProMeta style={{ fontSize: '11px', color: '#7e2d67' }}>
                            + {product.selectedMattress.title}
                        </MiniCartProMeta>
                    )}
                    {product?.isAssemblyAdded && (
                        <MiniCartProMeta style={{ fontSize: '11px', color: '#7e2d67' }}>
                            + Professional Assembly
                        </MiniCartProMeta>
                    )}

                    <MiniCartProPrice>
                        {quantity} x <PriceAmount>{CURRENCY + price}</PriceAmount>
                    </MiniCartProPrice>

                    <Quantity>
                        <button
                            style={{ pointerEvents: quantity === 1 ? "none" : "visible" }}
                            onClick={() => dispatch(decrementCartQuantityAction(product))}
                        >
                            <CgMathMinus />
                        </button>
                        <input type="text" value={quantity} size={stock} readOnly />
                        <button
                            style={{ pointerEvents: quantity === stock ? "none" : "visible" }}
                            onClick={() => dispatch(incrementCartQuantityAction(product))}
                        >
                            <CgMathPlus />
                        </button>
                    </Quantity>
                </div>

                <RemoveButton onClick={() => dispatch(removeCartAction(product))}>
                    <CgTrash />
                </RemoveButton>
            </MiniCartProContent>
        </MiniCartProductItem>
    );
};

MiniCartProduct.propTypes = {
    product: PropTypes.object.isRequired,
};


export default MiniCartProduct;
