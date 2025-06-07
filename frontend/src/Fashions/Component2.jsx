export default function Component2() {
    const mobiles = [
      {
        image: "/FashionPage/Fashion21.png",
        brand: "BIBA | Libas",
        label: "Women's Kurta Sets",
        offer: "Up To 60% Off",
      },
      {
        image: "/FashionPage/Fashion22.png",
        brand: "crocs",
        label: "Clogs",
        offer: "Min. 40% Off",
      },
      {
        image: "/FashionPage/Fashion23.png",
        brand: "PETER ENGLAND | VAN HEUSEN",
        label: "Men's Shirts",
        offer: "Up To 60% Off",
      },
      {
        image: "/FashionPage/Fashion24.png",
        brand: "candio | LA SHIELD",
        label: "Sunscreens",
        offer: "Up To 20% Off",
      },
      {
        image: "/FashionPage/Fashion25.png",
        brand: "AMERICAN TOURISTER | mokobara",
        label: "Trolley Bags For Travel",
        offer: "Up To 70% Off",
      },
      {
        image: "/FashionPage/Fashion26.png",
        brand: "Ghar",
        label: "Ghar Soap",
        offer: "Up To 60% Off",
      },
    ];
  
    return (
      <div className="container-fluid my-4">
        
        <div className="d-flex flex-nowrap overflow-auto px-3">
          {mobiles.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded p-2 me-3 text-center"
              style={{ minWidth: "200px", maxWidth: "200px" }}
            >
              <img
                src={item.image}
                alt={item.label}
                className="img-fluid mb-2"
                style={{ height: "200px", objectFit: "contain" }}
              />
              <p className="fw-bold mb-1 small text-uppercase">{item.brand}</p>
              <p className="mb-1 small">{item.label}</p>
              <p className="text-primary fw-semibold small">{item.offer}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  