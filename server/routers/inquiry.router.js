const express = require("express");
const { createInquiry, listInquiries } = require("../controllers/inquiry.controller");
const protect = require("../middlewares/auth.middleware");
const allowedTo = require("../middlewares/role.middleware");

const inquiryRouter = express.Router();

inquiryRouter.route("/")
  .get(protect, allowedTo("admin", "moderator"), listInquiries)
  .post(createInquiry);

module.exports = inquiryRouter;
