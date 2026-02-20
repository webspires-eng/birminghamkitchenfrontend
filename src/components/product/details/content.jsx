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
    CheckoutInfo,
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

    const getPriceAdjustmentLabel = (value, optionName) => {
        // Find the matching variant to calculate the price difference from base
        if (!variants?.length) return null;
        const baseVariant = variants[0]?.node;
        const baseAmount = parseFloat(baseVariant?.priceV2?.amount || 0);

        // Find a variant that has this option value selected
        const matchingVariant = variants.find(({ node }) =>
            node?.selectedOptions?.some(opt => opt.name === optionName && opt.value === value)
        );
        if (!matchingVariant) return null;
        const matchAmount = parseFloat(matchingVariant.node?.priceV2?.amount || 0);

        // Estimate the delta by comparing to the first variant's base option for this same option
        const baseOption = baseVariant?.selectedOptions?.find(opt => opt.name === optionName);
        if (baseOption?.value === value) return null;

        // Find variant with only this option changed from base
        const adj = matchAmount - baseAmount;
        if (adj === 0) return null;
        return adj > 0 ? `+£${adj.toFixed(2)}` : `-£${Math.abs(adj).toFixed(2)}`;
    };

    // Cumulative Price Calculation
    const mattressPrice = selectedMattress ? selectedMattress.price : 0;
    const assemblyPrice = isAssemblyAdded ? 39.99 : 0;

    // Use the variant price directly (already includes option deltas)
    const displayBasePrice = parseFloat(basePrice) || 0;

    const totalPrice = (displayBasePrice + mattressPrice + assemblyPrice).toFixed(2);
    const totalComparePrice = baseCompareAtPrice && parseFloat(baseCompareAtPrice) > 0
        ? (parseFloat(baseCompareAtPrice) + mattressPrice + assemblyPrice).toFixed(2)
        : null;

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
                                {option?.values.map(val => {
                                    const valueName = typeof val === 'string' ? val : val.name;
                                    const valueImage = typeof val === 'object' ? val.image : null;
                                    const valuePrice = typeof val === 'object' ? val.price : 0;
                                    const isActive = selectedOptions[option?.name]?.value === valueName;
                                    const priceLabel = valuePrice !== 0
                                        ? (valuePrice > 0 ? `+£${valuePrice.toFixed(2)}` : `-£${Math.abs(valuePrice).toFixed(2)}`)
                                        : null;

                                    return (
                                        <OptionItem
                                            key={valueName}
                                            active={isActive}
                                            onClick={() => setSelectedOptions(prev => ({ ...prev, [option.name]: { value: valueName, label: valueName } }))}
                                        >
                                            {isActive && <CheckBadge><IoCheckmark /></CheckBadge>}

                                            {valueImage ? (
                                                <div className="option-img">
                                                    <img src={valueImage} alt={valueName} />
                                                </div>
                                            ) : (
                                                <div className="option-icon">
                                                    {option.name === 'Colour' && <MdColorLens />}
                                                    {option.name === 'Size' && <MdStraighten />}
                                                    {option.name === 'Headboard' && <MdHotel />}
                                                    {!['Colour', 'Size', 'Headboard'].includes(option.name) && <MdHotel />}
                                                </div>
                                            )}

                                            <div className="option-text">
                                                {valueName}
                                                {priceLabel && <div className="option-price">{priceLabel}</div>}
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


                <CheckoutInfo>
                    <PaymentIcons>
                        <img src="https://cdn-icons-png.flaticon.com/512/349/349221.png" alt="Visa" />
                        <img src="https://cdn-icons-png.flaticon.com/512/349/349228.png" alt="Amex" />
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968199.png" alt="Apple Pay" />
                        <img src="https://cdn-icons-png.flaticon.com/512/196/196052.png" alt="PayPal" />
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968382.png" alt="Klarna" />
                    </PaymentIcons>

                    <div className="mt-3 text-center" style={{ fontSize: '13px', color: '#555' }}>
                        <p>Order today for <strong>FREE delivery</strong> between <strong>Feb 25</strong> and <strong>Mar 6</strong></p>
                    </div>
                </CheckoutInfo>
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
