export default function Component1() {
    const Kitchen = [
      { image: "/KitchenPage/Kitchen14.png", brand: "Coolers" },
      { image: "/KitchenPage/Kitchen15.png", brand: "Water bottles" },
      { image: "/KitchenPage/Kitchen16.png", brand: "Inverters" },
      { image: "/KitchenPage/Kitchen17.png", brand: "Kitchen accessories" },
      { image: "/KitchenPage/Kitchen18.png", brand: "Water purifiers" },
      { image: "/KitchenPage/Kitchen19.png", brand: "Drying stands" },
      { image: "/KitchenPage/Kitchen20.png", brand: "Lunch boxes" },
      { image: "/KitchenPage/Kitchen21.png", brand: "Shoes rack" },
      { image: "/KitchenPage/Kitchen22.png", brand: "Home Decor" }
    ];
  
    return (
      <div style={{ backgroundColor: "#fcbf1e" }} className="py-4">
        <div className="container-fluid px-4">
          <h4 className="fw-bold mb-4">Most searched products</h4>
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
  