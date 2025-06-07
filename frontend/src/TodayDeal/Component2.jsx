import CardStructure from "./CardStructure";

export default function Component2() {
  return (
    <div className="container mt-4">
      <div className="d-flex flex-row gap-3">
        <CardStructure image={"/TodayDeal/TodayDeal07.webp"} para={"Redmi Note 14 5G (Titan Black, 6GB RAM 128GB St…"}
        />
        <CardStructure image={"/TodayDeal/TodayDeal08.webp"}  para={"realme GT 7 (IceSense Blue,8GB+256GB) | India's…"}/>
        <CardStructure image={"/TodayDeal/TodayDeal09.webp"}  para={"iQOO Z10 5G (Silver, 8GB RAM, 128GB Stroage) | In…"}/>
        <CardStructure image={"/TodayDeal/TodayDeal10.webp"}  para={"iQOO Z9 Lite 5G (Mocha Brown, 6GB RAM, 128GB St | "}/>
        <CardStructure image={"/TodayDeal/TodayDeal11.webp"}  para={"Samsung Galaxy M05 (Mint Green, 4GB RAM, 64 GB St…"}/>
      </div>
    </div>
  );
}
