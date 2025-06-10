import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import Product from "./model/ProductModel.js"; // Adjust this path if needed

dotenv.config(); // This loads .env from backend folder (you're running from here)

const importData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const dataPath = path.join("..", "Database", "ProductData.json"); // File inside Database/
    const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

    await Product.deleteMany(); // Optional
    await Product.insertMany(data);

    console.log("✅ Products Inserted Successfully!");
    process.exit();
  } catch (err) {
    console.error("❌ Error inserting data:", err);
    process.exit(1);
  }
};

importData();
