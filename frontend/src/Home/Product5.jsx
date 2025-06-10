export default function Product5() {
  const productData = [
    {
      heading: "Up to 60% off | Trending products from Emerging Busi...",
      image: "/HomePage/Home53.jpg",
      desc: "Stvin Magnetic Cable Clips for Wire and Cord Management, Office and Home Desk Organizer for…",
      price: "₹299.00",
      thumbnails: ["/HomePage/Home55.jpg", "/HomePage/Home56.jpg", "/HomePage/Home57.jpg", "/HomePage/Home54.jpg"]
    },
    {
      heading: "Starting ₹70,348 | Ride into your next adventure",
      image: "/HomePage/Home58.jpg",
      desc: "Chetak 3501 by Bajaj Auto High Speed Electric Scooter with charger - Indigo Metallic - Ex-Showro...",
      price: "₹1,34,500",
      thumbnails: ["/HomePage/Home58.jpg", "/HomePage/Home59.jpg", "/HomePage/Home60.jpg", "/HomePage/Home61.jpg"]
    },
    {
      heading: "Starting ₹229 | Unique home essentials from nearby stores",
      image: "/HomePage/Home62.jpg",
      desc: "EXPLESIA Rock Carved Buddha face Shower Water Fountain for Home, Indoor Water Fountain Big Size...",
      price: "₹13,299",
      thumbnails: ["/HomePage/Home62.jpg", "/HomePage/Home63.jpg", "/HomePage/Home64.jpg", "/HomePage/Home65.jpg"]
    },
    {
      heading: "Best Sellers in Beauty",
      image: "/HomePage/Home66.jpg",
      desc: "Ghar Soaps Sandalwood & Saffron Magic Soaps For Bath (300 Gms Pack Of 3) | Paraben Free | Chanda...",
      price: "₹395.00",
      thumbnails: ["/HomePage/Home66.jpg", "/HomePage/Home67.jpg", "/HomePage/Home68.jpg", "/HomePage/Home69.jpg"]
    },
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
                className="img-fluid my-2 align-self-start hover-main-image"
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
                    className="img-thumbnail hover-thumbnail"
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

      {/* Hover styles */}
      <style>{`
        .hover-main-image {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-main-image:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          cursor: pointer;
        }

        .hover-thumbnail {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-thumbnail:hover {
          transform: scale(1.08);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}