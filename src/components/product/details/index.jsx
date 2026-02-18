import PropTypes from 'prop-types';
import { Container, Col, Row } from "@bootstrap";
import ProductDetailsThumb from "@components/product/details/thumbnail";
import ProductDetailsContent from "@components/product/details/content";
import { ProductDetailsWrapper } from "@components/product/details/details.style";

import Link from "next/link";
import { BreadcrumbNav, BreadcrumbNavItem, BreadcrumbNavLink } from "@components/ui/breadcrumb/breadcrumb.style";

import { useState } from "react";
import { MdHotel, MdBuild } from "react-icons/md";
import { IoCheckmark, IoClose } from "react-icons/io5";
import {
    BundleSection,
    BundleItem,
    BundleButton,
    ModalOverlay,
    ModalContent,
    MattressGrid,
    MattressCard
} from "@components/product/details/details.style";

const mattresses = [
    {
        id: "m_1",
        title: "Standard Orthopaedic Mattress",
        price: 149.99,
        description: "Firm support for back health and a comfortable night's sleep.",
        image: "https://sonno.co.uk/cdn/shop/files/Orthopaedic-Mattress-1.jpg"
    },
    {
        id: "m_2",
        title: "Pocket Spring 1000 Mattress",
        price: 199.99,
        description: "Individually wrapped springs for minimal motion transfer.",
        image: "https://sonno.co.uk/cdn/shop/files/Pocket-Spring-1000-1.jpg"
    },
    {
        id: "m_3",
        title: "Memory Foam Hybrid Mattress",
        price: 249.99,
        description: "The perfect mix of support and pressure-relieving comfort.",
        image: "https://sonno.co.uk/cdn/shop/files/Memory-Hybrid-1.jpg"
    }
];

const ProductDetails = ({ product, ...props }) => {
    const [selectedMattress, setSelectedMattress] = useState(null);
    const [isAssemblyAdded, setIsAssemblyAdded] = useState(false);
    const [showMattressModal, setShowMattressModal] = useState(false);

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
                        <MattressGrid>
                            {mattresses.map(m => (
                                <MattressCard
                                    key={m.id}
                                    selected={selectedMattress?.id === m.id}
                                    onClick={() => {
                                        setSelectedMattress(selectedMattress?.id === m.id ? null : m);
                                        setShowMattressModal(false);
                                    }}
                                >
                                    <div className="check-icon"><IoCheckmark /></div>
                                    <img src={m.image} alt={m.title} />
                                    <span className="m-title">{m.title}</span>
                                    <p className="m-desc">{m.description}</p>
                                    <span className="m-price">£{m.price}</span>
                                </MattressCard>
                            ))}
                        </MattressGrid>
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
