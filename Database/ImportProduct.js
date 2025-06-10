import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import Product from "../backend/model/ProductModel.js"; // Correct relative path to the model

dotenv.config({ path: "../backend/.env" }); // Load .env from backend

const importData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const dataPath = path.join(path.resolve(), "ProductData.json"); // Resolves from current dir
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
