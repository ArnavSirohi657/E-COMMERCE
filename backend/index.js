import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import productRoutes from "./routes/ProductRoutes.js";
import PayementRoutes from "./routes/PayementRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();

// ✅ CORS: No trailing slash here
const FRONTEND_URL = "https://e-commerce-fpf4.onrender.com";

// Middleware
app.use(cors({
  origin: FRONTEND_URL,
  credentials: true,
}));

app.use(express.json());

// API Routes
app.use("/api/products", productRoutes);
app.use("/api/payment", PayementRoutes);
app.use("/api/auth", authRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });

// Serve frontend build (Vite or CRA)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files
app.use(express.static(path.join(__dirname, "../frontend/dist"))); // Use ../frontend/build if CRA

// Catch-all route for React Router
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
