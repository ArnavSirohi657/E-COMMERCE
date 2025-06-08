export default function Hero() {
    const Gadget = [
      { image: "/ElectronicPage/Electronic03.jpg", label: "Laptops" },
      { image: "/ElectronicPage/Electronic04.jpg", label: "HeadPhones" },
      { image: "/ElectronicPage/Electronic05.jpg", label: "Tablets" },
      { image: "/ElectronicPage/Electronic06.jpg", label: "Smart Watches" },
      { image: "/ElectronicPage/Electronic07.jpg", label: "Monitors" },
      { image: "/ElectronicPage/Electronic08.jpg", label: "Desktop" },
      { image: "/ElectronicPage/Electronic09.jpg", label: "Computers" },
    ];
  
    return (
      <div className="py-5 bg-light">
        <div className="container px-4">
          <h2 className="mb-4 fw-bold text-start">Shop by Category</h2>
          <div
            className="d-flex flex-nowrap overflow-auto"
            style={{ gap: "2rem" }}
          >
            {Gadget.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-4 shadow-sm text-center p-3 flex-shrink-0"
                style={{ width: "150px" }}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  style={{ height: "120px", objectFit: "contain" }}
                  className="mb-2"
                />
                <p className="fw-semibold mb-0">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  