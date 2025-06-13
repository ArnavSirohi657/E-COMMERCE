import { useLocation, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../CSS/SearchResult.css";
import { useCart } from "../context/CartContext";

// Use environment variable or fallback to local dev server
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://e-commerce-fpf4.onrender.com";

export default function SearchResults() {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get("q");
  const { addToCart } = useCart();

  useEffect(() => {
    if (!query) return;

    axios
      .get(`${API_BASE_URL}/api/products/search?q=${query}`)
      .then((res) => setResults(res.data))
      .catch((err) => console.error("❌ Error fetching search results:", err));
  }, [query]);

  const calculateDiscount = (originalPrice, currentPrice) => {
    const discount = Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
    return discount > 0 ? discount : null;
  };

  return (
    <div className="amazon-search-container">
      <div className="search-results-header">
        <h2 className="search-results-title">Results for "{query}"</h2>
        <p className="results-count">{results.length} results</p>
      </div>

      <div className="amazon-product-grid">
        {results.length === 0 ? (
          <div className="no-results-container">
            <p className="no-results">No products found matching your search.</p>
            <Link to="/" className="keep-shopping-btn">Keep Shopping</Link>
          </div>
        ) : (
          results.map((product) => {
            const discount = calculateDiscount(product.originalPrice || product.price * 1.2, product.price);

            return (
              <div className="amazon-product-card" key={product._id}>
                <Link to={`/product/${product._id}`} className="product-link">
                  <div className="product-image-container">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="product-image"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x300?text=No+Image';
                      }}
                    />
                    {discount && (
                      <div className="discount-badge">{discount}% off</div>
                    )}
                    <div className="prime-badge">
                      <span className="prime-icon">✓</span> Prime
                    </div>
                  </div>

                  <div className="product-details">
                    <h3 className="product-title">{product.title}</h3>

                    <div className="price-section">
                      <span className="current-price">₹{product.price.toLocaleString()}</span>
                      {product.originalPrice && (
                        <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
                      )}
                    </div>

                    {discount && (
                      <div className="coupon-section">
                        <span className="coupon-badge">Save ₹{(product.originalPrice - product.price).toLocaleString()}</span>
                        <span className="coupon-text">with coupon</span>
                      </div>
                    )}

                    <div className="delivery-info">
                      <span className="delivery-text">FREE delivery</span>
                      <span className="delivery-date">Wed, Jul 12</span>
                    </div>

                    <div className="product-rating">
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`star ${i < Math.floor(product.rating || 4.2) ? 'filled' : ''}`}>
                            {i < Math.floor(product.rating || 4.2) ? '★' : '☆'}
                          </span>
                        ))}
                      </div>
                      <span className="rating-count">{Math.floor(Math.random() * 1000)}</span>
                    </div>

                    {product.isBestSeller && (
                      <div className="best-seller-badge">
                        <span>#1 Best Seller</span>
                      </div>
                    )}

                    <div className="stock-status">
                      {product.inStock ? (
                        <span className="in-stock">In Stock</span>
                      ) : (
                        <span className="out-of-stock">Out of Stock</span>
                      )}
                    </div>
                  </div>
                </Link>

                <button
                  className="add-to-cart-btn"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>

                <button
                  className="buy-now-btn"
                  onClick={() => {
                    addToCart(product);
                    const orderId = `ORD-${Date.now()}`;
                    navigate(`/checkout/${orderId}/${product.price}`);
                  }}
                >
                  Buy Now
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
