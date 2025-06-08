export default function Component1() {
    const Gadget = [
      {
        image: "/ElectronicPage/Electronic10.jpg",
        label: "Gaming-Laptops"
      },
      {
        image: "/ElectronicPage/Electronic11.jpg",
        label: "Camera & Accessories"
      },
      {
        image: "/ElectronicPage/Electronic12.jpg",
        label: "Computer Accessories"
      },
      {
        image: "/ElectronicPage/Electronic13.png",
        label: "Home Audio"
      },
      {
        image: "/ElectronicPage/Electronic14.jpg",
        label: "Stationary"
      },
      {
        image: "/ElectronicPage/Electronic15.jpg",
        label: "Musical Instruments"
      },
      {
        image: "/ElectronicPage/Electronic16.jpg",
        label: "Storage"
      },
    ];
  
    return (
      <div className="d-flex flex-wrap gap-4 justify-content-center py-4">
        {Gadget.map((item, index) => (
          <div key={index} className="text-center">
            <img
              src={item.image}
              alt={item.label}
              style={{ height: "150px", objectFit: "contain" }}
              className="mb-2"
             
            />
            <p className="fw-semibold">{item.label}</p>
          </div>
        ))}
      </div>
    );
  }
  