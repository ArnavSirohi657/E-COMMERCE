import mongoose from "mongoose";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import Product from "./model/ProductModel.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection failed", err));

// Recursively fetch images from public/
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
      results.push(relativePath); // e.g. Homepage/Electronic/AC.webp
    }
  }

  return results;
}

function generateRandomPrice(min = 199, max = 9999) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function seedProducts() {
  const publicDir = path.join(process.cwd(), "../frontend/public");

  // ✅ These must be inside this function
  console.log("🛣️ Public Dir:", publicDir);
  console.log("📂 Contents:", fs.readdirSync(publicDir));

  const imagePaths = getImageFilesRecursively(publicDir);

  console.log("📂 Found", imagePaths.length, "image files.");

  const products = imagePaths.map((relativePath) => {
    const parts = relativePath.split("/");
    const fileName = parts[parts.length - 1];
    const category = parts[0];

    const title = fileName
      .replace(/\.[^/.]+$/, "")
      .replace(/[-_]/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    return {
      title: title.charAt(0).toUpperCase() + title.slice(1),
      image: "/" + relativePath,
      price: generateRandomPrice(),
      offer: "12% off",
      description: "Limited time deal",
      category,
      label: "Best Seller",
    };
  });

  await Product.deleteMany();
  await Product.insertMany(products);

  console.log("✅ Seeded", products.length, "products.");

  mongoose.disconnect();
}



seedProducts();
