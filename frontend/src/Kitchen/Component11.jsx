export default function Component11() {
  const Kitchen = [
    { image: "/KitchenPage/Kitchen79.jpg" },
    { image: "/KitchenPage/Kitchen80.jpg" },
    { image: "/KitchenPage/Kitchen81.jpg" },
    { image: "/KitchenPage/Kitchen82.jpg" },
    { image: "/KitchenPage/Kitchen83.jpg" },
    { image: "/KitchenPage/Kitchen84.png" },
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
