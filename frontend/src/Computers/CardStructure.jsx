export default function CardStructure({ image, para, brand, price, mrp, rating, reviews }) {
    return (
      <div className="bg-white p-2 rounded-3 shadow-sm h-100">
        <img src={image} alt={para} className="img-fluid d-block mx-auto mb-2" style={{ height: "150px", objectFit: "contain" }} />
        <div className="px-2">
          <p className="mb-1 text-muted small">{brand}</p>
          <p className="fw-semibold small">{para}</p>
          <div>
            <span className="fw-bold me-2 text-success">{price}</span>
            <span className="text-decoration-line-through text-muted small">{mrp}</span>
          </div>
          <div className="text-warning small">
            {"★".repeat(Math.floor(rating))}{"☆".repeat(5 - Math.floor(rating))} ({reviews})
          </div>
        </div>
      </div>
    );
  }
  