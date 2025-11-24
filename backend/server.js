// Import required packages
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const contactRoutes = require("./Routes/ContactRoutes");

// Load environment variables from .env
dotenv.config();

// Initialize Express app
const app = express();

// Define the port
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || "*", // Frontend URL or allow all
  methods: ["GET", "POST"],
  credentials: true,
}));
app.use(express.json()); // Parse JSON bodies

// API Routes
app.use("/api", contactRoutes);

// Root route (health check)
app.get("/", (req, res) => {
  res.send("✅ Portfolio Backend API is running...");
});

// Start the server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

