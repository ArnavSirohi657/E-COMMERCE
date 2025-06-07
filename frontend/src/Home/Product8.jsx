export default function Product8() {
    const productData = [
      {
        heading: "Up to 70% off | Curated products from Small Busines…",
        image: "/Bag/Bag.jpg",
        desc: "Pack of 2 Innerwear Organizer Legging Storage Bag Dupatta Organizer Bag, Storage Organizer Pouch",
        price: "₹361.00",
        thumbnails: [
          "/Bag/Bag.jpg",
          "/Bag/Bag01.jpg",
          "/Bag/Bag02.jpg",
          "/Bag/Bag03.jpg"
        ]
      },
      {
        heading: "Under ₹499 | Bestsellers from Emerging businesses",
        image: "/Edma/Edma.jpg",
        desc: "Green Gainz Roasted Edamame Classic Flavour – 100gm | 100% Veg High Protein Snack | No Added",
        price: "₹199",
        thumbnails: [
          "/Edma/Edma.jpg",
          "/Edma/Edma01.jpg",
          "/Edma/Edma01.jpg",
          "/Edma/Edma03.jpg"
        ]
      },
      {
        heading: "Best Sellers in Sports, Fitness & Outdoors",
        image: "/GYM/Fitness.jpg",
        desc: "EXPLESIA Rock Carved Buddha face Shower Water Fountain for Home, Indoor Water Fountain Big Size...",
        price: "₹1000",
        thumbnails: [
            "/GYM/Fitness.jpg",
            "/GYM/Fitness01.jpg",
            "/GYM/Fitness03.jpg",
            "/GYM/Fitness04.jpg"
          ]
       

      },
      {
        heading: "Up to 80% off | Handcrafted treasures from artisans",
        image: "/Dog/Dog.jpg",
        desc: "HindCraft Car Dashboard Decoration Items – Aggressive Bulldog Showpiece Figure for Home and",
        price: "₹499.00",
        thumbnails: [
          "/Dog/Dog.jpg",
          "/Dog/Dog01.jpg",
          "/Dog/Dog02.jpg",
          "/Dog/Dog03.jpg"
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
  