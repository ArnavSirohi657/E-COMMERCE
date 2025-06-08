export default function Component1() {
    const Kitchen = [
      { image: "/CarPage/Car01.jpg", brand: "Helmets" },
      { image: "/CarPage/Car02.jpg", brand: "Electric Vechiles" },
      { image: "/CarPage/Car03.png", brand: "Petrol Vechiles" },
      { image: "/CarPage/Car04.jpg", brand: "Vechiles tools & applicances" },
      { image: "/CarPage/Car05.jpg", brand: "Connected mobility" },
      { image: "/CarPage/Car06.jpg", brand: "Car & bike accessories" },
      { image: "/CarPage/Car07.png", brand: "Vechile Care" },
      { image: "/CarPage/Car09.jpg", brand: "Car and bike tyres" },
    ,
      { image: "/CarPage/Car11.jpg", brand: "Car and bike engine oil" },
    ];
  
    return (
      <div  className="py-4">
        <div className="container-fluid px-4">
         
          <div className="d-flex flex-nowrap overflow-auto">
            {Kitchen.map((item, index) => (
              <div
                key={index}
                className="bg-light border rounded-4 p-3 me-3 text-center shadow-sm"
                style={{
                  minWidth: "180px",
                  maxWidth: "180px",
                  backgroundColor: "#ffe7a4"
                }}
              >
                <img
                  src={item.image}
                  alt={item.brand}
                  className="img-fluid mb-2"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <p className="fw-bold text-dark small m-0">{item.brand}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  