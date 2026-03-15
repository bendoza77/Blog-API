const AppError = require("../utils/AppError");
const { generateResponse } = require("../services/ai.service");

const chatWithStudio = async (req, res, next) => {
  const { question } = req.body;

  if (!question) return next(new AppError("Question is required", 400));

  const messagePayload = [
    { role: "user", content: question },
  ];

  try {
    const answer = await generateResponse(messagePayload);

    return res.json({
      status: "success",
      data: { answer },
    });
  } catch (error) {
    console.error("AI chat error:", error.message || error);
    const message = error.message || "Studio AI is unavailable right now. Try again soon.";
    return next(new AppError(message, 503));
  }
};

module.exports = { chatWithStudio };
