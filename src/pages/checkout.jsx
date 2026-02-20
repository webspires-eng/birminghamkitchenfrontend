import Head from "next/head";
import { useState } from "react";
import { Container, Row, Col } from "@bootstrap";
import Layout from "@components/layout";
import { useSelector, useDispatch } from "react-redux";
import { clearCartAction } from "@global/actions/cartAction";
import { useRouter } from "next/router";
import { useSettings } from "@context/SettingsContext";
import { CURRENCY } from "@utils/constant";
import { getCartProductTotalPrice, getCartTotalPrice } from "@utils/product";
import { IoLockClosed, IoShieldCheckmark, IoCard, IoCash, IoChevronDown, IoChevronUp } from "react-icons/io5";
import { MdLocalShipping } from "react-icons/md";

const FREE_SHIPPING_THRESHOLD = 500;
const SHIPPING_COST = 0; // Free delivery on all orders

const CheckoutPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const cart = useSelector(state => state.shoppingCart);
    const settings = useSettings();
    const [paymentMethod, setPaymentMethod] = useState('cod');
    const [showOrderSummary, setShowOrderSummary] = useState(false);

    const [form, setForm] = useState({
        firstName: '', lastName: '', email: '', phone: '',
        address: '', city: '', county: '', postcode: '', notes: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const subtotal = getCartTotalPrice(cart);
    const shipping = SHIPPING_COST;
    const total = subtotal + shipping;

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        if (!form.firstName || !form.lastName || !form.email || !form.phone || !form.address || !form.city || !form.postcode) {
            alert("Please fill in all required fields.");
            return;
        }
        dispatch(clearCartAction());
        alert("Order placed successfully! We will contact you shortly.");
        router.push("/");
    };

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
                            padding: '14px 40px', background: '#7e2d67', color: '#fff',
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
                    background: #f8f7f5;
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
                    background: #7e2d67;
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
                    border-color: #7e2d67;
                    background: #fff;
                    box-shadow: 0 0 0 3px rgba(126,45,103,0.1);
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
                    border-color: #7e2d67;
                }
                .payment-option.active {
                    border-color: #7e2d67;
                    background: rgba(126,45,103,0.04);
                }
                .payment-option input[type="radio"] {
                    accent-color: #7e2d67;
                    width: 18px;
                    height: 18px;
                }
                .payment-option .pay-icon {
                    font-size: 22px;
                    color: #7e2d67;
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
                    background: #7e2d67;
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
                    background: #692456;
                    transform: translateY(-1px);
                    box-shadow: 0 6px 20px rgba(126,45,103,0.3);
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
                    background: #7e2d67;
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
                                {CURRENCY}{total.toFixed(2)}
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
                                        <div className="order-item-price">{CURRENCY}{Math.round(getCartProductTotalPrice(cart, item)).toFixed(2)}</div>
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
                                        Delivery Address
                                    </div>
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
                                    <div className="form-group" style={{ marginBottom: 0 }}>
                                        <label>Order Notes (optional)</label>
                                        <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Special instructions for delivery..." rows={3} />
                                    </div>
                                </div>

                                <div className="checkout-card">
                                    <div className="checkout-title">
                                        <span className="step-num">3</span>
                                        Payment Method
                                    </div>
                                    <div className="payment-options">
                                        <label className={`payment-option ${paymentMethod === 'cod' ? 'active' : ''}`}>
                                            <input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={(e) => setPaymentMethod(e.target.value)} />
                                            <IoCash className="pay-icon" />
                                            <span className="pay-label">Cash on Delivery</span>
                                        </label>
                                        <label className={`payment-option ${paymentMethod === 'bank' ? 'active' : ''}`}>
                                            <input type="radio" name="payment" value="bank" checked={paymentMethod === 'bank'} onChange={(e) => setPaymentMethod(e.target.value)} />
                                            <IoCard className="pay-icon" />
                                            <span className="pay-label">Bank Transfer</span>
                                        </label>
                                    </div>

                                    <button type="submit" className="place-order-btn">
                                        <IoLockClosed /> PLACE ORDER — {CURRENCY}{total.toFixed(2)}
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
                                        <div className="order-item-price">{CURRENCY}{Math.round(getCartProductTotalPrice(cart, item)).toFixed(2)}</div>
                                    </div>
                                ))}

                                <div style={{ borderTop: '1px solid #f0ede8', marginTop: '10px', paddingTop: '14px' }}>
                                    <div className="order-row">
                                        <span>Subtotal</span>
                                        <span style={{ fontWeight: 600, color: '#333' }}>{CURRENCY}{subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="order-row">
                                        <span>Delivery</span>
                                        <span className="free-shipping-badge">
                                            <MdLocalShipping /> Free Delivery
                                        </span>
                                    </div>
                                </div>

                                <div className="order-total">
                                    <span>Total</span>
                                    <span>{CURRENCY}{total.toFixed(2)}</span>
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
