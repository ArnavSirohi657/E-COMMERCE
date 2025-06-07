export default function Component2() {
    const Kitchen = [
      { image: "/KitchenPage/Kitchen24.png" },
      { image: "/KitchenPage/Kitchen25.png" },
      { image: "/KitchenPage/Kitchen26.png" },
      { image: "/KitchenPage/Kitchen27.png" },
      { image: "/KitchenPage/Kitchen28.png" },
      { image: "/KitchenPage/Kitchen29.png" },
    ];
  
    return (
      <div style={{ backgroundColor: "#fcbf1e" }} className="py-4">
        <div className="container-fluid px-4">
          <h4 className="fw-bold mb-4">Most searched products</h4>
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
  