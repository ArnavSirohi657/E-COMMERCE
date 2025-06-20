import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Component1() {
  const scrollRef = useRef(null);

  const ComputerGadget = [
    { image: "/ComputerPage/Computer02.jpg",label:"Computer Accessories" },
    { image: "/ComputerPage/Computer03.jpg",label:"Pen Drive" },
    { image: "/ComputerPage/Computer04.jpg",label:"Memory Cards" },
    { image: "/ComputerPage/Computer05.jpg",label:"Office Products" },
    { image: "/ComputerPage/Computer06.jpg",label:"Router and Networking" },
    { image: "/ComputerPage/Computer07.jpg",label:"Hard Drive"},
    { image: "/ComputerPage/Computer08.jpg",label:"Component" },
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
        {ComputerGadget.map((item, index) => (
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
            <p>{item.label}</p>
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
