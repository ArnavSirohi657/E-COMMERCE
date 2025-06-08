import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Component4() {
  const scrollRef = useRef(null);

  const CarGadget = [
    { image: "/CarPage/Car31.jpg" },
    { image: "/CarPage/Car32.jpg" },
    { image: "/CarPage/Car33.jpg" },
    { image: "/CarPage/Car35.jpg" },
    { image: "/CarPage/Car36.jpg" },
    { image: "/CarPage/Car37.jpg" },
    { image: "/CarPage/Car38.jpg" },
    { image: "/CarPage/Car39.jpg" },
   
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="py-5 bg-light position-relative">
      

      {/* Scrollable Row */}
      <div
        ref={scrollRef}
        className="d-flex flex-nowrap overflow-auto px-5"
        style={{ gap: "2rem", scrollBehavior: "smooth" }}
      >
        {CarGadget.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-4 shadow-sm text-center p-3 flex-shrink-0"
            style={{ width: "180px", height: "260px" }}
          >
            <img
              src={item.image}
              alt=""
              style={{
                height: "200px",
                width: "100%",
                objectFit: "cover",
                borderRadius: "12px",
              }}
              className="mb-2"
            />
          </div>
        ))}
      </div>

      {/* Arrows - Positioned outside the container */}
      <button
        className="btn btn-light position-absolute top-50 start-0 translate-middle-y z-2 shadow"
        onClick={() => scroll("left")}
        style={{
          borderRadius: "50%",
          marginLeft: "10px",
        }}
      >
        <FaChevronLeft />
      </button>

      <button
        className="btn btn-light position-absolute top-50 end-0 translate-middle-y z-2 shadow"
        onClick={() => scroll("right")}
        style={{
          borderRadius: "50%",
          marginRight: "10px",
        }}
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
