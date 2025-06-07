

import CardStructure from "./CardStructure";

export default function Component6() {
  return (
    <div className="container mt-4">
      <div className="d-flex flex-row gap-3">
        <CardStructure 
          image="/TodayDeal/TodayDeal32.webp" 
          para="Oppo F27 Pro+ 5G (Midnight Navy, 8GB RAM, 128GB Storage)" 
        />
        <CardStructure 
          image="/TodayDeal/TodayDeal33.jpg"  
          para="Motorola Razr 60 Ultra (Pantone Viva Magenta, 16GB RAM, 512GB Storage)" 
        />
        <CardStructure 
          image="/TodayDeal/TodayDeal34.webp"  
          para="All Out Ultra Mosquito Repellent Refill (Faster Action), Pack of 3" 
        />
        <CardStructure 
          image="/TodayDeal/TodayDeal35.webp"  
          para="LG 655 L Frost-Free Smart Inverter Side-by-Side Refrigerator (Shiny Steel)" 
        />
        <CardStructure 
          image="/TodayDeal/TodayDeal36.webp"  
          para="LG 43 inch UR75 Series 4K Ultra HD Smart LED TV (43UR7500PSC)" 
        />
      </div>
    </div>
  );
}
