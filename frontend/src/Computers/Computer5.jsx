export default function Component5() {
    const items = [
      { img: "Computer31.jpg", label: "Laptops" },
      { img: "Computer32.jpg", label: "Smartwatches" },
      { img: "Computer33.jpg", label: "Printers" },
      { img: "Computer34.jpg", label: "Monitors" },
      { img: "Computer35.jpg", label: "Routers" },
    ];
  
    return (
      <div className="my-5">
        <h4 className="fw-bold mb-4 text-center">The Electronics Buying Guides</h4>
  
        <div
          className="d-flex justify-content-center flex-wrap px-3"
          style={{ gap: "2rem", rowGap: "2.5rem" }} // Increased gap
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="d-flex flex-column align-items-center p-4 rounded"
              style={{
                width: "160px", // Slightly wider
                backgroundColor: "#fffaa8",
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)", // Slightly deeper shadow
              }}
            >
              <img
                src={`/ComputerPage/${item.img}`}
                alt={item.label}
                className="img-fluid mb-3"
                style={{
                  width: "110px",
                  height: "110px",
                  objectFit: "contain",
                }}
              />
              <span className="fw-semibold text-center">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  