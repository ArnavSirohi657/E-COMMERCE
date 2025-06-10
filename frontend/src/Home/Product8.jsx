export default function Product8() {
  const productData = [
    {
      heading: "Up to 70% off | Curated products from Small Busines…",
      image: "/HomePage/Home89.jpg",
      desc: "Pack of 2 Innerwear Organizer Legging Storage Bag Dupatta Organizer Bag, Storage Organizer Pouch",
      price: "₹361.00",
      thumbnails: [
        "/HomePage/Home89.jpg",
        "/HomePage/Home90.jpg",
        "/HomePage/Home91.jpg",
        "/HomePage/Home92.jpg"
      ]
    },
    {
      heading: "Under ₹499 | Bestsellers from Emerging businesses",
      image: "/HomePage/Home93.jpg",
      desc: "Green Gainz Roasted Edamame Classic Flavour – 100gm | 100% Veg High Protein Snack | No Added",
      price: "₹199",
      thumbnails: [
        "/HomePage/Home93.jpg",
        "/HomePage/Home94.jpg",
        "/HomePage/Home95.jpg",
        "/HomePage/Home95.jpg"
      ]
    },
    {
      heading: "Best Sellers in Sports, Fitness & Outdoors",
      image: "/HomePage/Home96.jpg",
      desc: "EXPLESIA Rock Carved Buddha face Shower Water Fountain for Home, Indoor Water Fountain Big Size...",
      price: "₹1000",
      thumbnails: [
          "/HomePage/Home96.jpg",
          "/HomePage/Home97.jpg",
          "/HomePage/Home98.jpg",
          "/HomePage/Home99.jpg"
        ]
     

    },
    {
      heading: "Up to 80% off | Handcrafted treasures from artisans",
      image: "/HomePage/Home100.jpg",
      desc: "HindCraft Car Dashboard Decoration Items – Aggressive Bulldog Showpiece Figure for Home and",
      price: "₹499.00",
      thumbnails: [
        "/HomePage/Home100.jpg",
        "/HomePage/Home101.jpg",
        "/HomePage/Home102.jpg",
        "/HomePage/Home103.jpg"
      ]
    }
  ];

  return (
    <div className="container my-4">
      <div className="row g-4">
        {productData.map((product, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3">
            <div className="border p-3 h-100 bg-white shadow-sm d-flex flex-column">
              <h6 className="fw-semibold text-start">{product.heading}</h6>
              <img
                src={product.image}
                alt="Main product"
                className="img-fluid my-2 align-self-start"
                style={{ height: "160px", objectFit: "contain" }}
              />
              <p className="text-start small mb-1">{product.desc}</p>
              <p className="fw-bold text-start mb-2">{product.price}</p>
              <div className="d-flex gap-2 justify-content-start mt-auto">
                {product.thumbnails.map((thumb, i) => (
                  <img
                    key={i}
                    src={thumb}
                    alt="Thumbnail"
                    className="img-thumbnail"
                    style={{
                      width: "45px",
                      height: "45px",
                      objectFit: "cover",
                      padding: "2px"
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
