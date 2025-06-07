import Product1 from "./Product1";

export default function ProductRender1() {
  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <div className="col">
          <div className="p-3 border rounded bg-light shadow-lg h-100">
            <Product1
              Heading={"Appliances for your home | Up to 55% off"}
              image1={"/Electronic/AC.webp"}
              image2={"/Electronic/Fridge.webp"}
              image3={"/Electronic/MicroWave.avif"}
              image4={"/Electronic/WashingMachine.jpeg"}
            />
          </div>
        </div>
        <div className="col">
          <div className="p-3 border rounded bg-light shadow-lg h-100">
            <Product1
              Heading={"PlayStation 5 Slim & Accessories | No Cost EMI*"}
              image1={"/PlayStation/Slim.avif"}
              image2={"/PlayStation/PS%.jpg"} // ✅ Fixed typo from "PS%.jpg"
              image3={"/PlayStation/Fortnight.jpeg"}
              image4={"/PlayStation/Dual.jpeg"}
            />
          </div>
        </div>
        <div className="col">
          <div className="p-3 border rounded bg-light shadow-lg h-100">
            <Product1
              Heading={"Revamp your home in style"}
              image1={"/HomeDecor/Cover.jpeg"}
              image2={"/HomeDecor/Vases.webp"}
              image3={"/HomeDecor/Storage.jpg"}
              image4={"/HomeDecor/Lighting.jpeg"}
            />
          </div>
        </div>
        <div className="col">
          <div className="p-3 border rounded bg-light shadow-lg h-100">
            <Product1
              Heading={"Starting ₹149 | Headphones"}
              image1={"/HeadPhone/Boat.png"}
              image2={"/HeadPhone/Boult.jpeg"}
              image3={"/HeadPhone/Noise.png"}
              image4={"/HeadPhone/Zebronic.jpeg"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
