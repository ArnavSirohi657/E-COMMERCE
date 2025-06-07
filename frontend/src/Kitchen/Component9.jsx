export default function Component9() {
  const Kitchen = [
    { image: "/KitchenPage/Kitchen71.png" },
    { image: "/KitchenPage/Kitchen68.png" },
    { image: "/KitchenPage/Kitchen69.png" },
    { image: "/KitchenPage/Kitchen70.jpg" },
    { image: "/KitchenPage/Kitchen71.png" },
    { image: "/KitchenPage/Kitchen72.jpg" },
  ];

  return (
    <div style={{ backgroundColor: "#d2b48c" }} className="py-4"> {/* Slight brown background */}
      <div className="container-fluid px-4">
        <h4 className="fw-bold mb-4 text-white">Discover trending brands</h4> {/* White text for contrast */}
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
