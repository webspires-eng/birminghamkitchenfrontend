import Link from "next/link";
import Image from "@components/ui/image";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { CURRENCY } from "@utils/constant";
import { getProductStock } from "@utils/product";
import { CgTrash } from "react-icons/cg";
import { IoAdd, IoRemove } from "react-icons/io5";
import { useSettings } from "@context/SettingsContext";
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
    const settings = useSettings();
    const currencySymbol = settings?.currency_symbol || CURRENCY;

    const imageSrc = images?.edges?.[0]?.node?.originalSrc ||
        images?.[0]?.node?.originalSrc ||
        images?.[0]?.originalSrc ||
        product?.image?.originalSrc ||
        placeholder;

    return (
        <MiniCartProductItem>
            <div style={{ flex: 1, minWidth: 0 }}>
                <Link href={`/product/${product.apiId || product.id}`}>
                    <MiniCartProName>{title}</MiniCartProName>
                </Link>

                {variants?.edges?.length > 1 && (
                    <MiniCartProMeta>
                        {variations?.title}
                    </MiniCartProMeta>
                )}

                {product?.selectedMattress && (
                    <MiniCartProMeta>
                        + {product.selectedMattress.title}
                    </MiniCartProMeta>
                )}
                {product?.isAssemblyAdded && (
                    <MiniCartProMeta>
                        + Assembly
                    </MiniCartProMeta>
                )}

                <MiniCartProPrice>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginTop: '8px'
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            border: '1px solid #e8e8e8',
                            borderRadius: '6px',
                            overflow: 'hidden'
                        }}>
                            <button
                                onClick={() => dispatch(decrementCartQuantityAction(product))}
                                style={{
                                    width: '28px', height: '28px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    border: 'none', background: '#fafafa',
                                    cursor: quantity === 1 ? 'not-allowed' : 'pointer',
                                    opacity: quantity === 1 ? 0.4 : 1,
                                    fontSize: '14px', color: '#555',
                                    transition: 'background 0.2s'
                                }}
                                disabled={quantity === 1}
                            >
                                <IoRemove />
                            </button>
                            <span style={{
                                width: '28px', textAlign: 'center',
                                fontSize: '13px', fontWeight: 600, color: '#333'
                            }}>
                                {quantity}
                            </span>
                            <button
                                onClick={() => dispatch(incrementCartQuantityAction(product))}
                                style={{
                                    width: '28px', height: '28px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    border: 'none', background: '#fafafa',
                                    cursor: quantity === stock ? 'not-allowed' : 'pointer',
                                    opacity: quantity === stock ? 0.4 : 1,
                                    fontSize: '14px', color: '#555',
                                    transition: 'background 0.2s'
                                }}
                                disabled={quantity === stock}
                            >
                                <IoAdd />
                            </button>
                        </div>
                        <PriceAmount>{currencySymbol}{price}</PriceAmount>
                    </div>
                </MiniCartProPrice>
            </div>

            <RemoveButton onClick={() => dispatch(removeCartAction(product))}>
                <CgTrash />
            </RemoveButton>
        </MiniCartProductItem>
    );
};

MiniCartProduct.propTypes = {
    product: PropTypes.object.isRequired,
};


export default MiniCartProduct;
