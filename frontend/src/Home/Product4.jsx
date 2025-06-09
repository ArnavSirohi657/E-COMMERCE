import { useRef, useEffect, useState } from "react";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Product4() {
  const scrollRef = useRef();
  const [images, setImages] = useState([]);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -600, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 600, behavior: "smooth" });
  };

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((res) => {
        // Sort numerically using title (e.g., Home46 → 46)
        const sorted = res.data.sort((a, b) => {
          const numA = parseInt(a.title.replace(/\D/g, ""));
          const numB = parseInt(b.title.replace(/\D/g, ""));
          return numA - numB;
        });

        const allImages = sorted.map(p => p.image);
        const range = allImages.slice(46, 53); // ✅ Load image index 46 to 52
        setImages(range);
      })
      .catch(err => console.error("❌ Error loading Product4 images:", err));
  }, []);

  return (
    <div className="container mt-4 position-relative">
      <div className="p-3 border rounded bg-white shadow-sm">
        <div className="d-flex justify-content-between align-items-center mb-3 px-2">
          <h5 className="fw-bold m-0">Up to 50% off | Electronics & accessories from stores near you</h5>
          <a href="#" style={{ fontSize: "14px", textDecoration: "none" }}>See all offers</a>
        </div>

        <div className="position-relative">
          {/* Left Arrow */}
          <button
            className="btn btn-light position-absolute top-50 start-0 translate-middle-y shadow"
            style={{ zIndex: 2 }}
            onClick={scrollLeft}
          >
            <ChevronLeft size={22} />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="d-flex overflow-auto gap-3 px-4 pb-2"
            style={{ scrollBehavior: "smooth", scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="bg-light border rounded p-2"
                style={{
                  minWidth: "160px",
                  maxWidth: "160px",
                  height: "220px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <img
                  src={src}
                  alt={`Product ${index + 1}`}
                  className="product-hover-img"
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className="btn btn-light position-absolute top-50 end-0 translate-middle-y shadow"
            style={{ zIndex: 2 }}
            onClick={scrollRight}
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      {/* Scrollbar and hover styles */}
      <style>{`
        .overflow-auto::-webkit-scrollbar {
          display: none;
        }

        .product-hover-img {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .product-hover-img:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
