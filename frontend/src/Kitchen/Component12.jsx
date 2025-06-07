export default function Component12() {
    const Kitchen = [
      { image: "/KitchenPage/Kitchen85.jpg" },
      { image: "/KitchenPage/Kitchen86.png" },
      { image: "/KitchenPage/Kitchen87.jpg" },
      { image: "/KitchenPage/Kitchen88.jpg" },
      { image: "/KitchenPage/Kitchen89.jpg" },
      { image: "/KitchenPage/Kitchen90.jpg" },
    ];
  
    return (
      <div style={{ backgroundColor: "#d2b48c" }} className="py-4"> {/* Slight brown background */}
        <div className="container-fluid px-4">
          <div
            className="d-flex flex-nowrap overflow-auto"
            style={{ gap: "3rem" }}
          >
            {Kitchen.map((item, index) => (
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
  