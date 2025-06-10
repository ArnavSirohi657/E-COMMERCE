import Product1 from "./Product1";

export default function ProductRender1() {
  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <div className="col">
          <div className="p-3 border rounded bg-light shadow-lg h-100">
            <Product1
              Heading={"Appliances for your home | Up to 55% off"}
              image1={"/HomePage/Home01.webp"}
              image2={"/HomePage/Home02.webp"}
              image3={"/HomePage/Home03.avif"}
              image4={"/HomePage/Home04.jpeg"}
            />
          </div>
        </div>
        <div className="col">
          <div className="p-3 border rounded bg-light shadow-lg h-100">
            <Product1
              Heading={"PlayStation 5 Slim & Accessories | No Cost EMI*"}
              image1={"/HomePage/Home05.jpeg"}
              image2={"/HomePage/Home06.jpeg"} // ✅ Fixed typo from "PS%.jpg"
              image3={"/HomePage/Home07.jpg"}
              image4={"/HomePage/Home08.avif"}
            />
          </div>
        </div>
        <div className="col">
          <div className="p-3 border rounded bg-light shadow-lg h-100">
            <Product1
              Heading={"Revamp your home in style"}
              image1={"/HomePage/Home09.jpeg"}
              image2={"/HomePage/Home10.webp"}
              image3={"/HomePage/Home11.jpg"}
              image4={"/HomePage/Home12.jpeg"}
            />
          </div>
        </div>
        <div className="col">
          <div className="p-3 border rounded bg-light shadow-lg h-100">
            <Product1
              Heading={"Starting ₹149 | Headphones"}
              image1={"/HomePage/Home12.jpeg"}
              image2={"/HomePage/Home13.png"}
              image3={"/HomePage/Home14.jpeg"}
              image4={"/HomePage/Home15.png"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}