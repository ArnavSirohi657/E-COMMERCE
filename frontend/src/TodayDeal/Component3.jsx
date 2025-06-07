import CardStructure from "./CardStructure";

export default function Component3() {
  return (
    <div className="container mt-4">
      <div className="d-flex flex-row gap-3">
        <CardStructure image={"/TodayDeal/TodayDeal12.webp"} para={"Acer Super ZX 5G (Cosmic Green, 8GB RAM, 128GB S…"}
        />
        <CardStructure image={"/TodayDeal/TodayDeal13.webp"}  para={"Samsung Galaxy M35 5G (Daybreak Blue,8GB RAM,…"}/>
        <CardStructure image={"/TodayDeal/TodayDeal14.webp"}  para={"Acer [SmartChoice Aspire Lite AMD Ryzen 5-5625U…"}/>
        <CardStructure image={"/TodayDeal/TodayDeal15.webp"}  para={"HP 15, 13th Gen Intel Core i5-1334U Laptop (16GB D… "}/>
        <CardStructure image={"/TodayDeal/TodayDeal16.webp"}  para={"Samsung Galaxy M56 5G (Black, 8 GB RAM, 256 GB…"}/>
      </div>
    </div>
  );
}
