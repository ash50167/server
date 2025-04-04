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
// app.use(cors({ origin: "*", methods: "GET,POST,PUT,DELETE", allowedHeaders: ["Content-Type", "Authorization"], credentials: true }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://client-beryl-xi.vercel.app');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});
app.use(cookieParser());


const server = (req, res) => {
    res.send("Server is running on vercel...");
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