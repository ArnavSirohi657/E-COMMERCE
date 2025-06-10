import mongoose from "mongoose";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import LightProduct from "./model/LightProductModel.js"; // use your lightweight model

dotenv.config();

// ✅ Connect to MongoDB (no deprecated options)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection failed", err));

// 🔁 Recursively get image files inside "HomePage" folder only
function getHomePageImages(dir) {
  let results = [];
  const list = fs.readdirSync(dir);

  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (path.basename(fullPath) === "HomePage") {
        results = results.concat(getImageFilesRecursively(fullPath, fullPath));
      } else {
        results = results.concat(getHomePageImages(fullPath));
      }
    }
  }

  return results;
}

// 🔁 Recursively get images from HomePage
function getImageFilesRecursively(dir, root = dir) {
  let results = [];
  const list = fs.readdirSync(dir);

  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      results = results.concat(getImageFilesRecursively(fullPath, root));
    } else if (/\.(jpg|jpeg|png|webp|avif)$/i.test(file)) {
      const relativePath = path.relative(root, fullPath).replace(/\\/g, "/");
      results.push("HomePage/" + relativePath);
    }
  }

  return results;
}

async function seedHomePageImages() {
  const publicDir = path.join(process.cwd(), "../frontend/public");

  console.log("🛣️ Public Dir:", publicDir);

  const imagePaths = getHomePageImages(publicDir);
  console.log("📂 Found", imagePaths.length, "HomePage images.");

  const products = imagePaths.map((relativePath, index) => ({
    id: index + 1,
    image: "/" + relativePath,
  }));

  await LightProduct.deleteMany(); // clear old
  await LightProduct.insertMany(products); // insert new

  console.log("✅ Inserted", products.length, "HomePage products");

  mongoose.disconnect();
}

seedHomePageImages();
