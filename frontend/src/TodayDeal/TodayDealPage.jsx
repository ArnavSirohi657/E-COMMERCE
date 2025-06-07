import Component2 from "./Component2"
import Component1 from "./Component1"
import Hero from "./Hero"
import Component3 from "./Component3"
import Component4 from "./Component4"
import LowestPrice from "./LowestPrice"
import Component5 from "./Component5"
import Component6 from "./Component6"
export default function TodayDealPage() {
    const handleClick = () => {
        window.location.href = "http://localhost:5173/signin";
    }
    return (
        <div>
            <Hero />
            <Component1 />
            <Component2 />
            <Component3 />
            <Component4 />
            <LowestPrice />
            <Component5 />
            <Component6 />
            <div className="text-center my-5">
                <h1>See personalized recommendations</h1>
                <br />   <br />
                <button className="btn btn-warning btn-lg px-5" onClick={handleClick}>
                    Sign In
                </button>

            </div>
        </div>
    )
}