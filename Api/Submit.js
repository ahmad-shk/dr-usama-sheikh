import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxabH6-NEbRuoIZNgt2vmn_9zmFkO6e2SHeiMaZDz3j6v5KZMq5FxTfcauLJCkRz4LN/exec";

  try {
    const response = await axios.post(GOOGLE_SCRIPT_URL, req.body);
    return res.status(200).json({ success: true, result: response.data });
  } catch (error) {
    console.error("Google Sheet Error:", error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
}
