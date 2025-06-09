import { useEffect, useState } from "react";
import axios from "axios";

export default function Product5() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((res) => {
        const sorted = res.data.sort((a, b) => {
          const numA = parseInt(a.title.replace(/\D/g, ""));
          const numB = parseInt(b.title.replace(/\D/g, ""));
          return numA - numB;
        });

        const staticImages = Array.from({ length: 17 }, (_, i) => `/HomePage/Home${53 + i}.jpg`);

        const formatted = [
          {
            heading: "Up to 60% off | Trending products from Emerging Busi...",
            image: staticImages[0], // img 53
            desc: sorted[0]?.title || "Magnetic Cable Clips",
            price: "₹299.00",
            thumbnails: staticImages.slice(0, 4), // img 53–56 (main img included)
          },
          {
            heading: "Starting ₹70,348 | Ride into your next adventure",
            image: staticImages[5],
            desc: sorted[6]?.title || "Electric Scooter",
            price: "₹1,34,500",
            thumbnails: staticImages.slice(6, 10),
          },
          {
            heading: "Starting ₹229 | Unique home essentials from nearby stores",
            image: staticImages[10],
            desc: sorted[11]?.title || "Buddha Fountain",
            price: "₹13,299",
            thumbnails: staticImages.slice(11, 15),
          },
          {
            heading: "Best Sellers in Beauty",
            image: staticImages[15],
            desc: sorted[16]?.title || "Ghar Soaps Pack",
            price: "₹395.00",
            thumbnails: staticImages.slice(16, 17).concat(staticImages.slice(13, 15)),
          }
        ];

        setProducts(formatted);
      })
      .catch((err) => console.error("❌ Error loading Product5 data:", err));
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
