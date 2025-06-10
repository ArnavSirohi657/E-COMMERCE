import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Product7() {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -600, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 600, behavior: "smooth" });
  };

  return (
    <div className="container mt-4 position-relative">
      <div className="p-3 border rounded bg-white shadow-sm">
        <div className="d-flex justify-content-between align-items-center mb-3 px-2">
          <h5 className="fw-bold m-0">Up to 60% off | Kitchen must-haves from stores near you</h5>
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
            style={{
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {[
              "/HomePage/Home77.jpg",
              "/HomePage/Home78.jpg",
              "/HomePage/Home79.jpg",
              "/HomePage/Home80.jpg",
              "/HomePage/Home81.jpg",
              "/HomePage/Home82.jpg",
              "/HomePage/Home83.jpg",
              "/HomePage/Home84.jpg",
              "/HomePage/Home85.jpg",
              "/HomePage/Home86.jpg",
              "/HomePage/Home87.jpg",
            ].map((src, index) => (
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

      {/* Hide scrollbar for Webkit browsers */}
      <style>{`
        .overflow-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}