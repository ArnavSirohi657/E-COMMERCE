import CardStructure from "./CardStructure";

export default function Component4() {
  return (
    <div className="container mt-4">
      <div className="d-flex flex-row gap-3">
        <CardStructure image={"/TodayDeal/TodayDeal17.webp"} para={"Oneplus Bullets Z2 Bluetooth Wireless in Ear…"}
        />
        <CardStructure image={"/TodayDeal/TodayDeal18.webp"}  para={"MuscleBlaze Biozyme Performance Whey Protei…"}/>
        <CardStructure image={"/TodayDeal/TodayDeal19.webp"}  para={"LG 1.5 Ton 5 Star DUAL Inverter Split AC (Copper,…"}/>
        <CardStructure image={"/TodayDeal/TodayDeal20.jpg"}  para={"OnePlus 12 (Glacial White, 12GB RAM, 256GB Storage)"}/>
        <CardStructure image={"/TodayDeal/TodayDeal21.webp"}  para={"Samsung 7 kg, Fully-Automatic Top Load Wash…"}/>
      </div>
    </div>
  );
}
