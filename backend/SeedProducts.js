import mongoose from "mongoose";
import dotenv from "dotenv";
import { faker } from "@faker-js/faker";
import Product from "./model/ProductModel.js"; 

dotenv.config();

const categories = ["electronics", "fashion", "books", "home", "sports"];

const generateProducts = (count = 100) => {
  const products = [];

  for (let i = 0; i < count; i++) {
    const category = faker.helpers.arrayElement(categories);
    products.push({
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: parseFloat(faker.commerce.price({ min: 100, max: 10000 })),
      category: category,
      image: `https://source.unsplash.com/400x400/?${category},${faker.word.sample()}`

    });
  }

  return products;
};

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log("✅ MongoDB Connected");
  const data = generateProducts(100);
  await Product.deleteMany(); // optional: clear old data
  await Product.insertMany(data);
  console.log("✅ 100 Products Inserted");
  process.exit();
})
.catch((err) => {
  console.error("❌ DB Connection Failed:", err);
  process.exit(1);
});
