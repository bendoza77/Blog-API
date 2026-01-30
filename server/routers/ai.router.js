const express = require("express");
const { chatWithStudio } = require("../controllers/ai.controller");

const aiRouter = express.Router();

aiRouter.post("/chat", chatWithStudio);

module.exports = aiRouter;
