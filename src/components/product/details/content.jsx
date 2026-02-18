import { useProduct } from "@hooks";
import PropTypes from 'prop-types';
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { CURRENCY } from "@utils/constant";
import { useState, useEffect } from "react";
import Select from "@components/ui/select";
import Button from "@components/ui/button";
import { excerpt, toCapitalize } from "@utils/method";
import {
    IoLogoTwitter,
    IoLogoLinkedin,
    IoLogoFacebook
} from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { IoCheckmark, IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import { MdColorLens, MdStraighten, MdHotel, MdBuild } from "react-icons/md";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import {
    ProductSKU,
    ContentWrap,
    ProductName,
    ProductPrices,
    ProductRatings,
    ProductSwatches,
    ProductSwatchItem,
    ProductSocialShare,
    ProductActionButton,
    QuantityIncDecButton,
    OptionGrid,
    OptionItem,
    FinanceBox,
    OptionTabNav,
    OptionTab,
    CheckBadge,
    DimensionButton,
    BundleSection,
    BundleItem,
    BundleButton,
    PaymentIcons,
    TrustBadges,
    TrustPilot
} from "@components/product/details/details.style";
import Ratings from "@components/product/details/rating";
import { addToCartAction } from "@global/actions/cartAction";

const ProductDetailsContent = ({
    product,
    selectedMattress,
    isAssemblyAdded,
    setSelectedMattress,
    setIsAssemblyAdded,
    setShowMattressModal,
    ...props
}) => {
    let { title, description, variants, options } = product;
    variants = variants?.edges;
    const dispatch = useDispatch();
    const shortDesc = excerpt(description, 40);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [activeTab, setActiveTab] = useState('Colour');

    const {
        sku,
        stock,
        price: basePrice,
        isStock,
        quantity,
        variations,
        isDiscounted,
        isInWishlist,
        compareAtPrice: baseCompareAtPrice,
        isInCompareList,
        onVariantHandler,
        onCompareHandler,
        onWishlistHandler,
        onIncrementQuantity,
        cartProductQuantity,
        onDecrementQuantity
    } = useProduct(product);

    const onAddToCartHandler = (rest) => {
        dispatch(addToCartAction(rest));
        toast.success(`${rest?.title} is added to cart.`);
    }

    useEffect(() => {
        if (variants && variants?.length) {
            const firstVariant = variants[0].node;
            const initialOptions = {};

            firstVariant.selectedOptions.forEach(opt => {
                initialOptions[opt.name] = {
                    value: opt.value,
                    label: opt.value
                };
            });

            setSelectedOptions(initialOptions);
        }
    }, [variants]);


    useEffect(() => {
        if (Object.keys(selectedOptions).length >= 1) {
            onVariantHandler(selectedOptions);
        }
    }, [selectedOptions]);

    const getPriceAdjustmentValue = (value, optionName) => {
        if (optionName === 'Size') {
            const prices = {
                'Small Single 2FT6': -200,
                'Single 3FT': -185,
                'Small Double 4FT': -50,
                'Double 4FT6': 0,
                'King 5FT': 50,
                'Super King 6FT': 120
            };
            return prices[value] || 0;
        }
        if (optionName === 'Headboard') {
            const prices = {
                'Free 54" Headboard': 0,
                'Premium 54" Headboard': 75
            };
            return prices[value] || 0;
        }
        if (optionName === 'Colour') {
            // Some colors might be premium fabrics
            if (value.includes('Plush Velvet')) return 20;
            if (value.includes('Coniston')) return 0;
        }
        return 0;
    };

    const getPriceAdjustmentLabel = (value, optionName) => {
        const adj = getPriceAdjustmentValue(value, optionName);
        if (adj === 0) return null;
        return adj > 0 ? `+£${adj}.00` : `-£${Math.abs(adj)}.00`;
    };

    // Cumulative Price Calculation
    const mattressPrice = selectedMattress ? selectedMattress.price : 0;
    const assemblyPrice = isAssemblyAdded ? 39.99 : 0;

    // Calculate total adjustment from selected options
    const variantAdjustment = Object.entries(selectedOptions).reduce((acc, [name, opt]) => {
        return acc + getPriceAdjustmentValue(opt.value, name);
    }, 0);

    // If Shopify variant exists, use its price, otherwise fallback to a default base price + adjustments
    const displayBasePrice = variations?.id ? parseFloat(basePrice) : 399.99;

    const totalPrice = (displayBasePrice + variantAdjustment + mattressPrice + assemblyPrice).toFixed(2);
    const totalComparePrice = baseCompareAtPrice ? (parseFloat(baseCompareAtPrice) + variantAdjustment + mattressPrice + assemblyPrice).toFixed(2) : (displayBasePrice * 2 + variantAdjustment + mattressPrice + assemblyPrice).toFixed(2);

    return (
        <ContentWrap {...props}>
            <ProductName style={{ fontSize: '32px', fontFamily: 'serif', marginBottom: '10px' }}>{title}</ProductName>

            <TrustPilot>
                <div className="stars">
                    {[...Array(5)].map((_, i) => (
                        <div className="star-box" key={i}>
                            <AiFillStar />
                        </div>
                    ))}
                </div>
                <span className="rating-text">4.8/5 - 11,000 Reviews</span>
            </TrustPilot>

            <ProductPrices style={{ fontSize: '28px', fontWeight: 'bold', color: '#333' }}>
                <div className="d-flex align-items-center">
                    <span className="price new mr-3">{CURRENCY + totalPrice}</span>
                    {totalComparePrice && (
                        <>
                            <del className="price old" style={{ fontSize: '16px', color: '#999', fontWeight: 'normal' }}>{CURRENCY + totalComparePrice}</del>
                            <span style={{ background: '#7e2d67', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '12px', marginLeft: '10px' }}>
                                SAVE {CURRENCY + (parseFloat(totalComparePrice) - parseFloat(totalPrice)).toFixed(2)}
                            </span>
                        </>
                    )}
                </div>
            </ProductPrices>

            <div style={{ color: '#7e2d67', fontSize: '14px', fontWeight: 'bold', marginBottom: '20px' }}>
                ● Available now! <span style={{ color: '#333', fontWeight: 'normal' }}>Last few left in stock</span>
            </div>

            <FinanceBox>
                <span>Pay £{parseFloat(totalPrice / 3).toFixed(2)} in 3 installments with <strong>Klarna</strong>.</span>
            </FinanceBox>

            {options && options.length > 0 && (
                <div className="option-selectors-wrapper" style={{ background: '#F9F4F0', padding: '20px', borderRadius: '15px', border: '1px solid #E9E1D8' }}>
                    <OptionTabNav>
                        {options?.map(option => (
                            <OptionTab
                                key={option.name}
                                active={activeTab === option.name}
                                onClick={() => setActiveTab(option.name)}
                            >
                                <div className="tab-icon">
                                    {option.name === 'Colour' && <MdColorLens />}
                                    {option.name === 'Size' && <MdStraighten />}
                                    {option.name === 'Headboard' && <MdHotel />}
                                </div>
                                <div className="tab-label">{option.name}</div>
                                <div className="tab-value">{selectedOptions[option.name]?.value || 'Select'}</div>
                            </OptionTab>
                        ))}
                    </OptionTabNav>

                    {options?.map(option => (
                        <div key={option?.id} style={{ display: activeTab === option?.name ? 'block' : 'none' }}>
                            <OptionGrid>
                                {option?.values.map(value => {
                                    const isActive = selectedOptions[option?.name]?.value === value;
                                    const priceAdj = getPriceAdjustmentLabel(value, option.name);

                                    return (
                                        <OptionItem
                                            key={value}
                                            active={isActive}
                                            onClick={() => setSelectedOptions(prev => ({ ...prev, [option.name]: { value, label: value } }))}
                                        >
                                            {isActive && <CheckBadge><IoCheckmark /></CheckBadge>}

                                            {option.name === 'Colour' ? (
                                                <div className="option-img">
                                                    <img src={`/assets/images/products/variants/${value.toLowerCase().replace(/ /g, '_')}.png`} alt={value} onError={(e) => { e.target.src = "https://sonno.co.uk/cdn/shop/files/Sofia-Ottoman-Bed-Pink-Plush-Velvet-1.jpg"; e.target.onerror = null; }} />
                                                </div>
                                            ) : (
                                                <div className="option-icon">
                                                    <MdHotel />
                                                </div>
                                            )}

                                            <div className="option-text">
                                                {value}
                                                {priceAdj && <div className="option-price">{priceAdj}</div>}
                                            </div>
                                        </OptionItem>
                                    );
                                })}
                            </OptionGrid>

                            {option.name === 'Size' && (
                                <DimensionButton>
                                    <button onClick={() => toast.success("Opening dimensions chart...")}>View Dimensions</button>
                                </DimensionButton>
                            )}
                        </div>
                    ))}
                </div>
            )}


            <ProductActionButton>
                <div className="quantity-cart-button d-block">
                    <Button
                        tag="button"
                        bg="primary"
                        color="white"
                        hvrBg="secondary"
                        className="btn-cart"
                        style={{
                            opacity: isStock ? 0.6 : 1,
                            pointerEvents: isStock ? 'none' : 'visible',
                            width: '100%',
                            backgroundColor: '#7e2d67', // Sonno Purple
                            borderRadius: '5px',
                            fontWeight: 'bold',
                            fontSize: '18px',
                            padding: '15px 0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px'
                        }}
                        onClick={() => onAddToCartHandler({
                            ...product,
                            price: totalPrice,
                            quantity,
                            variations,
                            selectedMattress,
                            isAssemblyAdded
                        })}
                    >
                        <MdHotel /> {isStock ? "Out of Stock" : "Add to Basket"}
                    </Button>
                </div>

                <BundleSection>
                    <BundleItem active={!!selectedMattress}>
                        <div className="bundle-label">
                            <div className="bundle-icons">
                                <img src="https://cdn-icons-png.flaticon.com/512/3232/3232147.png" alt="mattress" />
                            </div>
                            <div className="bundle-text">
                                <span>Add Mattress & Save</span>
                                <p>Get a discount when you buy together</p>
                            </div>
                        </div>
                        <div className="bundle-action">
                            <BundleButton
                                className={selectedMattress ? 'active' : ''}
                                onClick={() => setShowMattressModal(true)}
                            >
                                {selectedMattress ? `Selected` : 'Choose Mattress'} {selectedMattress && <IoCheckmark />}
                            </BundleButton>
                        </div>
                    </BundleItem>

                    <BundleItem active={isAssemblyAdded}>
                        <div className="bundle-label">
                            <div className="bundle-icons">
                                <MdBuild />
                            </div>
                            <div className="bundle-text">
                                <span>Professional Assembly</span>
                                <p>Let us take your new bed to your room, assemble and take away packaging.</p>
                            </div>
                        </div>
                        <div className="bundle-action">
                            <div className="bundle-price">£39.99</div>
                            <BundleButton
                                className={isAssemblyAdded ? 'active' : ''}
                                onClick={() => setIsAssemblyAdded(!isAssemblyAdded)}
                            >
                                {isAssemblyAdded ? 'Added' : 'Add'}
                            </BundleButton>
                        </div>
                    </BundleItem>
                </BundleSection>

                <PaymentIcons>
                    <img src="https://cdn-icons-png.flaticon.com/512/349/349221.png" alt="Visa" />
                    <img src="https://cdn-icons-png.flaticon.com/512/349/349228.png" alt="Amex" />
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968199.png" alt="Apple Pay" />
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888871.png" alt="Google Pay" />
                    <img src="https://cdn-icons-png.flaticon.com/512/196/196052.png" alt="PayPal" />
                </PaymentIcons>

                <div className="mt-3 text-center" style={{ fontSize: '13px', color: '#555' }}>
                    <p>Order today for <strong>FREE delivery</strong> between <strong>Feb 25</strong> and <strong>Mar 6</strong></p>
                </div>
            </ProductActionButton>

            <TrustBadges>
                <div className="badge-item">
                    <span className="icon">🛡️</span>
                    5 Years Warranty
                </div>
                <div className="badge-item">
                    <span className="icon">🌙</span>
                    60 Night Risk-Free Trial
                </div>
                <div className="badge-item">
                    <span className="icon">📈</span>
                    0% Interest Rate
                </div>
                <div className="badge-item">
                    <span className="icon">🌙</span>
                    Fast Free Delivery
                </div>
            </TrustBadges>

        </ContentWrap>
    );
};

ProductDetailsContent.propTypes = {
    product: PropTypes.object.isRequired,
};

export default ProductDetailsContent;
