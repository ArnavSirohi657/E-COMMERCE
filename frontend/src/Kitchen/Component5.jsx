export default function Component5() {
    const mobiles = [
      { image: "/KitchenPage/Kitchen42.png" },
      { image: "/KitchenPage/Kitchen43.png" },
      { image: "/KitchenPage/Kitchen44.png" },
      { image: "/KitchenPage/Kitchen45.png" },
      { image: "/KitchenPage/Kitchen46.png" },
      { image: "/KitchenPage/Kitchen47.png" },
    ];
  
    return (
      <div style={{ backgroundColor: "#007bff" }} className="py-4"> {/* Blue background */}
        <div className="container-fluid px-4">
          <h4 className="fw-bold mb-4 text-white">Shop for kitchen</h4> {/* White text for contrast */}
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
  