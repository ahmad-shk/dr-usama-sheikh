export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const formEncoded = new URLSearchParams(req.body).toString();

    const response = await fetch("https://script.google.com/macros/s/AKfycbxabH6-NEbRuoIZNgt2vmn_9zmFkO6e2SHeiMaZDz3j6v5KZMq5FxTfcauLJCkRz4LN/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formEncoded,
    });

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Proxy error:", error);
    return res.status(500).json({ error: "Proxy failed" });
  }
}
