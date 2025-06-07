import { useRef } from "react";
import AmazonProduct from "./AmazonProduct";

export default function OfficeProduct() {
  const scrollRef = useRef();//it is used for changing the DOM element without re-rendering.

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
        <b>Bestsellers in Office Products</b>
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
            image={"/OfficeProduct/Office01.jpg"}
            para={
              "BONZELLA Transparent Paper Sticker Book Cover Film Book Binding Cover [30 Pcs- 3 Different Sizes -10 Each] Waterproof Self"
            }
            price={"Rs348"}
          />
        </div>
        <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
          <AmazonProduct
            image={"/OfficeProduct/Office02.jpg"}
            para={
              "Scotch 3M Extreme Double Sided Tape, 1M Holds 6.7Kg, Works On Uneven Surfaces, Weather Resistant, Works On Indoor"
            }
            price={"₹225.00"}
          />
        </div>
        <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
          <AmazonProduct image={"OfficeProduct/Office03.jpg"} para={"JK Copier Paper - A4, 75"} price={"Rs381.00"} />
        </div>
        <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
          <AmazonProduct
            image={"/OfficeProduct/Office04.jpg"}
            para={
              "Unity Brand 3 Meter Multipurpose Double Sided Tape Heavy Duty - Adhesive Silicone Tape, Heat Resistant, Multi-Functional,…"
            }
            price={"Rs238.00"}
          />
        </div>
        <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
          <AmazonProduct
            image={"/OfficeProduct/Office05.jpg"}
            para={
              "FLAIR Move Gel Pen | Minimalistic & Aesthetic Matt Finish Pastel Body Colors | Effortless Writing With Sleek Clip Design | Blue Ink, Set…"
            }
            price={"Rs100.00"}
          />
        </div>
        <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
          <AmazonProduct
            image={"/OfficeProduct/Office06.jpg"}
            para={
              "JK Easy Copier Paper | A4 Size | 70 GSM | 500 Sheets | White Paper, 1 Ream | For Laserjet & Inkjet Printer | Fast Drying | Both Side Print |…"
            }
            price={"Rs318.00"}
          />
        </div>
        <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
          <AmazonProduct
            image={"/OfficeProduct/Office07.jpg"}
            para={"Canon PIXMA GI790 Black Ink Bottle for G1010, G2000, G2012, G3000, G3010, G3012, G4010"}
            price={"Rs595.00"}
          />
        </div>
        <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
          <AmazonProduct
            image={"/OfficeProduct/Office08.jpg"}
            para={" [30 Pcs- 3 Different Sizes -10 Each] Book Biding Cover Transparent Paper Sticker Book Cover Film,Waterproof School…"}
            price={"Rs299.00"}
          />
        </div>
        <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
          <AmazonProduct
            image={"/OfficeProduct/Office09.jpg"}
            para={
              "FLAIR Pastel 5 Shades Hi-lighter Pouch Pack | Flexible Line Width | Quick Drying & Smudge Proof Pastel Ink | Non-Toxic Ink, Safe…"
            }
            price={"Rs125.00"}
          />
        </div>
        <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
          <AmazonProduct
            image={"/OfficeProduct/Office10.jpg"}
            para={
              "TEKCOOL Leakage Repair Waterproof Tape for Pipe Leakage Roof Water Leakage Solution Aluminium Foil Tape Waterproof…"
            }
            price={"Rs149.00"}
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
