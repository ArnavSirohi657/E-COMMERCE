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
        <b>Bestsellers in Beauty Product</b>
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
            image={"/Beauty/Beauty01.jpg"}
            para={
              "Ghar Soaps Sandalwood & Saffron Magic Soaps For Bath (300 Gms Pack Of 3) | Paraben Free | Chandan & Kesar Bath Soap |…"
            }
            price={"Rs395.00"}
          />
        </div>
        <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
          <AmazonProduct
            image={"/Beauty/Beauty02.jpg"}
            para={
              "Cetaphil Paraben, Sulphate-Free Gentle Skin Hydrating Face Wash Cleanser with Niacinamide, Vitamin B5 for Dry to Normal, Sensitive…"
            }
            price={"₹358.00"}
          />
        </div>
        <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
          <AmazonProduct image={"/Beauty/Beauty03.jpg"} 
          para={"The Derma Co 1% Hyaluronic Sunscreen Aqua Gel SPF 50 PA++++ I For Oily, Dry, Acne-prone Skin | Ultra Lightweight Texture I…"}
           price={"Rs228.00"} />
        </div>
        <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
          <AmazonProduct
            image={"/Beauty/Beauty04.jpg"}
            para={
              "L'Oreal Paris Hyaluron Moisture 72H Moisture Sealing Conditioner powered by Hyaluronic Acid For Dry Hair, Makes Hair Frizz-free,…"
            }
            price={"Rs194.00"}
          />
        </div>
        <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
          <AmazonProduct
            image={"/Beauty/Beauty05.jpg"}
            para={
              "Chemist At Play Exfoliating Body Wash 236ml | 4% (Salicylic Acid, Vitamin E and Lactic Acid) | Paraben & SLS Free | Gentle…"
            }
            price={"Rs322.00"}
          />
        </div>
        <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
          <AmazonProduct
            image={"/Beauty/Beauty06.jpg"}
            para={
              "Be Bodywise 4% Aha Bha Underarm Roll On 50ml | 2% Lactic Acid, 1% Mandelic Acid, 1% Salicylic Acid | Controls Odour &…"
            }
            price={"Rs319.00"}
          />
        </div>
        <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
          <AmazonProduct
            image={"/Beauty/Beauty07.jpg"}
            para={"WishCare Hair Growth Serum Concentrate - 3% Redensyl, 4% Anagain, 2% Baicapil, Caffeine, Biotin & Rice Water - Advanced…"}
            price={"Rs699.00"}
          />
        </div>
        <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
          <AmazonProduct
            image={"/Beauty/Beauty08.jpg"}
            para={"L'Oreal Paris Hyaluron Moisture 72HR Moisture Filling Shampoo powered by Hyaluronic Acid, for Frizz-free, Hydrated and Bouncy…"}
            price={"Rs304.85.00"}
          />
        </div>
        <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
          <AmazonProduct
            image={"/Beauty/Beauty09.jpg"}
            para={
              "Dettol Liquid Handwash Refill – Skincare Hand Wash- 1350ml | pH Balanced | 10x Better Germ Protection"
            }
            price={"Rs178.00"}
          />
        </div>
        <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
          <AmazonProduct
            image={"/Beauty/Beauty10.jpg"}
            para={
              "Simple Kind To Skin Refreshing Facial Wash 100 ml | 100% Soap-Free Facewash | For All Skin Types"
            }
            price={"Rs198.00"}
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
