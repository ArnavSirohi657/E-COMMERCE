import { useRef } from "react";
import AmazonProduct from "./AmazonProduct";

export default function ElectronicProduct() {
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
                        image={"/ElectronicProduct/EP01.jpg"}
                        para={
                            "iQOO TWS 1e in-Ear Earbuds with Mic, Upto 30dB Active Noise Cancellation, Fast Charging which Takes 10 mins for 3 Hours…"
                        }
                        price={"Rs1899.00"}
                    />
                </div>
                <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
                    <AmazonProduct
                        image={"/ElectronicProduct/EP02.jpg"}
                        para={
                            "Oneplus Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic, Bombastic Bass - 12.4 mm Drivers, 10 Mins Charge - 20 Hrs Music,"
                        }
                        price={"₹1399.00"}
                    />
                </div>
                <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
                    <AmazonProduct image={"/ElectronicProduct/EP03.jpg"}
                        para={
                            "OnePlus Nord Buds 2r True Wireless in Ear Earbuds with Mic, 12.4mm Drivers, Playback:Upto 38hr case,4-Mic Design, IP55…"
                        }
                        price={"Rs1799.00"}
                    />
                </div>
                <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
                    <AmazonProduct
                        image={"/ElectronicProduct/EP04.jpg"}
                        para={
                            'Samsung Galaxy M05 (Mint Green, 4GB RAM, 64 GB Storage) | 50MP Dual Camera | Bigger 6.7" HD+ Display | 5000mAh Battery | 25W'
                        }
                        
                    price={"Rs6498.00"}
          />
                </div>
                <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
                    <AmazonProduct
                        image={"/ElectronicProduct/EP05.jpg"}
                        para={
                            "iQOO Neo 10 (Titanium Chrome, 8GB RAM, 256GB Storage) | Snapdragon 8s Gen 4 Processor & SuperComputing Chip Q1 | 7000 mAh Battery | Segment’s Highest…"
                        }
                        price={"Rs33,999.00"}
                    />
                </div>
                <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
                    <AmazonProduct
                        image={"/ElectronicProduct/EP06.jpg"}
                        para={
                            "iQOO Z10x 5G (Ultramarine, 6GB RAM, 128GB Storage) | 6500 mAh Large Capacity Battery | Dimensity 7300 Processor | Military-Grade…"
                        }
                        price={"Rs13,499.00"}
                    />
                </div>
                <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
                    <AmazonProduct
                        image={"/ElectronicProduct/EP07.jpg"}
                        para={"Boat BassHeads 100 in-Ear Headphones with Mic (Black)"}
                        price={"Rs349.00"}
                    />
                </div>
                <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
                    <AmazonProduct
                        image={"/ElectronicProduct/EP08.jpg"}
                        para={"iQOO Neo 10 (Titanium Chrome, 12GB RAM, 256GB Storage) | Snapdragon 8s Gen 4 Processor & SuperComputing Chip Q1 | 7000 mAh Battery | Segment’s Highest…"}
                        price={"Rs35,999.00"}
                    />
                </div>
                <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
                    <AmazonProduct
                        image={"/ElectronicProduct/EP09.jpg"}
                        para={
                            "realme NARZO N61 (Voyage Blue,4GB RAM+64GB Storage) 90Hz Eye Comfort Display | IP54 Dust & Water Resistance | 48…"
                        }
                        price={"Rs7498.00"}
                    />
                </div>
                <div style={{ flex: "0 0 22%", scrollSnapAlign: "start", height: "400px" }}>
                    <AmazonProduct
                        image={"/ElectronicProduct/EP10.jpg"}
                        para={
                            "iQOO Neo 10 (Inferno Red, 8GB RAM, 256GB Storage) | Snapdragon 8s Gen 4 Processor & SuperComputing Chip Q1 | 7000 mAh Battery | Segment’s Highest…"
                        }
                        price={"Rs33,999.00"}
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
