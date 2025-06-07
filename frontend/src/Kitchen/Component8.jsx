export default function Component8() {
    const Kitchen = [
      { image: "/KitchenPage/Kitchen61.png" },
      { image: "/KitchenPage/Kitchen62.png" },
      { image: "/KitchenPage/Kitchen63.png" },
      { image: "/KitchenPage/Kitchen64.png" },
      { image: "/KitchenPage/Kitchen65.png" },
      { image: "/KitchenPage/Kitchen66.png" },
    ];
  
    return (
      <div style={{ backgroundColor: "#007bff" }} className="py-4"> {/* Blue background */}
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
  