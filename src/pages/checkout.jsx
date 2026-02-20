import Head from "next/head";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "@bootstrap";
import Layout from "@components/layout";
import { useSelector, useDispatch } from "react-redux";
import { clearCartAction } from "@global/actions/cartAction";
import { useRouter } from "next/router";
import { useSettings } from "@context/SettingsContext";
import { CURRENCY } from "@utils/constant";
import { getCartProductTotalPrice, getCartTotalPrice } from "@utils/product";
import { IoLockClosed, IoShieldCheckmark, IoCard, IoCash, IoChevronDown, IoChevronUp, IoWarning, IoClose, IoPricetagOutline } from "react-icons/io5";
import { MdLocalShipping, MdStorefront } from "react-icons/md";

const CheckoutPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const cart = useSelector(state => state.shoppingCart);
    const settings = useSettings();

    const currencySymbol = settings?.currency_symbol || CURRENCY;
    const deliveryCharges = parseFloat(settings?.delivery_charges) || 0;
    const freeDeliveryAbove = parseFloat(settings?.free_delivery_above) || 0;
    const minOrderAmount = parseFloat(settings?.min_order_amount) || 0;
    const taxPercentage = parseFloat(settings?.tax_percentage) || 0;
    const enableCod = settings?.enable_cod !== '0';
    const enableOnlinePayment = settings?.enable_online_payment !== '0';
    const enableOrder = settings?.enable_order !== '0';
    const enableDelivery = settings?.enable_delivery !== '0';
    const enablePickup = settings?.enable_pickup !== '0';

    const defaultPayment = enableCod ? 'cod' : enableOnlinePayment ? 'bank' : 'cod';
    const [paymentMethod, setPaymentMethod] = useState(defaultPayment);
    const [deliveryMethod, setDeliveryMethod] = useState(enableDelivery ? 'delivery' : 'pickup');
    const [showOrderSummary, setShowOrderSummary] = useState(false);

    // Coupon state
    const [couponCode, setCouponCode] = useState('');
    const [appliedCoupon, setAppliedCoupon] = useState(null);
    const [couponError, setCouponError] = useState('');
    const [couponLoading, setCouponLoading] = useState(false);
    const [couponSuccess, setCouponSuccess] = useState('');

    const [form, setForm] = useState({
        firstName: '', lastName: '', email: '', phone: '',
        address: '', city: '', county: '', postcode: '', notes: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const subtotal = getCartTotalPrice(cart);
    const isPickup = deliveryMethod === 'pickup';
    const isFreeShipping = isPickup || (freeDeliveryAbove > 0 ? subtotal >= freeDeliveryAbove : deliveryCharges === 0);
    const shipping = isFreeShipping ? 0 : deliveryCharges;

    // Coupon discount calculation
    let discountAmount = 0;
    if (appliedCoupon) {
        if (appliedCoupon.type === 'percentage') {
            discountAmount = (subtotal * parseFloat(appliedCoupon.value)) / 100;
            if (appliedCoupon.max_discount) {
                discountAmount = Math.min(discountAmount, parseFloat(appliedCoupon.max_discount));
            }
        } else {
            discountAmount = parseFloat(appliedCoupon.value);
        }
        discountAmount = Math.min(discountAmount, subtotal);
    }

    const discountedSubtotal = subtotal - discountAmount;
    const taxAmount = taxPercentage > 0 ? ((discountedSubtotal + shipping) * taxPercentage) / 100 : 0;
    const total = discountedSubtotal + shipping + taxAmount;
    const isBelowMinOrder = minOrderAmount > 0 && subtotal < minOrderAmount;

    // Validate coupon
    const handleApplyCoupon = async () => {
        if (!couponCode.trim()) {
            setCouponError('Please enter a coupon code');
            return;
        }
        setCouponLoading(true);
        setCouponError('');
        setCouponSuccess('');
        try {
            const res = await fetch('/api/coupons');
            if (!res.ok) throw new Error('Failed to fetch coupons');
            const coupons = await res.json();
            const coupon = coupons.find(c => c.code.toUpperCase() === couponCode.trim().toUpperCase());

            if (!coupon) {
                setCouponError('Invalid coupon code');
                setCouponLoading(false);
                return;
            }
            if (!coupon.is_active) {
                setCouponError('This coupon is no longer active');
                setCouponLoading(false);
                return;
            }
            const now = new Date();
            if (coupon.start_date && new Date(coupon.start_date) > now) {
                setCouponError('This coupon is not yet valid');
                setCouponLoading(false);
                return;
            }
            if (coupon.end_date && new Date(coupon.end_date) < now) {
                setCouponError('This coupon has expired');
                setCouponLoading(false);
                return;
            }
            if (coupon.usage_limit && coupon.used_count >= coupon.usage_limit) {
                setCouponError('This coupon has reached its usage limit');
                setCouponLoading(false);
                return;
            }
            if (coupon.min_order_amount && subtotal < parseFloat(coupon.min_order_amount)) {
                setCouponError(`Minimum order of ${currencySymbol}${parseFloat(coupon.min_order_amount).toFixed(2)} required`);
                setCouponLoading(false);
                return;
            }

            setAppliedCoupon(coupon);
            let disc = 0;
            if (coupon.type === 'percentage') {
                disc = (subtotal * parseFloat(coupon.value)) / 100;
                if (coupon.max_discount) disc = Math.min(disc, parseFloat(coupon.max_discount));
                setCouponSuccess(`${coupon.code} applied! ${parseFloat(coupon.value)}% off (−${currencySymbol}${Math.min(disc, subtotal).toFixed(2)})`);
            } else {
                disc = parseFloat(coupon.value);
                setCouponSuccess(`${coupon.code} applied! ${currencySymbol}${disc.toFixed(2)} off`);
            }
            setCouponError('');
        } catch (err) {
            setCouponError('Could not validate coupon. Try again.');
        }
        setCouponLoading(false);
    };

    const handleRemoveCoupon = () => {
        setAppliedCoupon(null);
        setCouponCode('');
        setCouponSuccess('');
        setCouponError('');
    };

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        if (isBelowMinOrder) {
            alert(`Minimum order amount is ${currencySymbol}${minOrderAmount.toFixed(2)}. Please add more items.`);
            return;
        }
        if (!form.firstName || !form.lastName || !form.email || !form.phone) {
            alert("Please fill in all required fields.");
            return;
        }
        if (deliveryMethod === 'delivery' && (!form.address || !form.city || !form.postcode)) {
            alert("Please fill in your delivery address.");
            return;
        }
        dispatch(clearCartAction());
        alert("Order placed successfully! We will contact you shortly.");
        router.push("/");
    };

    // Orders disabled
    if (!enableOrder) {
        return (
            <Layout>
                <Head><title>Checkout | {settings?.site_name || "Birmingham Kitchens & Bedrooms"}</title></Head>
                <div style={{ textAlign: 'center', padding: '100px 20px' }}>
                    <div style={{ fontSize: '60px', marginBottom: '20px' }}>🚫</div>
                    <h2 style={{ color: '#333', marginBottom: '15px' }}>Orders are currently unavailable</h2>
                    <p style={{ color: '#888', marginBottom: '30px' }}>We are not accepting orders at this time. Please check back later.</p>
                    <button
                        onClick={() => router.push('/')}
                        style={{
                            padding: '14px 40px', background: '#D40511', color: '#fff',
                            border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 600, cursor: 'pointer'
                        }}
                    >Return to Home</button>
                </div>
            </Layout>
        );
    }

    if (cart.length === 0) {
        return (
            <Layout>
                <Head><title>Checkout | {settings?.site_name || "Birmingham Kitchens & Bedrooms"}</title></Head>
                <div style={{ textAlign: 'center', padding: '100px 20px' }}>
                    <h2 style={{ color: '#333', marginBottom: '15px' }}>Your cart is empty</h2>
                    <p style={{ color: '#888', marginBottom: '30px' }}>Add some products before checking out.</p>
                    <button
                        onClick={() => router.push('/shop')}
                        style={{
                            padding: '14px 40px', background: '#D40511', color: '#fff',
                            border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 600, cursor: 'pointer'
                        }}
                    >Continue Shopping</button>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <Head>
                <title>Checkout | {settings?.site_name || "Birmingham Kitchens & Bedrooms"}</title>
                <meta name="description" content="Complete your order" />
            </Head>

            <style jsx>{`
                .checkout-wrapper {
                    padding: 50px 0 80px;
                    background: #fff;
                    min-height: 80vh;
                }
                .checkout-card {
                    background: #fff;
                    border-radius: 12px;
                    padding: 40px;
                    box-shadow: 0 2px 20px rgba(0,0,0,0.06);
                }
                .checkout-title {
                    font-size: 24px;
                    font-weight: 700;
                    color: #1a1a1a;
                    margin-bottom: 30px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .checkout-title .step-num {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 32px;
                    height: 32px;
                    background: #D40511;
                    color: #fff;
                    border-radius: 50%;
                    font-size: 14px;
                    font-weight: 700;
                }
                .form-row {
                    display: flex;
                    gap: 16px;
                    margin-bottom: 0;
                }
                .form-group {
                    margin-bottom: 20px;
                    flex: 1;
                }
                .form-group label {
                    display: block;
                    font-size: 13px;
                    font-weight: 600;
                    color: #555;
                    margin-bottom: 6px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                .form-group label .required {
                    color: #e74c3c;
                    margin-left: 2px;
                }
                .form-group input,
                .form-group textarea {
                    width: 100%;
                    padding: 12px 16px;
                    border: 1.5px solid #e0ddd8;
                    border-radius: 8px;
                    font-size: 15px;
                    color: #333;
                    background: #faf9f7;
                    transition: all 0.2s ease;
                    outline: none;
                    font-family: inherit;
                }
                .form-group input:focus,
                .form-group textarea:focus {
                    border-color: #D40511;
                    background: #fff;
                    box-shadow: 0 0 0 3px rgba(212,5,17,0.1);
                }
                .form-group textarea {
                    resize: vertical;
                    min-height: 80px;
                }

                /* Order Summary */
                .order-summary-card {
                    background: #fff;
                    border-radius: 12px;
                    padding: 32px;
                    box-shadow: 0 2px 20px rgba(0,0,0,0.06);
                    position: sticky;
                    top: 20px;
                }
                .order-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    padding: 14px 0;
                    border-bottom: 1px solid #f0ede8;
                }
                .order-item:last-child {
                    border-bottom: none;
                }
                .order-item-name {
                    font-size: 14px;
                    color: #333;
                    font-weight: 500;
                    flex: 1;
                    padding-right: 15px;
                }
                .order-item-qty {
                    font-size: 12px;
                    color: #999;
                    margin-top: 2px;
                }
                .order-item-price {
                    font-size: 14px;
                    font-weight: 600;
                    color: #1a1a1a;
                    white-space: nowrap;
                }
                .order-row {
                    display: flex;
                    justify-content: space-between;
                    padding: 10px 0;
                    font-size: 14px;
                    color: #666;
                }
                .order-total {
                    display: flex;
                    justify-content: space-between;
                    padding: 18px 0 0;
                    margin-top: 10px;
                    border-top: 2px solid #1a1a1a;
                    font-size: 20px;
                    font-weight: 700;
                    color: #1a1a1a;
                }
                .free-shipping-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    color: #27ae60;
                    font-weight: 600;
                    font-size: 13px;
                }

                /* Payment Methods */
                .payment-options {
                    margin-top: 24px;
                }
                .payment-option {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 16px;
                    border: 1.5px solid #e0ddd8;
                    border-radius: 10px;
                    margin-bottom: 10px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    background: #faf9f7;
                }
                .payment-option:hover {
                    border-color: #D40511;
                }
                .payment-option.active {
                    border-color: #D40511;
                    background: rgba(212,5,17,0.04);
                }
                .payment-option input[type="radio"] {
                    accent-color: #D40511;
                    width: 18px;
                    height: 18px;
                }
                .payment-option .pay-icon {
                    font-size: 22px;
                    color: #D40511;
                }
                .payment-option .pay-label {
                    font-size: 15px;
                    font-weight: 500;
                    color: #333;
                }

                /* Place Order Button */
                .place-order-btn {
                    width: 100%;
                    padding: 16px;
                    background: #D40511;
                    color: #fff;
                    border: none;
                    border-radius: 10px;
                    font-size: 17px;
                    font-weight: 700;
                    cursor: pointer;
                    margin-top: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    transition: all 0.3s ease;
                    letter-spacing: 0.5px;
                }
                .place-order-btn:hover {
                    background: #b8040e;
                    transform: translateY(-1px);
                    box-shadow: 0 6px 20px rgba(212,5,17,0.3);
                }

                .secure-badge {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 6px;
                    margin-top: 16px;
                    font-size: 12px;
                    color: #999;
                }

                /* Mobile order summary toggle */
                .mobile-summary-toggle {
                    display: none;
                    background: #D40511;
                    color: #fff;
                    padding: 14px 20px;
                    border-radius: 10px;
                    margin-bottom: 20px;
                    cursor: pointer;
                    font-weight: 600;
                    font-size: 15px;
                    justify-content: space-between;
                    align-items: center;
                }
                .order-summary-mobile {
                    display: none;
                }

                @media (max-width: 991px) {
                    .checkout-card, .order-summary-card {
                        padding: 24px;
                    }
                    .mobile-summary-toggle {
                        display: flex;
                    }
                    .order-summary-mobile {
                        display: block;
                        margin-bottom: 24px;
                    }
                    .order-summary-desktop {
                        display: none;
                    }
                }
                @media (max-width: 575px) {
                    .form-row {
                        flex-direction: column;
                        gap: 0;
                    }
                    .checkout-wrapper {
                        padding: 20px 0 60px;
                    }
                }
            `}</style>

            <div className="checkout-wrapper">
                <Container>
                    {/* Mobile Order Summary Toggle */}
                    <div className="order-summary-mobile">
                        <div className="mobile-summary-toggle" onClick={() => setShowOrderSummary(!showOrderSummary)}>
                            <span>Order Summary ({cart.length} items)</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                {currencySymbol}{total.toFixed(2)}
                                {showOrderSummary ? <IoChevronUp /> : <IoChevronDown />}
                            </span>
                        </div>
                        {showOrderSummary && (
                            <div className="order-summary-card" style={{ marginBottom: '20px' }}>
                                {cart.map(item => (
                                    <div className="order-item" key={item.cartId}>
                                        <div>
                                            <div className="order-item-name">{item?.title || item?.name || 'Product'}</div>
                                            <div className="order-item-qty">
                                                Qty: {item?.quantity}
                                                {item?.variations?.title && ` • ${item.variations.title}`}
                                                {item?.selectedMattress && ` • ${item.selectedMattress.title}`}
                                                {item?.isAssemblyAdded && ` • Assembly`}
                                            </div>
                                        </div>
                                        <div className="order-item-price">{currencySymbol}{Math.round(getCartProductTotalPrice(cart, item)).toFixed(2)}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <Row>
                        <Col lg={7}>
                            <form onSubmit={handlePlaceOrder}>
                                <div className="checkout-card" style={{ marginBottom: '24px' }}>
                                    <div className="checkout-title">
                                        <span className="step-num">1</span>
                                        Contact Information
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>First Name <span className="required">*</span></label>
                                            <input name="firstName" value={form.firstName} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group">
                                            <label>Last Name <span className="required">*</span></label>
                                            <input name="lastName" value={form.lastName} onChange={handleChange} required />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Email <span className="required">*</span></label>
                                            <input name="email" type="email" value={form.email} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group">
                                            <label>Phone <span className="required">*</span></label>
                                            <input name="phone" type="tel" value={form.phone} onChange={handleChange} required />
                                        </div>
                                    </div>
                                </div>

                                <div className="checkout-card" style={{ marginBottom: '24px' }}>
                                    <div className="checkout-title">
                                        <span className="step-num">2</span>
                                        Delivery Method & Address
                                    </div>

                                    {/* Delivery Method Toggle */}
                                    {(enableDelivery && enablePickup) && (
                                        <div className="payment-options" style={{ marginBottom: '20px' }}>
                                            <label className={`payment-option ${deliveryMethod === 'delivery' ? 'active' : ''}`}>
                                                <input type="radio" name="deliveryMethod" value="delivery" checked={deliveryMethod === 'delivery'} onChange={(e) => setDeliveryMethod(e.target.value)} />
                                                <MdLocalShipping className="pay-icon" />
                                                <span className="pay-label">Home Delivery</span>
                                            </label>
                                            <label className={`payment-option ${deliveryMethod === 'pickup' ? 'active' : ''}`}>
                                                <input type="radio" name="deliveryMethod" value="pickup" checked={deliveryMethod === 'pickup'} onChange={(e) => setDeliveryMethod(e.target.value)} />
                                                <MdStorefront className="pay-icon" />
                                                <span className="pay-label">Store Pickup</span>
                                            </label>
                                        </div>
                                    )}

                                    {deliveryMethod === 'delivery' ? (
                                        <>
                                            <div className="form-group">
                                                <label>Street Address <span className="required">*</span></label>
                                                <input name="address" value={form.address} onChange={handleChange} placeholder="House number and street name" required />
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label>Town / City <span className="required">*</span></label>
                                                    <input name="city" value={form.city} onChange={handleChange} required />
                                                </div>
                                                <div className="form-group">
                                                    <label>County</label>
                                                    <input name="county" value={form.county} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label>Postcode <span className="required">*</span></label>
                                                    <input name="postcode" value={form.postcode} onChange={handleChange} required />
                                                </div>
                                                <div className="form-group">
                                                    <label>Country</label>
                                                    <input value="United Kingdom" readOnly style={{ background: '#f0ede8', cursor: 'not-allowed' }} />
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <div style={{ padding: '20px', background: '#f8f7f4', borderRadius: '10px', textAlign: 'center' }}>
                                            <MdStorefront style={{ fontSize: '32px', color: '#D40511', marginBottom: '8px' }} />
                                            <p style={{ fontWeight: 600, color: '#333', marginBottom: '4px' }}>Collect from our store</p>
                                            <p style={{ fontSize: '14px', color: '#888', margin: 0 }}>{settings?.our_location || settings?.contact_address || 'Contact us for pickup details'}</p>
                                        </div>
                                    )}

                                    <div className="form-group" style={{ marginBottom: 0, marginTop: deliveryMethod === 'pickup' ? '16px' : '0' }}>
                                        <label>Order Notes (optional)</label>
                                        <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Special instructions..." rows={3} />
                                    </div>
                                </div>

                                <div className="checkout-card">
                                    <div className="checkout-title">
                                        <span className="step-num">3</span>
                                        Payment Method
                                    </div>
                                    <div className="payment-options">
                                        {enableCod && (
                                            <label className={`payment-option ${paymentMethod === 'cod' ? 'active' : ''}`}>
                                                <input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={(e) => setPaymentMethod(e.target.value)} />
                                                <IoCash className="pay-icon" />
                                                <span className="pay-label">Cash on Delivery</span>
                                            </label>
                                        )}
                                        {enableOnlinePayment && (
                                            <label className={`payment-option ${paymentMethod === 'bank' ? 'active' : ''}`}>
                                                <input type="radio" name="payment" value="bank" checked={paymentMethod === 'bank'} onChange={(e) => setPaymentMethod(e.target.value)} />
                                                <IoCard className="pay-icon" />
                                                <span className="pay-label">Bank Transfer</span>
                                            </label>
                                        )}
                                    </div>

                                    {isBelowMinOrder && (
                                        <div style={{
                                            display: 'flex', alignItems: 'center', gap: '10px',
                                            padding: '14px 18px', background: '#fff3e0', borderRadius: '10px',
                                            border: '1px solid #ffcc02', marginBottom: '16px', fontSize: '14px', color: '#e65100'
                                        }}>
                                            <IoWarning style={{ fontSize: '20px', flexShrink: 0 }} />
                                            Minimum order amount is {currencySymbol}{minOrderAmount.toFixed(2)}. You need {currencySymbol}{(minOrderAmount - subtotal).toFixed(2)} more.
                                        </div>
                                    )}

                                    <button type="submit" className="place-order-btn" disabled={isBelowMinOrder} style={isBelowMinOrder ? { opacity: 0.5, cursor: 'not-allowed' } : {}}>
                                        <IoLockClosed /> PLACE ORDER — {currencySymbol}{total.toFixed(2)}
                                    </button>

                                    <div className="secure-badge">
                                        <IoShieldCheckmark style={{ fontSize: '14px' }} />
                                        Your information is secure and encrypted
                                    </div>
                                </div>
                            </form>
                        </Col>

                        <Col lg={5} className="order-summary-desktop">
                            <div className="order-summary-card">
                                <div className="checkout-title" style={{ fontSize: '20px', marginBottom: '10px' }}>
                                    Order Summary
                                </div>

                                {cart.map(item => (
                                    <div className="order-item" key={item.cartId}>
                                        <div>
                                            <div className="order-item-name">{item?.title || item?.name || 'Product'}</div>
                                            <div className="order-item-qty">
                                                Qty: {item?.quantity}
                                                {item?.variations?.title && ` • ${item.variations.title}`}
                                                {item?.selectedMattress && ` • ${item.selectedMattress.title}`}
                                                {item?.isAssemblyAdded && ` • Assembly`}
                                            </div>
                                        </div>
                                        <div className="order-item-price">{currencySymbol}{Math.round(getCartProductTotalPrice(cart, item)).toFixed(2)}</div>
                                    </div>
                                ))}

                                {/* Coupon Code */}
                                <div style={{ borderTop: '1px solid #f0ede8', marginTop: '10px', paddingTop: '16px', marginBottom: '12px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px', fontSize: '14px', fontWeight: 600, color: '#333' }}>
                                        <IoPricetagOutline style={{ fontSize: '16px' }} /> Coupon Code
                                    </div>
                                    {!appliedCoupon ? (
                                        <div style={{ display: 'flex', gap: '8px' }}>
                                            <input
                                                type="text"
                                                value={couponCode}
                                                onChange={(e) => { setCouponCode(e.target.value.toUpperCase()); setCouponError(''); }}
                                                placeholder="Enter code"
                                                style={{
                                                    flex: 1, padding: '10px 14px', border: '1.5px solid #e0ddd8',
                                                    borderRadius: '8px', fontSize: '14px', fontWeight: 600,
                                                    letterSpacing: '1px', textTransform: 'uppercase',
                                                    outline: 'none', background: '#faf9f7', fontFamily: 'inherit'
                                                }}
                                                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleApplyCoupon())}
                                            />
                                            <button
                                                type="button"
                                                onClick={handleApplyCoupon}
                                                disabled={couponLoading}
                                                style={{
                                                    padding: '10px 18px', background: '#D40511', color: '#fff',
                                                    border: 'none', borderRadius: '8px', fontSize: '13px',
                                                    fontWeight: 700, cursor: couponLoading ? 'wait' : 'pointer',
                                                    whiteSpace: 'nowrap', transition: 'background 0.2s'
                                                }}
                                            >
                                                {couponLoading ? '...' : 'Apply'}
                                            </button>
                                        </div>
                                    ) : (
                                        <div style={{
                                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                            padding: '10px 14px', background: '#e8f5e9', borderRadius: '8px',
                                            border: '1px solid #a5d6a7'
                                        }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <IoPricetagOutline style={{ color: '#2e7d32', fontSize: '16px' }} />
                                                <span style={{ fontWeight: 700, fontSize: '14px', color: '#2e7d32', letterSpacing: '0.5px' }}>{appliedCoupon.code}</span>
                                                <span style={{ fontSize: '12px', color: '#4caf50' }}>
                                                    (−{currencySymbol}{discountAmount.toFixed(2)})
                                                </span>
                                            </div>
                                            <button type="button" onClick={handleRemoveCoupon} style={{
                                                background: 'none', border: 'none', cursor: 'pointer',
                                                color: '#c62828', fontSize: '18px', display: 'flex', padding: '2px'
                                            }}>
                                                <IoClose />
                                            </button>
                                        </div>
                                    )}
                                    {couponError && (
                                        <p style={{ fontSize: '12px', color: '#e53935', marginTop: '6px', marginBottom: 0, fontWeight: 500 }}>{couponError}</p>
                                    )}
                                    {couponSuccess && !couponError && (
                                        <p style={{ fontSize: '12px', color: '#2e7d32', marginTop: '6px', marginBottom: 0, fontWeight: 500 }}>{couponSuccess}</p>
                                    )}
                                </div>

                                <div style={{ borderTop: '1px solid #f0ede8', paddingTop: '14px' }}>
                                    <div className="order-row">
                                        <span>Subtotal</span>
                                        <span style={{ fontWeight: 600, color: '#333' }}>{currencySymbol}{subtotal.toFixed(2)}</span>
                                    </div>
                                    {discountAmount > 0 && (
                                        <div className="order-row" style={{ color: '#2e7d32' }}>
                                            <span>Discount ({appliedCoupon?.code})</span>
                                            <span style={{ fontWeight: 600 }}>−{currencySymbol}{discountAmount.toFixed(2)}</span>
                                        </div>
                                    )}
                                    <div className="order-row">
                                        <span>Delivery</span>
                                        {isFreeShipping ? (
                                            <span className="free-shipping-badge">
                                                <MdLocalShipping /> {isPickup ? 'Store Pickup' : 'Free Delivery'}
                                            </span>
                                        ) : (
                                            <span style={{ fontWeight: 600, color: '#333' }}>{currencySymbol}{shipping.toFixed(2)}</span>
                                        )}
                                    </div>
                                    {taxPercentage > 0 && (
                                        <div className="order-row">
                                            <span>VAT ({taxPercentage}%)</span>
                                            <span style={{ fontWeight: 600, color: '#333' }}>{currencySymbol}{taxAmount.toFixed(2)}</span>
                                        </div>
                                    )}
                                </div>

                                <div className="order-total">
                                    <span>Total</span>
                                    <span>{currencySymbol}{total.toFixed(2)}</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Layout>
    );
};

export default CheckoutPage;
