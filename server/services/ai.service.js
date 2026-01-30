const OpenAI = require("openai");
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT =
  "You are ÆTHER Studio's assistant. Answer with practical product, design, and motion advice.";

const generateResponse = async (messages) => {
  try {
    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
      input: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages,
      ],
      temperature: 0.6,
    });

    return response.output_text || "I’m here to help.";
  } catch (err) {
    console.error("OpenAI Error:", err);
    throw new Error("Studio AI is unavailable right now.");
  }
};


module.exports = { generateResponse };
