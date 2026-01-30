const express = require("express");
const { default: mongoose } = require("mongoose");
const morgan = require("morgan");
const HandleGlobalError = require("./controllers/error.controller");
const userRouter = require("./routers/user.router");
const authRouter = require("./routers/auth.router");
const postRouter = require("./routers/post.router");
const commentRouter = require("./routers/comment.router");
const inquiryRouter = require("./routers/inquiry.router");
const aiRouter = require("./routers/ai.router");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

if (process.env.NODE_ENV === "dev") {
    app.use(morgan("dev"));
}

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.use(express.static(path.join(__dirname, "public")));

// routers
app.use("/api/users", userRouter);
app.use("/api/auths", authRouter);
app.use("/api/posts", postRouter);
app.use("/api/comments", commentRouter)
app.use("/api/inquiries", inquiryRouter)
app.use("/api/ai", aiRouter)

// global erro hanlder middlware function
app.use(HandleGlobalError)



mongoose.connect(process.env.DATABASE_URL).then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running in port ${process.env.PORT}`);
    })
}).catch((error) => {
    console.log(error);
    process.exit(1);
})