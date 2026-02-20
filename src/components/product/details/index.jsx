import PropTypes from 'prop-types';
import { Container, Col, Row } from "@bootstrap";
import ProductDetailsThumb from "@components/product/details/thumbnail";
import ProductDetailsContent from "@components/product/details/content";
import { ProductDetailsWrapper } from "@components/product/details/details.style";

import Link from "next/link";
import { BreadcrumbNav, BreadcrumbNavItem, BreadcrumbNavLink } from "@components/ui/breadcrumb/breadcrumb.style";

import { useState, useEffect } from "react";
import { MdHotel, MdBuild } from "react-icons/md";
import { IoCheckmark, IoClose } from "react-icons/io5";
import { useSettings } from "@context/SettingsContext";
import {
    BundleSection,
    BundleItem,
    BundleButton,
    ModalOverlay,
    ModalContent,
    MattressGrid,
    MattressCard
} from "@components/product/details/details.style";

const ProductDetails = ({ product, ...props }) => {
    const siteSettings = useSettings();
    const assemblyPrice = parseFloat(siteSettings?.assembly_pricing) || 39.99;
    const [selectedMattress, setSelectedMattress] = useState(null);
    const [isAssemblyAdded, setIsAssemblyAdded] = useState(false);
    const [showMattressModal, setShowMattressModal] = useState(false);
    const [mattresses, setMattresses] = useState([]);
    const [mattressesLoading, setMattressesLoading] = useState(false);

    useEffect(() => {
        if (showMattressModal && mattresses.length === 0) {
            setMattressesLoading(true);
            fetch('/api/mattresses')
                .then(res => res.json())
                .then(data => {
                    const list = Array.isArray(data) ? data : data.data || [];
                    setMattresses(list.filter(m => m.is_active));
                })
                .catch(err => console.error('Failed to fetch mattresses:', err))
                .finally(() => setMattressesLoading(false));
        }
    }, [showMattressModal]);

    return (
        <ProductDetailsWrapper className="product-details-content" {...props}>
            <Container>
                <div style={{ marginBottom: '20px', fontSize: '13px', color: '#888' }}>
                    <Link href="/" legacyBehavior>
                        <a style={{ color: '#888', textDecoration: 'none' }}>Home</a>
                    </Link>
                    <span style={{ margin: '0 8px' }}>/</span>
                    <Link href="/shop" legacyBehavior>
                        <a style={{ color: '#888', textDecoration: 'none' }}>All Products</a>
                    </Link>
                    <span style={{ margin: '0 8px' }}>/</span>
                    <span style={{ color: '#333', fontWeight: '500' }}>{product?.title}</span>
                </div>
                <Row>
                    <Col md={6} lg={6}>
                        <ProductDetailsThumb
                            thumbnails={product?.images?.edges}
                        />

                        <div className="d-none d-md-block" style={{ marginTop: '20px' }}>
                            <BundleSection>
                                <BundleItem active={!!selectedMattress}>
                                    <div className="bundle-label">
                                        <div className="bundle-icons">
                                            <img src="https://cdn-icons-png.flaticon.com/512/3232/3232147.png" alt="mattress" />
                                        </div>
                                        <div className="bundle-text">
                                            <span>Add Mattress &amp; Save</span>
                                            <p>Get a discount when you buy together</p>
                                        </div>
                                    </div>
                                    <div className="bundle-action">
                                        <BundleButton
                                            className={selectedMattress ? 'active' : ''}
                                            onClick={() => setShowMattressModal(true)}
                                        >
                                            {selectedMattress ? (
                                                <>Selected <span style={{ fontSize: '12px', opacity: 0.9 }}>£{selectedMattress.price}</span></>
                                            ) : 'Choose Mattress'}
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
                                        <BundleButton
                                            className={isAssemblyAdded ? 'active' : ''}
                                            onClick={() => setIsAssemblyAdded(!isAssemblyAdded)}
                                        >
                                            {isAssemblyAdded ? (
                                                <>Added <span style={{ fontWeight: 700 }}>£{assemblyPrice.toFixed(2)}</span></>
                                            ) : (
                                                <>Add <span style={{ fontWeight: 700 }}>£{assemblyPrice.toFixed(2)}</span></>
                                            )}
                                        </BundleButton>
                                    </div>
                                </BundleItem>
                            </BundleSection>
                        </div>

                    </Col>

                    <Col md={6} lg={6}>
                        <ProductDetailsContent
                            product={product}
                            className="details-page"
                            selectedMattress={selectedMattress}
                            isAssemblyAdded={isAssemblyAdded}
                            setSelectedMattress={setSelectedMattress}
                            setIsAssemblyAdded={setIsAssemblyAdded}
                            setShowMattressModal={setShowMattressModal}
                        />
                    </Col>
                </Row>
            </Container>

            {showMattressModal && (
                <ModalOverlay onClick={() => setShowMattressModal(false)}>
                    <ModalContent onClick={e => e.stopPropagation()}>
                        <div className="modal-close" onClick={() => setShowMattressModal(false)}>
                            <IoClose />
                        </div>
                        <h3>Choose Your Mattress</h3>
                        {mattressesLoading ? (
                            <div style={{ textAlign: 'center', padding: '40px 0', color: '#888' }}>
                                Loading mattresses...
                            </div>
                        ) : (
                            <MattressGrid>
                                {mattresses.map(m => {
                                    const mPrice = parseFloat(m.price) || 0;
                                    return (
                                        <MattressCard
                                            key={m.id}
                                            selected={selectedMattress?.id === m.id}
                                            onClick={() => {
                                                setSelectedMattress(
                                                    selectedMattress?.id === m.id
                                                        ? null
                                                        : { ...m, price: mPrice }
                                                );
                                                setShowMattressModal(false);
                                            }}
                                        >
                                            <div className="check-icon"><IoCheckmark /></div>
                                            {m.image ? (
                                                <img src={m.image} alt={m.title} />
                                            ) : (
                                                <div style={{ width: '100%', height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f0ed' }}>
                                                    <MdHotel style={{ fontSize: '50px', color: '#ccc' }} />
                                                </div>
                                            )}
                                            <span className="m-title">{m.title}</span>
                                            <span className="m-price">£{mPrice.toFixed(2)}</span>
                                        </MattressCard>
                                    );
                                })}
                            </MattressGrid>
                        )}
                    </ModalContent>
                </ModalOverlay>
            )}
        </ProductDetailsWrapper>
    );
};

ProductDetails.propTypes = {
    product: PropTypes.object.isRequired
};


export default ProductDetails;
