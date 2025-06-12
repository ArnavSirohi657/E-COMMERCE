import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import productRoutes from "./routes/ProductRoutes.js"; // ✅ Import this
import PayementRoutes from "./routes/PayementRoutes.js"; // ✅ Import this
import authRoutes from "./routes/authRoutes.js";


dotenv.config();
const app = express();

app.use(cors({
  origin: "http://localhost:5173",  // or the actual frontend URL (if deployed)
  credentials: true
}));

app.use(express.json());
app.use("/api/products", productRoutes); // ✅ Mount product-related endpoints
app.use("/api/payment", PayementRoutes);


// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });

// ✅ Routes
app.use("/api/auth", authRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
