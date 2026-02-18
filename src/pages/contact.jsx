import Head from "next/head";
import settings from "@data/settings";
import Layout from "@components/layout";
import Breadcrumb from "@components/ui/breadcrumb";
import Contact from "@components/contact";

const ContactPage = () => {
    return (
        <Layout>
            <Head>
                <title>{"Contact Us :: " + settings?.title}</title>
                <meta name="description" content={settings?.description} />
            </Head>

            <Breadcrumb
                pageTitle="Contact"
                thumb="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=2000"
            />

            <Contact />
        </Layout>
    );
};

export default ContactPage;
