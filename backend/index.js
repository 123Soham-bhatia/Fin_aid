const express = require("express");
const app = express();
const cors = require("cors"); // Importing cors
const cookieParser = require("cookie-parser");

process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to unhandled promise rejection`);
    process.exit(1);
});

require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Using cors middleware
app.use(cookieParser());
app.use(express.json());
const corsOptions = {
    origin: 'http://localhost:3001', // Replace with your frontend domain
    optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));


const newuser = require("./Routers/route");
app.use("/api/v1", newuser);

const dbconnect = require("./Config/database");
dbconnect();

// Middleware, routes, etc.
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Yeah baby, this is port no -> 3000");
});

process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to unhandled promise rejection`);
    
    server.close(() => {
        process.exit(1);
    });
});
