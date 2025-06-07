import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Product6() {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

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
            {[
              { src: "/KID/CarToy.webp", alt: "Car Toy" },
              { src: "/KID/TeenTitian.webp", alt: "Teen Titan" },
              { src: "/KID/ToyCar.webp", alt: "Toy Car" },
              { src: "/KID/Swimming.jpeg", alt: "Swimming Toy" },
              { src: "/KID/DollHouse.webp", alt: "Doll House" },
              { src: "/KID/SoftToy.jpeg", alt: "Soft Toy" },
              { src: "/KID/Bike.jpg", alt: "Bike" },
            ].map((item, index) => (
              <img
                key={index}
                src={item.src}
                alt={item.alt}
                className="img-fluid rounded toy-hover"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
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
    </div>
  );
}
