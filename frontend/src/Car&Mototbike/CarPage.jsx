import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import Component4 from "./Component4";
import Component5 from "./Component5";
export default function CarPage() {
    return (
        <div>
            <Component1 />
            <img src="/CarPage/Car12.gif" style={{ width: "1800px" }} />
            <Component2 />
            <div style={{ backgroundColor: "#fff9db", padding: "20px" }}>
                <img src="/CarPage/Car23.jpg" style={{ display: "block", width: "100%" }} />
                <Component3 />
                <img src="/CarPage/Car30.gif" style={{ display: "block", width: "100%" }} />
                <Component4 />
            </div>
            <div>
                <img src="/CarPage/Car40.jpg"/>
                <Component5/>
                <img src="/CarPage/Car49.jpg" />
            </div>


        </div>
    );
}