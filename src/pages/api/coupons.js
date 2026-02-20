const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

export default async function handler(req, res) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/coupons`);
        if (!response.ok) {
            return res.status(response.status).json({ error: `API error: ${response.status}` });
        }
        const data = await response.json();
        return res.status(200).json(data);
    } catch (err) {
        console.error("Coupons proxy error:", err.message);
        return res.status(500).json({ error: "Failed to fetch coupons" });
    }
}
