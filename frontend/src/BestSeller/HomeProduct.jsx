import { useRef } from "react";
import AmazonProduct from "./AmazonProduct";

export default function HomeProduct() {
  const scrollRef = useRef();

  const scrollByAmount = () => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({ left: containerWidth, behavior: "smooth" });
    }
  };

  const scrollBack = () => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({ left: -containerWidth, behavior: "smooth" });
    }
  };

  return (
    <div style={{ padding: "20px", position: "relative" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
        <b>Bestsellers in Home improvement</b>
      </h2>

      {/* Left Arrow */}
      <button
        onClick={scrollBack}
        style={{
          position: "absolute",
          top: "55%",
          left: "0",
          transform: "translateY(-50%)",
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          borderRadius: "50%",
          width: "36px",
          height: "36px",
          cursor: "pointer",
          zIndex: 1,
        }}
      >
        ◀
      </button>

      {/* Scrollable Product List */}
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          gap: "16px",
          paddingBottom: "8px",
          scrollbarWidth: "thin",
          marginTop: "30px",
        }}
      >
        <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
          <AmazonProduct
            image={"/GharProduct/Home01.jpg"}
            para={
              "Zulaxy Photo Frame Hooks for Wall Without Drilling, 10 Pack Self Adhesive Hooks for Wall Heavy Duty Strong Nail Free for…"
            }
            price={"Rs259.00"}
          />
        </div>
        <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
          <AmazonProduct
            image={"/GharProduct/Home02.jpg"}
            para={
              "Misamo Enterprise PVC Wall Hooks, Pack of 15, Transparent"
            }
            price={"₹185.00"}
          />
        </div>
        <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
          <AmazonProduct image={"/GharProduct/Home03.jpg"} 
          para={"Plantex Bathroom Organizer Without Drill/GI Steel Self Adhesive Bathroom Shelf for Wall with Magic Stickers - Pack of 1…"}
           price={"Rs296.00"} />
        </div>
        <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
          <AmazonProduct
            image={"/GharProduct/Home04.jpg"}
            para={
              "rts Universal Travel Adapter, International All in One Worldwide Travel Adapter and Wall Charger with USB Ports with Multi Type…"
            }
            price={"Rs587.00"}
          />
        </div>
        <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
          <AmazonProduct
            image={"/GharProduct/Home05.jpg"}
            para={
              "Spotzero by Milton Prime Stainless Steel Wringer Spin Mop with Big Wheel, Puller Handle, Bucket Floor Cleaning and Mopping System…"
            }
            price={"Rs1399.00"}
          />
        </div>
        <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
          <AmazonProduct
            image={"/GharProduct/Home06.jpg"}
            para={
              "Portronics Power Plate 10 Extension Board with 4 Universal Sockets, 3 Meter Long Cord, 1500 Watts, 6 Amp Multi Plug for…"
            }
            price={"Rs398.00"}
          />
        </div>
        <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
          <AmazonProduct
            image={"/GharProduct/Home07.jpg"}
            para={"URBANMONK 39 Inch Silicon Door Bottom Sealing Strip | Self Adhesive Door Gap Filler Rubber | Bottom Sealing Strip Guard |…"}
            price={"Rs273.00"}
          />
        </div>
        <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
          <AmazonProduct
            image={"/GharProduct/Home08.jpg"}
            para={"Scotch-Brite 2-in-1 Bucket Spin Mop (Green, 2 Refills), 4 Pcs"}
            price={"Rs1089.00"}
          />
        </div>
        <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
          <AmazonProduct
            image={"/GharProduct/Home09.jpg"}
            para={
              "GM 3060 E-Book 4 + 1 Power Strip Red & White Color 250 Volts with Master Switch, Indicator, Safety Shutter & 4 International…"
            }
            price={"Rs499.00"}
          />
        </div>
        <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
          <AmazonProduct
            image={"/GharProduct/Home10.jpg"}
            para={
              "Proxism (20Pcs) Disposable Shower Cover Hair Catcher Shower Drain Mesh Stickers, Bathroom, Laundry, Bathtub, Kitchen Shower Drain…"
            }
            price={"Rs284.00"}
          />
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollByAmount}
        style={{
          position: "absolute",
          top: "55%",
          right: "0",
          transform: "translateY(-50%)",
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          borderRadius: "50%",
          width: "36px",
          height: "36px",
          cursor: "pointer",
          zIndex: 1,
        }}
      >
        ▶
      </button>
    </div>
  );
}
