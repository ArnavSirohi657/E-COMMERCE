export default function Component3() {
    const Gadget = [
      { image: "/ElectronicPage/Electronic24.jpg",  },
      { image: "/ElectronicPage/Electronic25.jpg",  },
      { image: "/ElectronicPage/Electronic26.gif",  },
      { image: "/ElectronicPage/Electronic27.jpg",  },
      { image: "/ElectronicPage/Electronic28.jpg",  },
      { image: "/ElectronicPage/Electronic29.jpg",  },
      { image: "/ElectronicPage/Electronic30.jpg",  },
      { image: "/ElectronicPage/Electronic31.jpg",  },
      { image: "/ElectronicPage/Electronic32.jpg",  },
    ];
  
    return (
      <div className="py-5 bg-light">
        <div className="container px-4">
          <h2 className="mb-4 fw-bold text-start">Trending Laptops</h2>
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
  