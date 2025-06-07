import CardStructure from "./CardStructure";

export default function Component5() {
  return (
    <div className="container mt-4">
      <div className="d-flex flex-row gap-3">
        <CardStructure image={"/TodayDeal/TodayDeal22.webp"} para={"Oppo F27 Pro+ 5G (Midnight Navy, 8GB RAM,…"}
        />
        <CardStructure image={"/TodayDeal/TodayDeal23.webp"}  para={"Motorola razr 60 Ultra (Pantone Rio Red, 16 GB R…"}/>
        <CardStructure image={"/TodayDeal/TodayDeal24.webp"}  para={"All Out Ultra Mosquito Repellant Refill Faster Acti…"}/>
        <CardStructure image={"/TodayDeal/TodayDeal25.webp"}  para={"LG 655 L Frost-Free Smart Inverter Double Door Side…"}/>
        <CardStructure image={"/TodayDeal/TodayDeal26.webp"}  para={"LG 108 cm (43 inches) UR75 Series 4K Ultra HD Smart…"}/>
      </div>
    </div>
  );
}
