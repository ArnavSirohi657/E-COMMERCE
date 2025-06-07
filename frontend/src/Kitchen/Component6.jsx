export default function Component5() {
    const mobiles = [
      { image: "/KitchenPage/Kitchen48.png" },
      { image: "/KitchenPage/Kitchen49.png" },
      { image: "/KitchenPage/Kitchen50.png" },
      { image: "/KitchenPage/Kitchen51.png" },
      { image: "/KitchenPage/Kitchen52.png" },
      { image: "/KitchenPage/Kitchen53.png" },
    ];
  
    return (
      <div style={{ backgroundColor: "#007bff" }} className="py-4"> {/* Blue background */}
        <div className="container-fluid px-4">
          
          <div
            className="d-flex flex-nowrap overflow-auto"
            style={{ gap: "3rem" }}
          >
            {mobiles.map((item, index) => (
              <div
                key={index}
                className="bg-light border rounded-4 p-3 text-center shadow-sm"
                style={{
                  minWidth: "180px",
                  maxWidth: "180px",
                  backgroundColor: "#ffe7a4",
                }}
              >
                <img
                  src={item.image}
                  alt=""
                  className="img-fluid mb-2"
                  style={{ height: "150px", objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  