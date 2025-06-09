import React, { useEffect, useState } from "react";
import axios from "axios";
import Product2 from "./Product2";

export default function ProductRender2() {
  const [images, setImages] = useState([]);

  const headings = [
    "Min. 40% off | Fun toys & games | Amazon Brands",
    "Under ₹499 | Deals on home improvement essentials*",
    "Automotive essentials | Up to 60% off",
    "Starting ₹199 | Amazon Brands & more"
  ];

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        const sorted = res.data.sort((a, b) => {
          const numA = parseInt(a.title.replace(/\D/g, ""));
          const numB = parseInt(b.title.replace(/\D/g, ""));
          return numA - numB;
        });

        const allImages = sorted.map((p) => p.image);

        // ✅ Skip first 16 (from ProductRender1), load next 16
        const startIndex = 16;
        const nextSet = allImages.slice(startIndex, startIndex + 16);

        setImages(nextSet);
      })
      .catch((err) => console.error("❌ Error fetching images:", err));
  }, []);

  const groupedImages = [];
  for (let i = 0; i < headings.length; i++) {
    const group = images.slice(i * 4, i * 4 + 4);
    if (group.length === 4) groupedImages.push(group);
  }

  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {groupedImages.map((group, index) => (
          <div className="col" key={index}>
            <div className="p-3 border rounded bg-light shadow-lg h-100">
              <Product2
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
