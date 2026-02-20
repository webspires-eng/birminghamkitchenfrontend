const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

export default async function handler(req, res) {
    // Only allow POST for coupon validation
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const response = await fetch(`${API_BASE_URL}/api/coupons/validate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(req.body),
        });

        const data = await response.json();
        return res.status(response.status).json(data);
    } catch (err) {
        console.error("Coupon validation proxy error:", err.message);
        return res.status(500).json({ error: "Failed to validate coupon" });
    }
}
