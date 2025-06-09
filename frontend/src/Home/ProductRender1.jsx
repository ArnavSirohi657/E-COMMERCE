import React, { useEffect, useState } from "react";
import axios from "axios";
import Product1 from "./Product1";

export default function ProductRender1() {
  const [images, setImages] = useState([]);

  const headings = [
    "Appliances for your home | Up to 55% off",
    "PlayStation 5 Slim & Accessories | No Cost EMI*",
    "Revamp your home in style",
    "Starting ₹149 | Headphones"
  ];

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((res) => {
        // ✅ Sort by numeric value from title (e.g., "Home01" → 1, "Home100" → 100)
        const sorted = res.data.sort((a, b) => {
          const numA = parseInt(a.title.replace(/\D/g, ""));
          const numB = parseInt(b.title.replace(/\D/g, ""));
          return numA - numB;
        });

        setImages(sorted.map(p => p.image));
      })
      .catch((err) => console.error("❌ Error fetching images:", err));
  }, []);

  // Group images into sets of 4 for each Product1
  const groupedImages = [];
  for (let i = 0; i < headings.length; i++) {
    groupedImages.push(images.slice(i * 4, i * 4 + 4));
  }

  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {groupedImages.map((group, index) => (
          <div className="col" key={index}>
            <div className="p-3 border rounded bg-light shadow-lg h-100">
              <Product1
                Heading={headings[index]}
                image1={group[0]}
                image2={group[1]}
                image3={group[2]}
                image4={group[3]}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
