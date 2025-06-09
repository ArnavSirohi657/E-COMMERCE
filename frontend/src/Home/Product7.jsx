import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";

export default function Product8() {
  const scrollRef = useRef();
  const [products, setProducts] = useState([]);

  // Scroll left by 600px
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -600, behavior: "smooth" });
    }
  };

  // Scroll right by 600px
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 600, behavior: "smooth" });
    }
  };

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => {
        const all = res.data;

        // Sort products by numeric part in title
        const sorted = all.sort((a, b) => {
          const numA = parseInt(a.title.replace(/\D/g, ""), 10);
          const numB = parseInt(b.title.replace(/\D/g, ""), 10);
          return numA - numB;
        });

        // Filter for titles Home88 to Home98
        const selected = sorted.filter(item => {
          const num = parseInt(item.title.replace(/\D/g, ""), 10);
          return num >= 77 && num <= 87;
        });

        setProducts(selected);
      })
      .catch(err => console.error("❌ Product8 fetch failed:", err));
  }, []);

  return (
    <div className="container mt-4 position-relative">
      <div className="p-3 border rounded bg-white shadow-sm">
        <div className="d-flex justify-content-between align-items-center mb-3 px-2">
          <h5 className="fw-bold m-0">Exclusive Deals | Kitchen Essentials</h5>
          <a href="#" style={{ fontSize: "14px", textDecoration: "none" }}>See all offers</a>
        </div>

        <div className="position-relative">
          {/* Left Arrow */}
          <button
            className="btn btn-light position-absolute top-50 start-0 translate-middle-y shadow"
            style={{ zIndex: 2 }}
            onClick={scrollLeft}
            aria-label="Scroll left"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="d-flex overflow-auto gap-3 px-4 pb-2"
            style={{
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {products.map((item) => (
              <div
                key={item._id}
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
                  src={item.image}
                  alt={item.title}
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
            aria-label="Scroll right"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      {/* Hide scrollbar for Webkit */}
      <style>{`
        .overflow-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
