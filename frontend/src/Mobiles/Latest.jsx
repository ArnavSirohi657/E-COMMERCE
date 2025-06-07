import { useRef } from "react";

export default function Latest() {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="container my-5">
      <h3 className="mb-3 fw-bold">Latest launches in Mobiles & Accessories</h3>

      <div className="position-relative">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="btn btn-dark position-absolute start-0 top-50 translate-middle-y z-3"
          style={{ zIndex: 2 }}
        >
          ◀
        </button>

        {/* Scrollable Row */}
        <div
          ref={scrollRef}
          className="d-flex overflow-auto gap-3 px-5"
          style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
        >
          {[
            "Mobile05.jpg",
            "Mobile06.jpg",
            "Mobile07.jpg",
            "Mobile08.jpg",
            "Mobile09.png",
            "Mobile10.jpg",
            "Mobile11.jpg",
            "Mobile12.png",
            "Mobile12.png",
            "Mobile14.jpg",
            "Mobile15.png",
          ].map((img, index) => (
            <img
              key={index}
              src={`/Mobiles/${img}`}
              alt={`Mobile ${index}`}
              className="rounded shadow-sm"
              style={{ width: "200px", height: "auto" }}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="btn btn-dark position-absolute end-0 top-50 translate-middle-y z-3"
          style={{ zIndex: 2 }}
        >
          ▶
        </button>
      </div>
    </div>
  );
}
