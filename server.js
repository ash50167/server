const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoutes = require("./routes/authRoutes");
const connectDB = require('./config/db');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", methods: "GET,POST,PUT,DELETE", allowedHeaders: ["Content-Type", "Authorization"], credentials: true }));
app.use(cookieParser());


const server = (req, res) => {
    res.send("Server is running...");
};

// Routes
app.get("/", server);
app.use("/api/auth", authRoutes);


// Database connection
connectDB();

// Port
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});