import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { occasion, mood, style } = req.body;

  try {
    const completion = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful AI fashion stylist." },
        { role: "user", content: `Suggest an outfit for an occasion: ${occasion}, mood: ${mood}, style: ${style}. Explain why it works.` }
      ]
    });

    res.status(200).json({ advice: completion.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}