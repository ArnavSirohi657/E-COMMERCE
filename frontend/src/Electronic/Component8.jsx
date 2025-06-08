export default function Component7() {
    const Gadget = [
      { image: "/ElectronicPage/Electronic69.png",  },
      { image: "/ElectronicPage/Electronic70.png",  },
      { image: "/ElectronicPage/Electronic71.jpg",  },
      { image: "/ElectronicPage/Electronic72.jpg",  },
      { image: "/ElectronicPage/Electronic73.jpg",  },
      { image: "/ElectronicPage/Electronic74.jpg",  },
      
    ];
  
    return (
      <div className="py-5 bg-light">
        <div className="container px-4">
          <h2 className="mb-4 fw-bold text-start">Shop from your favourite brands | Tablets</h2>
          <div
            className="d-flex flex-nowrap overflow-auto"
            style={{ gap: "2rem" }}
          >
            {Gadget.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-4 shadow-sm text-center p-3 flex-shrink-0"
                style={{ width: "300px ",height: "300px" }}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  style={{ height: "300px", objectFit: "contain" }}
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
  