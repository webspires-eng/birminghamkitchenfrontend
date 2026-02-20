const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const response = await fetch(`${API_BASE_URL}/api/mattresses`);
        if (!response.ok) {
            return res.status(response.status).json({ error: `API error: ${response.status}` });
        }
        const data = await response.json();
        const mattresses = (Array.isArray(data) ? data : data.data || []).map(m => ({
            ...m,
            image: m.image
                ? (m.image.startsWith('http') ? m.image : `${API_BASE_URL}${m.image}`)
                : null,
        }));
        return res.status(200).json(mattresses);
    } catch (err) {
        console.error("Mattresses proxy error:", err.message);
        return res.status(500).json({ error: "Failed to fetch mattresses" });
    }
}
