import Head from "next/head";
import settings from "@data/settings";
import Layout from "@components/layout";
import { useSelector } from "react-redux";
import CartList from "@components/cart/listing";
import EmptyProduct from "@components/ui/empty";
import Breadcrumb from "@components/ui/breadcrumb";

const CartPage = () => {
    const cart = useSelector(state => state.shoppingCart);

    return (
        <Layout>
            <Head>
                <title>{"Shopping Cart :: " + settings?.title}</title>
                <meta name="description" content={settings?.title} />
            </Head>

            <Breadcrumb
                pageTitle="Cart"
                thumb="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=2000"
            />

            {cart.length > 0 && (
                <CartList />
            )}

            {!cart.length > 0 && (
                <EmptyProduct
                    message="There are no products in your cart!"
                />
            )}
        </Layout>
    );
};

export default CartPage;
