const ms = require("ms");
const CatchAsync = require("../utils/CatchAsync");
const AppError = require("../utils/AppError");
const User = require("../models/user.model");

const createSendToken = (user, statusCode, message, res) => {

    const token = user.signToken();

    const cookiesOption = {
        maxAge: ms(process.env.JWT_EXPIRES),
        httpOnly: true,
        secure: process.env.NODE_ENV !== "dev",
        samSite: "Lax",
    }

    res.cookie("ls", token, cookiesOption);
    user.password = undefined

    return res.status(statusCode).json({
        status: "succasse",
        messsage: message
    })
  
}


const signup = CatchAsync(async (req, res, next) => {

    const { firstName, lastName, email, password } = req.body

    if (!firstName || !lastName || !email || !password) {
        return next(new AppError("All field is required", 400));
    }

    const newUser = await User.create({
        firstName,
        lastName,
        email,
        password
    });

    createSendToken(newUser, 201, "You create accounte succassefuly", res);

})

const login = CatchAsync(async (req, res, next) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return next(new AppError("Email and Password is required", 400));
    }

    const user = await User.findOne({email: email}).select("+password");
    const compare = await user.comparePasswords(password, user.password);

    if (!compare) {
        return next(new AppError("Email or Password is incorrect", 400));
    }

    createSendToken(user, 200, "you login succassefuly", res);

})

module.exports = {
    signup,
    login
}