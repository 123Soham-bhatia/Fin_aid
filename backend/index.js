const express = require("express");
const app = express();
const cors = require("cors"); // Importing cors
const cookieParser = require("cookie-parser");

require("dotenv").config(); // Load environment variables
const PORT = process.env.PORT || 5000;

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
    console.error(`Error: ${err.message}`);
    console.error(`Shutting down the server due to uncaught exception`);
    process.exit(1);
});

// Middleware
app.use(cookieParser());
app.use(express.json());

// CORS configuration
const allowedOrigins = [
    'http://localhost:3000', // Development frontend
    'https://finaid-git-main-soham01s-projects.vercel.app/' // Production frontend
];

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true); // Allow the origin
        } else {
            callback(new Error('Not allowed by CORS')); // Block the origin
        }
    },
    credentials: true, // Allow cookies and credentials
    optionsSuccessStatus: 200 // For legacy browsers
};

app.use(cors(corsOptions));

// Connect to database
const dbconnect = require("./Config/database");
dbconnect();

// Routes
const newuser = require("./Routers/route");
app.use("/api/v1", newuser);

// Test route
app.get("/", (req, res) => {
    res.send("Yeah baby, this is port no -> 3000");
});

// Start server
const server = app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
    console.error(`Error: ${err.message}`);
    console.error(`Shutting down the server due to unhandled promise rejection`);
    
    server.close(() => {
        process.exit(1);
    });
});
