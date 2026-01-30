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
  } catch(error) {
    console.log(error);
    return next(new AppError("Studio AI is unavailable right now. Try again soon.", 503));

  }
};

module.exports = { chatWithStudio };
