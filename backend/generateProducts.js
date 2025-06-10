import fs from 'fs';
import { faker } from '@faker-js/faker';

const categories = ["electronics", "fashion", "books", "home", "sports"];
const baseImagePath = "/images/products";

const generateProducts = (count = 100) => {
  const products = [];

  for (let i = 1; i <= count; i++) {
    const category = faker.helpers.arrayElement(categories);
    products.push({
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: parseFloat(faker.commerce.price({ min: 100, max: 10000 })),
      category,
      image: `${baseImagePath}/product${i}.jpg`,
    });
  }

  return products;
};

const products = generateProducts(100);
fs.writeFileSync('products.json', JSON.stringify(products, null, 2), 'utf-8');
console.log("✅ products.json generated");
