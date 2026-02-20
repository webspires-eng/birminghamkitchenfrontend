import Head from "next/head";
import Layout from "@components/layout";
import Breadcrumb from "@components/ui/breadcrumb";
import Contact from "@components/contact";
import { useSettings } from "@context/SettingsContext";

const ContactPage = () => {
    const settings = useSettings();
    const siteName = settings?.site_name || "Birmingham Kitchens & Bedrooms";

    return (
        <Layout>
            <Head>
                <title>{"Contact Us | " + siteName}</title>
                <meta name="description" content={`Get in touch with ${siteName}. ${settings?.contact_phone ? `Call us at ${settings.contact_phone}` : ''} ${settings?.contact_email ? `or email ${settings.contact_email}` : ''}.`} />
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
