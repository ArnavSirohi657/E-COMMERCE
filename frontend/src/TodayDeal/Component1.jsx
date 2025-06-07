import CardStructure from "./CardStructure";

export default function Component1() {
  return (
    <div className="container mt-4">
      <div className="d-flex flex-row gap-3">
        <CardStructure image={"/TodayDeal/TodayDeal02.webp"} para={"OnePlus Nord CE4 (Dark Chrome, 8GB RAM, 128GB..."}
        />
        <CardStructure image={"/TodayDeal/TodayDeal03.jpg"}  para={"BALWAAN Krishi BE-63 Earth Auger 63 cc Powerf…"}/>
        <CardStructure image={"/TodayDeal/TodayDeal04.webp"}  para={"Redmi A4 5G (Sparkle Purple, 4GB RAM, 64GB St…"}/>
        <CardStructure image={"/TodayDeal/TodayDeal05.webp"}  para={"Samsung Galaxy A55 5G (Awesome Iceblue, 8GB R"}/>
        <CardStructure image={"/TodayDeal/TodayDeal06.webp"}  para={"iQOO 13 5G (Legend, 16GB RAM, 512GB Storage)"}/>
      </div>
    </div>
  );
}
