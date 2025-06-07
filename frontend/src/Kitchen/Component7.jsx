export default function Component7() {
    const Kitchen = [
      { image: "/KitchenPage/Kitchen55.png" },
      { image: "/KitchenPage/Kitchen56.png" },
      { image: "/KitchenPage/Kitchen57.png" },
      { image: "/KitchenPage/Kitchen58.png" },
      { image: "/KitchenPage/Kitchen59.png" },
      { image: "/KitchenPage/Kitchen60.png" },
    ];
  
    return (
      <div style={{ backgroundColor: "#007bff" }} className="py-4"> {/* Blue background */}
        <div className="container-fluid px-4">
          <h4 className="fw-bold mb-4 text-white">Reimagine your living room</h4> {/* White text for contrast */}
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
  