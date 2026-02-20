import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { CURRENCY } from "@utils/constant";
import OffCanvas from "@components/ui/offCanvas";
import { getCartTotalPrice } from "@utils/product";
import PerfectScrollbar from "react-perfect-scrollbar";
import MiniCartProduct from "@components/cart/minicart-sidebar/single-item";
import { OffCanvasCloseBtn, OffCanvasHead, OffCanvasTitle } from "@components/ui/offCanvas/style";
import { MiniCartList, MiniCartFooter, BtnCheckout, BtnViewCart, SubtotalRow, EmptyCartWrap, ItemCount } from "@components/cart/minicart-sidebar/style";
import { useSettings } from "@context/SettingsContext";

import { IoClose, IoBagHandleOutline } from "react-icons/io5";

const MiniCartSidebar = ({ isOpen, onHandler }) => {
    const shoppingCart = useSelector(state => state.shoppingCart);
    const cartTotalPrice = getCartTotalPrice(shoppingCart);
    const settings = useSettings();
    const currencySymbol = settings?.currency_symbol || CURRENCY;
    const itemCount = shoppingCart.reduce((sum, item) => sum + (item.quantity || 1), 0);

    return (
        <OffCanvas open={isOpen} onHandler={onHandler}>
            <OffCanvasHead>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <OffCanvasTitle>Your Cart</OffCanvasTitle>
                    {shoppingCart.length > 0 && (
                        <ItemCount>({itemCount} {itemCount === 1 ? 'item' : 'items'})</ItemCount>
                    )}
                </div>
                <OffCanvasCloseBtn onClick={() => onHandler()}><IoClose /></OffCanvasCloseBtn>
            </OffCanvasHead>

            <MiniCartList>
                {shoppingCart.length > 0 ? (
                    <PerfectScrollbar>
                        {shoppingCart?.map(product => (
                            <MiniCartProduct product={product} key={product?.cartId} />
                        ))}
                    </PerfectScrollbar>
                ) : (
                    <EmptyCartWrap>
                        <IoBagHandleOutline style={{ fontSize: '48px', color: '#ddd', marginBottom: '16px' }} />
                        <p style={{ fontSize: '16px', fontWeight: 600, color: '#555', marginBottom: '6px' }}>Your cart is empty</p>
                        <p style={{ fontSize: '13px', color: '#999', margin: 0 }}>Add items to get started</p>
                    </EmptyCartWrap>
                )}
            </MiniCartList>

            {shoppingCart.length > 0 && (
                <MiniCartFooter>
                    <SubtotalRow>
                        <span>Subtotal</span>
                        <span>{currencySymbol}{cartTotalPrice.toFixed(2)}</span>
                    </SubtotalRow>

                    <BtnViewCart
                        tag="a"
                        bg="white"
                        color="heading"
                        hvrColor="primary"
                        href="/cart"
                        hvrBg="white"
                        fontWeight="subHeading"
                        onClick={() => onHandler()}
                    >
                        View Cart
                    </BtnViewCart>

                    <BtnCheckout
                        tag="a"
                        bg="primary"
                        color="white"
                        hvrColor="white"
                        href="/checkout"
                        hvrBg="secondary"
                        fontWeight="subHeading"
                        onClick={() => onHandler()}
                    >
                        Checkout
                        <span>{currencySymbol}{cartTotalPrice.toFixed(2)}</span>
                    </BtnCheckout>
                </MiniCartFooter>
            )}
        </OffCanvas>
    );
};

MiniCartSidebar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onHandler: PropTypes.func.isRequired
};


export default MiniCartSidebar;