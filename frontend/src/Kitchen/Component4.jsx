export default function Component4() {
    const Kitchen = [
      { image: "/KitchenPage/Kitchen36.png" },
      { image: "/KitchenPage/Kitchen37.png" },
      { image: "/KitchenPage/Kitchen38.png" },
      { image: "/KitchenPage/Kitchen39.png" },
      { image: "/KitchenPage/Kitchen40.png" },
      { image: "/KitchenPage/Kitchen41.png" },
    ];
  
    return (
      <div style={{ backgroundColor: "#fcbf1e" }} className="py-4">
        <div className="container-fluid px-4">
          
          <div
            className="d-flex flex-nowrap overflow-auto"
            style={{ gap: "3rem" }} // 👈 increased gap here
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
  