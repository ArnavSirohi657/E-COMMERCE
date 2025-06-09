import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";

export default function Product6() {
  const scrollRef = useRef();
  const [products, setProducts] = useState([]);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => {
        const sorted = res.data.sort((a, b) => {
          const numA = parseInt(a.title.replace(/\D/g, ""));
          const numB = parseInt(b.title.replace(/\D/g, ""));
          return numA - numB;
        });

        // Select images Home70.jpg to Home76.jpg → 7 items
        const selected = sorted.slice(69, 76); // Adjust based on index (starts at 0)
        setProducts(selected);
      })
      .catch(err => console.error("❌ Error loading Product6 data:", err));
  }, []);

  return (
    <div className="container mt-4 position-relative">
      <div className="p-3 border rounded bg-light shadow-lg">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="fw-bold m-0">Starting ₹199 | Kids’ favorite top rated toys</h5>
          <a href="#" style={{ fontSize: "14px" }}>See all offers</a>
        </div>

        {/* Scroll Container with Arrows */}
        <div className="position-relative">
          {/* Left Arrow */}
          <button
            className="btn btn-light position-absolute top-50 start-0 translate-middle-y shadow"
            style={{ zIndex: 1 }}
            onClick={scrollLeft}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Scrollable Images */}
          <div
            className="d-flex overflow-auto gap-3 px-4"
            ref={scrollRef}
            style={{ scrollBehavior: "smooth" }}
          >
            {products.map((item, index) => (
              <img
                key={index}
                src={item.image}
                alt={item.title}
                className="img-fluid rounded toy-hover"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  flexShrink: 0
                }}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className="btn btn-light position-absolute top-50 end-0 translate-middle-y shadow"
            style={{ zIndex: 1 }}
            onClick={scrollRight}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Optional Hover Style */}
      <style>{`
        .toy-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .toy-hover:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
