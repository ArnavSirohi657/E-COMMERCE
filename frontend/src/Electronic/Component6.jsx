export default function Component6() {
    const Gadget = [
      { image: "/ElectronicPage/Electronic46.png" },
      { image: "/ElectronicPage/Electronic47.png" },
      { image: "/ElectronicPage/Electronic48.png" },
      { image: "/ElectronicPage/Electronic49.png" },
      { image: "/ElectronicPage/Electronic50.png" },
      { image: "/ElectronicPage/Electronic51.png" },
      { image: "/ElectronicPage/Electronic52.png" },
      { image: "/ElectronicPage/Electronic53.png" },
      { image: "/ElectronicPage/Electronic54.png" },
      { image: "/ElectronicPage/Electronic55.png" },
    ];
  
    return (
      <div className="py-5 bg-light">
        <div className="container px-4">
          <h2 className="mb-4 fw-bold text-start">Shop from you favourite brand | Audio</h2>
          <div
            className="d-flex flex-nowrap overflow-auto"
            style={{ gap: "2rem" }}
          >
            {Gadget.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-4 shadow-sm text-center p-3 flex-shrink-0"
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
  