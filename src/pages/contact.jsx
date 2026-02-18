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
            />

            <Contact />
        </Layout>
    );
};

export default ContactPage;
