const User = require("../models/user.model");
const AppError = require("../utils/AppError");
const CatchAsync = require("../utils/CatchAsync");
const jwt = require("jsonwebtoken");

const protect = CatchAsync(async (req, res, next) => {

    try {
        const ls = req.cookies?.ls;

        if (!ls) return next(new AppError("User is not login", 401));

        const decode = jwt.verify(ls, process.env.JWT_SECRET);

        if (!decode) return next(new AppError("Ls is invalid", 404));

        const user = await User.findById(decode.id);

        if (!user) return next(new AppError("User not found", 404));

        req.user = user;

        next();
    } catch(error) {
        console.log(error);
    }

})

module.exports = protect