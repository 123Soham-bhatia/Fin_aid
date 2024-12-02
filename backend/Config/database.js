const mongoose = require('mongoose');
require("dotenv").config(); // Load environment variables

const dbconnect = () => {
    const dbUrl = process.env.DATABASE_URL; // Fetching the URL from .env

    if (!dbUrl) {
        console.error("DATABASE_URL is not defined in the environment variables.");
        return;
    }

    mongoose.connect(dbUrl, { 
        dbName: "finance" 
    })
    .then(() => {
        console.log("DB connection successful!");
    })
    .catch((err) => {
        console.error("DB connection error:", err.message);
    });
};

module.exports = dbconnect;
