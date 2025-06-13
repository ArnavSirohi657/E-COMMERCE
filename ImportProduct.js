import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import Product from "./backend/model/ProductModel.js"; // Correct path

dotenv.config(); // ✅ Just this (no path needed)


const importData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const dataPath = path.join(path.resolve(), "database", "ProductData.json");
    const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

    await Product.deleteMany(); // Clear old products (optional)
    await Product.insertMany(data); // Insert new ones

    console.log("✅ Products Inserted Successfully!");
    process.exit();
  } catch (err) {
    console.error("❌ Error inserting data:", err);
    process.exit(1);
  }
};

importData();
