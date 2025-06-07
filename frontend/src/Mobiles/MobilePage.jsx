import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import Component4 from "./Component4";
import Component5 from "./Component5";
import Component6 from "./Component6";
import Desc from "./Desc";
import Hero from "./Hero";
import Latest from "./Latest";

export default function MobilePage() {
    return (
        <div>
            <Hero />
            <Latest />
            <img src="/Mobiles/Mobile16.jpg" alt="Mobile16" className="img-fluid w-100" />

            <Component1 />
            <Component2 />

            {/* Centered Mobile27 Image */}
            <div className="text-center my-4">
                <img
                    src="/Mobiles/Mobile28.jpg"
                    alt="Mobile27"
                    className="img-fluid"
                    style={{ maxWidth: "100%", height: "auto" }}
                />
            </div>
            <Component3 />
            <div className="text-center my-4">
                <img
                    src="/Mobiles/Mobile38.jpg"
                    alt="Mobile27"
                    className="img-fluid"
                    style={{ maxWidth: "100%", height: "auto" }}
                />
            </div>
            <div className="text-center my-4">
                <img
                    src="/Mobiles/Mobile39.png"
                    alt="Mobile27"
                    className="img-fluid"
                    style={{ maxWidth: "100%", height: "auto" }}
                />
            </div>
            <Component4 />
            <div className="text-center my-4">
                <img
                    src="/Mobiles/Mobile46.jpg"
                    alt="Mobile27"
                    className="img-fluid"
                    style={{ maxWidth: "100%", height: "auto" }}
                />
            </div>
            <Component5 />
            <div className="text-center my-4">
                <img
                    src="/Mobiles/Mobile52.png"
                    alt="Mobile27"
                    className="img-fluid"
                    style={{ maxWidth: "100%", height: "auto" }}
                />
            </div>
            <Component6/>
            <div className="text-center my-4">
                <img
                    src="/Mobiles/Mobile58.png"
                    alt="Mobile27"
                    className="img-fluid"
                    style={{ maxWidth: "100%", height: "auto" }}
                />
            </div>
            <hr/>
            <Desc/>
        </div>
    );
}
