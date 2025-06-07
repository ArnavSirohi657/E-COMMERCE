export default function Component10() {
  const Kitchen = [
    { image: "/KitchenPage/Kitchen73.jpg" },
    { image: "/KitchenPage/Kitchen74.jpg" },
    { image: "/KitchenPage/Kitchen75.jpg" },
    { image: "/KitchenPage/Kitchen76.jpg" },
    { image: "/KitchenPage/Kitchen77.png" },
    { image: "/KitchenPage/Kitchen78.jpg" },
  ];

  return (
    <div style={{ backgroundColor: "#d2b48c" }} className="py-4"> {/* Slight brown background */}
      <div className="container-fluid px-4">
        <div
          className="d-flex flex-nowrap overflow-auto"
          style={{ gap: "3rem" }}
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
