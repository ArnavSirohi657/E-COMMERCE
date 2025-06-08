export default function Component2() {
    const Gadget = [
      { image: "/ElectronicPage/Electronic17.png",  },
      { image: "/ElectronicPage/Electronic18.png",  },
      { image: "/ElectronicPage/Electronic19.png",  },
      { image: "/ElectronicPage/Electronic20.png",  },
      { image: "/ElectronicPage/Electronic21.png",  },
      { image: "/ElectronicPage/Electronic22.png",  },
      { image: "/ElectronicPage/Electronic23.png",  },
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
                  style={{ height: "200px", objectFit: "contain" }}
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
  