import Product2 from "./Product2";

export default function ProductRender2() {
  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <div className="col">
          <div className="p-3 border rounded bg-light shadow-lg h-100">
            <Product2
              Heading={"Min. 40% off | Fun toys & games | Amazon Brands"}
              image1={"/HomePage/Home17.jpeg"}
              image2={"/HomePage/Home18.jpeg"}
              image3={"/HomePage/Home19.jpeg"}
              image4={"/HomePage/Home20.jpeg"}
            />
          </div>
        </div>
        <div className="col">
          <div className="p-3 border rounded bg-light shadow-lg h-100">
            <Product2
              Heading={"Under ₹499 | Deals on home improvement essentials*"}
              image1={"/HomePage/Home21.jpeg"}
              image2={"/HomePage/Home22.jpeg"} 
              image3={"/HomePage/Home23.jpeg"}
              image4={"/HomePage/Home24.webp"}
            />
          </div>
        </div>
        <div className="col">
          <div className="p-3 border rounded bg-light shadow-lg h-100">
            <Product2
              Heading={"Automotive essentials | Up to 60% off"}
              image1={"/HomePage/Home25.jpeg"}
              image2={"/HomePage/Home26.jpeg"}
              image3={"/HomePage/Home27.jpeg"}
              image4={"/HomePage/Home28.jpeg"}
            />
          </div>
        </div>
        <div className="col">
          <div className="p-3 border rounded bg-light shadow-lg h-100">
            <Product2
              Heading={"Starting ₹199 | Amazon Brands & more"}
              image1={"/HomePage/Home29.avif"}
              image2={"/HomePage/Home30.jpeg"}
              image3={"/HomePage/Home31.jpeg"}
              image4={"/HomePage/Home32.jpg"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
