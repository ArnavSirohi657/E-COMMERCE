import { useEffect, useState } from "react";
import axios from "axios";

export default function Product8() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((res) => {
        const filtered = res.data
          .filter(item => {
            const num = parseInt(item.title.replace(/\D/g, ""), 10);
            return num >= 89 && num <= 103;
          })
          .sort((a, b) => {
            const numA = parseInt(a.title.replace(/\D/g, ""), 10);
            const numB = parseInt(b.title.replace(/\D/g, ""), 10);
            return numA - numB;
          });

        const getImages = (start, end, limit = null) => {
          const images = filtered
            .filter(item => {
              const num = parseInt(item.title.replace(/\D/g, ""), 10);
              return num >= start && num <= end;
            })
            .map(item => item.image);

          return limit ? images.slice(0, limit) : images;
        };

        const getTitle = (number) => {
          const item = filtered.find(p =>
            parseInt(p.title.replace(/\D/g, ""), 10) === number
          );
          return item ? item.title : `Product ${number}`;
        };

        const formatted = [
          {
            heading: "Up to 60% off | Trending products from Emerging Busi...",
            image: getImages(89, 89)[0] || "",
            desc: getTitle(89),
            price: "₹299.00",
            thumbnails: getImages(89, 92),
          },
          {
            heading: "Starting ₹70,348 | Ride into your next adventure",
            image: getImages(93, 93)[0] || "",
            desc: getTitle(93),
            price: "₹1,34,500",
            thumbnails: getImages(93, 95), // 93–95
          },
          {
            heading: "Starting ₹229 | Unique home essentials from nearby stores",
            image: getImages(97, 97)[0] || "",
            desc: getTitle(97),
            price: "₹13,299",
            thumbnails: getImages(97, 99), // 97–99 only
          },
          {
            heading: "Best Sellers in Beauty",
            image: getImages(101, 101)[0] || "",
            desc: getTitle(101),
            price: "₹395.00",
            thumbnails: getImages(101, 102), // 101, 102 only
          }
        ];

        setProducts(formatted);
      })
      .catch((err) => console.error("❌ Error loading Product8 data:", err));
  }, []);

  return (
    <div className="container my-4">
      <div className="row g-4">
        {products.map((product, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3">
            <div className="border p-3 h-100 bg-white shadow-sm d-flex flex-column">
              <h6 className="fw-semibold text-start">{product.heading}</h6>
              <img
                src={product.image}
                alt="Main product"
                className="img-fluid my-2 align-self-start hover-main-image"
                style={{ height: "160px", objectFit: "contain" }}
              />
              <p className="text-start small mb-1">{product.desc}</p>
              <p className="fw-bold text-start mb-2">{product.price}</p>
              <div className="d-flex gap-2 justify-content-start mt-auto">
                {product.thumbnails.map((thumb, i) => (
                  <img
                    key={i}
                    src={thumb}
                    alt={`Thumbnail ${i}`}
                    className="img-thumbnail hover-thumbnail"
                    style={{
                      width: "45px",
                      height: "45px",
                      objectFit: "cover",
                      padding: "2px"
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hover Styles */}
      <style>{`
        .hover-main-image {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-main-image:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          cursor: pointer;
        }

        .hover-thumbnail {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-thumbnail:hover {
          transform: scale(1.08);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
