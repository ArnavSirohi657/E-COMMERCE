export default function Component4() {
    const Gadget = [
      { image: "/ElectronicPage/Electronic33.png" },
      { image: "/ElectronicPage/Electronic34.png" },
      { image: "/ElectronicPage/Electronic35.png" },
      { image: "/ElectronicPage/Electronic36.png" },
      { image: "/ElectronicPage/Electronic37.png" },
      { image: "/ElectronicPage/Electronic38.png" },
      { image: "/ElectronicPage/Electronic39.png" },
    ];
  
    return (
      <div className="py-5 bg-light">
        <div className="container px-4">
          <h2 className="mb-4 fw-bold text-start">Shop from your favourite brands | Laptops</h2>
          <div
            className="d-flex flex-wrap justify-content-start"
            style={{ gap: "2rem" }}
          >
            {Gadget.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-4 shadow-sm text-center p-3"
                style={{ width: "100px", height: "100px" }}
              >
                <img
                  src={item.image}
                  alt=""
                  style={{ height: "100px", objectFit: "contain" }}
                  className="mb-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  