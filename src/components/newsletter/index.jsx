import { useState } from "react";
import Button from "@components/ui/button";
import { IoIosSend } from "react-icons/io";
import { Form, FormGroup } from "@bootstrap";
import { FormNewsletter, Input } from "./newsletter.style";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const NewsletterForm = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [isError, setIsError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || loading) return;

        setLoading(true);
        setMessage(null);

        try {
            const res = await fetch(`${API_URL}/api/newsletter/subscribe`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (res.status === 429) {
                setIsError(true);
                setMessage("Too many attempts. Please try again later.");
            } else if (res.status === 422) {
                setIsError(true);
                setMessage("Please enter a valid email address.");
            } else {
                setIsError(!data.success);
                setMessage(data.message);
                if (data.success) setEmail("");
            }
        } catch {
            setIsError(true);
            setMessage("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <FormNewsletter mt={20}>
            <Form onSubmit={handleSubmit}>
                <FormGroup className="mb-0">
                    <label className="sr-only" htmlFor="newsletterInput">Newsletter</label>
                    <Input
                        type="email"
                        id="newsletterInput"
                        placeholder="Enter E-mail Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Button
                        tag="button"
                        type="submit"
                        color="white"
                        bg="primary"
                        hvrBg="heading"
                        disabled={loading}
                    >
                        <IoIosSend />
                        {loading ? "Sending..." : "Subscribe"}
                    </Button>
                </FormGroup>
            </Form>
            {message && (
                <p
                    style={{
                        marginTop: "10px",
                        fontSize: "13px",
                        color: isError ? "#ef4444" : "#10b981",
                    }}
                >
                    {message}
                </p>
            )}
        </FormNewsletter>
    );
};

export default NewsletterForm;