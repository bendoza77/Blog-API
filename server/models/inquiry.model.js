const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
    },
    company: {
      type: String,
      trim: true,
    },
    focus: {
      type: String,
      enum: ["clarity", "motion", "intent", "strategy"],
      default: "clarity",
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      minlength: 10,
    },
    status: {
      type: String,
      enum: ["new", "in-progress", "closed"],
      default: "new",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inquiry", inquirySchema);
