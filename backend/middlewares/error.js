const ErrorHandler = require("../utils/Errorhandler");

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    // Log the error for debugging
    console.error(err);

    // Handle specific errors
    if (err.name === "CastError") {
        const message = `Resource not found. Invalid: ${err.path}`;
        err = new ErrorHandler(message, 400);
    }


// for duplicate data in postman
    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
        err = new ErrorHandler(message, 400);
    }

    // wrong jwt error
    if (err.name === "JsonWebTokenError") {
        const message = `json web token is invalid , try again `;
        err = new ErrorHandler(message, 400);
    }
    

    // jwt got expires
    if (err.name === "TokenExpiredError") {
        const message = `json web token is expired , try again `;
        err = new ErrorHandler(message, 400);
    }

    // Handle other specific errors here...

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};
