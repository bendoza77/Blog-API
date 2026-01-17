const express = require("express");
const { default: mongoose } = require("mongoose");
const morgan = require("morgan");
const HandleGlobalError = require("./controllers/error.controller");
const userRouter = require("./routers/user.router");
const authRouter = require("./routers/auth.router");
const postRouter = require("./routers/post.router");
require("dotenv").config();

const app = express();

if (process.env.NODE_ENV === "dev") {
    app.use(morgan("dev"));
}

app.use(express.json());

// routers
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);

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