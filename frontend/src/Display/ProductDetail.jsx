import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../CSS/ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <div className="loading">Loading product...</div>;

  return (
    <div className="product-detail-container">
      <div className="product-detail-image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-detail-info">
        <h4>{product.title}</h4>
        <p className="description">{product.description}</p>
        <p className="price">₹{product.price.toLocaleString()}</p>
        <p className="rating">⭐ {product.rating || 4.2} | Free Delivery</p>

        <div className="action-buttons">
          <button className="buy-now">Buy Now</button>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
