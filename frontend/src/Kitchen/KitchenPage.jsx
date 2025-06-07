import Hero from "./Hero";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import Component4 from "./Component4";
import Component5 from "./Component5";
import Component6 from "./Component6";
import Component7 from "./Component7";
import Component8 from "./Component8";
import Component9 from "./Component9";
import Component10 from "./Component10";
import Component11 from "./Component11";
import Component12 from "./Component12";


export default function KitchenPage() {
  return (
    <div>
      <Hero />
      <img src="/KitchenPage/Kitchen12.png" />
      <img src="/KitchenPage/Kitchen13.png" style={{ width: "1500px" }} />
      <Component1 />
      <img src="/KitchenPage/Kitchen23.png" />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <Component6 />
      <img src="/KitchenPage/Kitchen54.jpg" />
      <Component7 />
      <Component8 />

      {/* 🔲 Wrap 9, 10, 11 in black background */}
      <div style={{ backgroundColor: "#000", paddingTop: "2rem", paddingBottom: "2rem" }}>
        <Component9 />
        <Component10 />
        <Component11 />
        <Component12/>
      </div>
    </div>
  );
}
