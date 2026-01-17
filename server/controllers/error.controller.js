const sendErrorDev = (err, res) => {
    res.status(err.statusCode || 500).json({
        status: err.status || "error",
        message: err.message,
        stack: err.stack,
        err
    })
}

const sendErrorProd = (err, res) => {

    res.status(err.statusCode || 500).json({
        status: err.status || "error",
        message: err.message
    })

}

const HandleGlobalError = (err, req, res, next) => {

    if (process.env.NODE_ENV === "dev") {
        return sendErrorDev(err, res);
    } else if (process.env.NODE_ENV === "prod") {
        return sendErrorProd(err, res);
    }
    
}

module.exports = HandleGlobalError