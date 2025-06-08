export default function Component8() {
    const Gadget = [
      { image: "/ElectronicPage/Electronic62.png" },
      { image: "/ElectronicPage/Electronic63.png" },
      { image: "/ElectronicPage/Electronic64.png" },
      { image: "/ElectronicPage/Electronic65.png" },
      { image: "/ElectronicPage/Electronic66.png" },
      { image: "/ElectronicPage/Electronic67.png" },
      { image: "/ElectronicPage/Electronic68.png" },
    ];
  
    return (
      <div className="py-5 bg-light">
        <div className="container px-4">
          <h2 className="mb-4 fw-bold text-start">New & trending: Tablets</h2>
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
  