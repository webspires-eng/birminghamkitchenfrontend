import Head from "next/head";
import { Container, Row, Col } from "@bootstrap";
import Layout from "@components/layout";
import SectionTitle from "@components/ui/section-title";
import { useDispatch } from "react-redux";
import { clearCartAction } from "@global/actions/cartAction";
import Button from "@components/ui/button";
import { useRouter } from "next/router";
import CheckoutForm from "@components/checkout/checkout-form";
import OrderDetails from "@components/checkout/order-details";

const CheckoutPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const handlePlaceOrder = () => {
        dispatch(clearCartAction());
        // Redirect to success or home
        alert("Order placed successfully! (This is a static demo)");
        router.push("/");
    };

    return (
        <Layout>
            <Head>
                <title>Checkout</title>
            </Head>
            <Container style={{ paddingTop: '60px', paddingBottom: '60px' }} className="standard-page-padding">
                <style jsx>{`
                    @media (max-width: 768px) {
                        .standard-page-padding {
                            padding-top: 40px !important;
                            padding-bottom: 40px !important;
                        }
                    }
                `}</style>
                <Row>
                    <Col lg={7}>
                        <SectionTitle
                            title="Billing Details"
                            align="left"
                            className="mb-4"
                        />
                        <CheckoutForm />
                    </Col>
                    <Col lg={5}>
                        <SectionTitle
                            title="Your Order"
                            align="left"
                            className="mb-4"
                        />
                        <OrderDetails onPlaceOrder={handlePlaceOrder} />
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default CheckoutPage;
