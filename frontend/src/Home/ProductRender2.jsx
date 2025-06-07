import Product2 from "./Product2";

export default function ProductRender2() {
  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <div className="col">
          <div className="p-3 border rounded bg-light shadow-lg h-100">
            <Product2
              Heading={"Min. 40% off | Fun toys & games | Amazon Brands"}
              image1={"/FunToy/SoftToy.jpeg"}
              image2={"/FunToy/ChildCycle.jpeg"}
              image3={"/FunToy/IndoorGame.jpeg"}
              image4={"/FunToy/Outdoor.jpeg"}
            />
          </div>
        </div>
        <div className="col">
          <div className="p-3 border rounded bg-light shadow-lg h-100">
            <Product2
              Heading={"Under ₹499 | Deals on home improvement essentials*"}
              image1={"/Home/Cleaning.jpeg"}
              image2={"/Home/Washroom.webp"} // ✅ Fixed typo from "PS%.jpg"
              image3={"/Home/HomeTool.jpeg"}
              image4={"/Home/Walpaper.jpeg"}
            />
          </div>
        </div>
        <div className="col">
          <div className="p-3 border rounded bg-light shadow-lg h-100">
            <Product2
              Heading={"Automotive essentials | Up to 60% off"}
              image1={"/Automotive/Automotive.jpeg"}
              image2={"/Automotive/Tire.jpeg"}
              image3={"/Automotive/Helmet.jpeg"}
              image4={"/Automotive/Vaccum.jpeg"}
            />
          </div>
        </div>
        <div className="col">
          <div className="p-3 border rounded bg-light shadow-lg h-100">
            <Product2
              Heading={"Starting ₹199 | Amazon Brands & more"}
              image1={"/Brands/BedSheet.avif"}
              image2={"/Brands/Curtain.jpeg"}
              image3={"/Brands/IroningBoard.jpg"}
              image4={"/Brands/Decor.jpeg"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
