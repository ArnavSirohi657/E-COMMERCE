
export default function Component3() {
  

  const CarGadget = [
    
    { image: "/CarPage/Car24.jpg" },
    { image: "/CarPage/Car25.jpg" },
    { image: "/CarPage/Car26.jpg" },
    { image: "/CarPage/Car27.jpg" },
    { image: "/CarPage/Car28.jpg" },
    { image: "/CarPage/Car29.jpg" },
    
  ];

  

  return (
    <div className="py-5 bg-light position-relative">
      <h2 className="mb-4 fw-bold text-start px-5">Brands in Focus</h2>

      {/* Scrollable Row */}
      <div
        className="d-flex flex-nowrap overflow-auto px-5"
        style={{ gap: "2rem" }}
      >
        {CarGadget.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-4 shadow-sm text-center p-3 flex-shrink-0"
            style={{ width: "180px", height: "260px" }}
          >
            <img
              src={item.image}
              alt=""
              style={{
                height: "200px",
                width: "100%",
                objectFit: "cover",
                borderRadius: "12px",
              }}
              className="mb-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
