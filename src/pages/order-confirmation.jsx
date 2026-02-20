import Head from "next/head";
import Layout from "@components/layout";
import { useRouter } from "next/router";
import { useSettings } from "@context/SettingsContext";
import { IoCheckmarkCircle, IoHomeOutline, IoReceiptOutline } from "react-icons/io5";

const OrderConfirmationPage = () => {
    const router = useRouter();
    const settings = useSettings();
    const orderNumber = router.query.order || '';

    return (
        <Layout>
            <Head>
                <title>Order Confirmed | {settings?.site_name || "Birmingham Kitchens & Bedrooms"}</title>
                <meta name="description" content="Your order has been placed successfully" />
            </Head>

            <div style={{
                minHeight: '70vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '60px 20px',
                background: '#fff'
            }}>
                <div style={{
                    textAlign: 'center',
                    maxWidth: '500px',
                    width: '100%'
                }}>
                    <IoCheckmarkCircle style={{
                        fontSize: '80px',
                        color: '#2e7d32',
                        marginBottom: '24px'
                    }} />

                    <h1 style={{
                        fontSize: '28px',
                        fontWeight: 700,
                        color: '#1a1a1a',
                        marginBottom: '12px'
                    }}>
                        Order Confirmed!
                    </h1>

                    <p style={{
                        fontSize: '16px',
                        color: '#666',
                        marginBottom: '8px',
                        lineHeight: 1.6
                    }}>
                        Thank you for your order. We&apos;ll be in touch shortly with updates.
                    </p>

                    {orderNumber && (
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '12px 24px',
                            background: '#f5f5f5',
                            borderRadius: '10px',
                            marginBottom: '32px',
                            marginTop: '8px'
                        }}>
                            <IoReceiptOutline style={{ fontSize: '18px', color: '#555' }} />
                            <span style={{ fontSize: '15px', color: '#555' }}>Order Number:</span>
                            <span style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', letterSpacing: '0.5px' }}>
                                {orderNumber}
                            </span>
                        </div>
                    )}

                    <div style={{
                        display: 'flex',
                        gap: '12px',
                        justifyContent: 'center',
                        marginTop: '24px',
                        flexWrap: 'wrap'
                    }}>
                        <button
                            onClick={() => router.push('/shop')}
                            style={{
                                padding: '14px 32px',
                                background: '#D40511',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '10px',
                                fontSize: '15px',
                                fontWeight: 600,
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                transition: 'all 0.2s'
                            }}
                        >
                            Continue Shopping
                        </button>

                        <button
                            onClick={() => router.push('/')}
                            style={{
                                padding: '14px 32px',
                                background: '#f5f5f5',
                                color: '#333',
                                border: '1px solid #e0e0e0',
                                borderRadius: '10px',
                                fontSize: '15px',
                                fontWeight: 600,
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                transition: 'all 0.2s'
                            }}
                        >
                            <IoHomeOutline /> Home
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default OrderConfirmationPage;
