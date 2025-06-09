import CardStructure from "./CardStructure";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";

export default function Component3() {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth,
        behavior: "smooth",
      });
    }
  };

  const products = [
    {
      image: "/ComputerPage/Computer17.jpg",
      para: "Logitech MX Master 3S - Wireless Performance",
      brand: "Logitech",
      price: "₹5,495",
      mrp: "₹7,999",
      rating: 4.5,
      reviews: 1200,
    },
    {
      image: "/ComputerPage/Computer18.jpg",
      para: "HP DHE-6002 Wired Speaker",
      brand: "HP",
      price: "₹999",
      mrp: "₹1,499",
      rating: 4.2,
      reviews: 540,
    },
    {
      image: "/ComputerPage/Computer19.jpg",
      para: "Kreo Owl Full HD 1080P Webcam",
      brand: "Kreo",
      price: "₹1,699",
      mrp: "₹2,299",
      rating: 4.3,
      reviews: 820,
    },
    {
      image: "/ComputerPage/Computer20.jpg",
      para: "ViewSonic 13.3-inch Portable Monitor",
      brand: "ViewSonic",
      price: "₹9,499",
      mrp: "₹12,999",
      rating: 4.4,
      reviews: 210,
    },
    {
      image: "/ComputerPage/Computer21.jpg",
      para: "Belkin 4-Socket Surge Protector",
      brand: "Belkin",
      price: "₹849",
      mrp: "₹1,299",
      rating: 4.1,
      reviews: 650,
    },
    {
      image: "/ComputerPage/Computer13.jpg",
      para: "ZEBRONICS K4000MW Wireless Keyboard",
      brand: "ZEBRONICS",
      price: "₹1,099",
      mrp: "₹1,799",
      rating: 4.0,
      reviews: 450,
    },
    {
      image: "/ComputerPage/Computer22.jpg",
      para: "Amazon Basics Rechargeable Wireless Mouse",
      brand: "Amazon Basics",
      price: "₹549",
      mrp: "₹899",
      rating: 4.3,
      reviews: 1500,
    },
    {
      image: "/ComputerPage/Computer23.jpg",
      para: "HP 330 15.6-inch Laptop Backpack",
      brand: "HP",
      price: "₹799",
      mrp: "₹1,299",
      rating: 4.4,
      reviews: 840,
    },
    {
      image: "/ComputerPage/Computer24.jpg",
      para: "Dell WM118 Wireless Mouse",
      brand: "Dell",
      price: "₹649",
      mrp: "₹1,299",
      rating: 4.2,
      reviews: 20489,
    },
    {
      image: "/ComputerPage/Computer25.jpg",
      para: "Gaming RGB Wired Mouse",
      brand: "Dell",
      price: "₹649",
      mrp: "₹1,299",
      rating: 4.2,
      reviews: 20489,
    },
    {
      image: "/ComputerPage/Computer26.jpg",
      para: "Mechanical RGB Gaming Keyboard",
      brand: "Dell",
      price: "₹649",
      mrp: "₹1,299",
      rating: 4.2,
      reviews: 20489,
    },
  ];

  return (
    <div className="container my-5 position-relative">
      <h4 className="fw-bold mb-3">Up to 70% off | Gaming Accessories</h4>

      {/* Left Arrow */}
      <button
        className="btn btn-light shadow position-absolute top-50 start-0 translate-middle-y"
        onClick={() => scroll("left")}
        style={{ zIndex: 1 }}
      >
        <FaChevronLeft />
      </button>

      {/* Scrollable Row */}
      <div
        ref={scrollRef}
        className="d-flex overflow-auto px-2"
        style={{ gap: "1.5rem", scrollBehavior: "smooth" }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            style={{ minWidth: "180px", flex: "0 0 auto" }}
          >
            <CardStructure
              image={product.image}
              para={product.para}
              brand={product.brand}
              price={product.price}
              mrp={product.mrp}
              rating={product.rating}
              reviews={product.reviews}
            />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        className="btn btn-light shadow position-absolute top-50 end-0 translate-middle-y"
        onClick={() => scroll("right")}
        style={{ zIndex: 1 }}
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
