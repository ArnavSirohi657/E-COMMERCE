import { useRef } from "react";

export default function Component3() {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  const banners = [
    "/FashionPage/Fashion28.png",
    "/FashionPage/Fashion29.png",
    "/FashionPage/Fashion30.png",
   
  ];

  return (
    <div className="container-fluid py-4" style={{ backgroundColor: "#f6f6f6" }}>
      <h4 className="fw-bold mb-3 px-4">Enjoy Extra Savings</h4>

      <div className="position-relative">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="btn btn-light position-absolute start-0 top-50 translate-middle-y shadow-sm border"
          style={{ zIndex: 10 }}
        >
          ◀
        </button>

        {/* Scrollable Banner */}
        <div
          ref={scrollRef}
          className="d-flex overflow-auto px-5 gap-3"
          style={{
            scrollBehavior: "smooth",
            whiteSpace: "nowrap",
          }}
        >
          {banners.map((src, index) => (
            <div
              key={index}
              className="bg-white rounded shadow-sm flex-shrink-0"
              style={{ width: "380px", height: "180px", overflow: "hidden" }}
            >
              <img
                src={src}
                alt={`Banner ${index + 1}`}
                className="img-fluid w-100 h-100"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="btn btn-light position-absolute end-0 top-50 translate-middle-y shadow-sm border"
          style={{ zIndex: 10 }}
        >
          ▶
        </button>
      </div>
    </div>
  );
}
