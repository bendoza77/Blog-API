const CatchAsync = require("../utils/CatchAsync");
const AppError = require("../utils/AppError");
const Inquiry = require("../models/inquiry.model");

const createInquiry = CatchAsync(async (req, res, next) => {
  const { name, email, company, focus, message } = req.body;

  if (!name || !email || !message) {
    return next(new AppError("Name, email and message are required", 400));
  }

  const inquiry = await Inquiry.create({ name, email, company, focus, message });

  return res.status(201).json({
    status: "success",
    message: "Thanks for reaching out — we’ll respond shortly",
    data: inquiry,
  });
});

const listInquiries = CatchAsync(async (req, res) => {
  const filters = req.query.status ? { status: req.query.status } : {};
  const inquiries = await Inquiry.find(filters).sort({ createdAt: -1 });

  return res.json({
    status: "success",
    data: inquiries,
  });
});

module.exports = {
  createInquiry,
  listInquiries,
};
