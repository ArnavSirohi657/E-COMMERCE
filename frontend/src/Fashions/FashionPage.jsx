import Hero from "./Hero";
export default function FashionPage() {
    return(
        <div>
            <Hero/>
            <div className="text-center my-4">
                <img
                    src="/FashionPage/Fashion11.jpg"
                    alt="Mobile27"
                    className="img-fluid"
                    style={{ maxWidth: "100%", height: "auto" }}
                />
                
            </div>
            <div className="text-center my-4">
                <img
                    src="/FashionPage/Fashion12.png"
                    alt="Mobile27"
                    className="img-fluid"
                    style={{ maxWidth: "100%", height: "auto" }}
                />
                
            </div>
            
        </div> 
    )
}