import Component1 from "./Component1"
import Component2 from "./Component2"
import Component3 from "./Component3"
import Component4 from "./Component4"
import Component5 from "./Component5"
import Component6 from "./Component6"
import Hero from "./Hero"
export default function KitchenPage() {
    return(
        <div>
            <Hero/>
            <img src="/KitchenPage/Kitchen12.png" />
            <img src="/KitchenPage/Kitchen13.png" style={{width:"1500px"}}/>
            <Component1/>
            <img src="/KitchenPage/Kitchen23.png" ></img>
            <Component2/>
            <Component3/>
            <Component4/>
            <Component5/>
            <Component6/>
            <img src="/KitchenPage/Kitchen54.jpg" ></img>
        </div>
    )
}