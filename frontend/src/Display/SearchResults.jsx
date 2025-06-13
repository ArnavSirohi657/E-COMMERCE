import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import "../CSS/SearchResult.css";

export default function SearchResults() {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    if (!query) return;

    axiosInstance
      .get(`/products/search?q=${query}`)
      .then((res) => {
        console.log("Search API response:", res.data);
        if (Array.isArray(res.data)) {
          setResults(res.data);
        } else {
          setResults([]);
          setError("Invalid response format from server.");
        }
      })
      .catch((err) => {
        console.error("Search Error:", err);
        setResults([]);
        setError("Failed to fetch search results.");
      });
  }, [query]);

  const calculateDiscount = (originalPrice, currentPrice) => {
    const discount = Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
    return discount > 0 ? discount : null;
  };

  const getDeliveryDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 2);
    return today.toLocaleDateString("en-IN", {
      weekday: "short",
      month: "short",
      day: "numeric"
    });
  };

  return (
    <div className="amazon-search-container">
      <div className="search-results-header">
        <h2 className="search-results-title">Results for "{query}"</h2>
        <p className="results-count">{results.length} result(s)</p>
      </div>

      {error && (
        <div className="error-message">
          <p className="text-danger">{error}</p>
        </div>
      )}

      <div className="amazon-product-grid">
        {Array.isArray(results) && results.length === 0 && !error ? (
          <div className="no-results-container">
            <p className="no-results">No products found matching your search.</p>
            <Link to="/" className="keep-shopping-btn">Keep Shopping</Link>
          </div>
        ) : (
          Array.isArray(results) &&
          results.map((product) => {
            const original = product.originalPrice || product.price * 1.2;
            const discount = calculateDiscount(original, product.price);

            return (
              <div className="amazon-product-card" key={product._id}>
                <Link to={`/product/${product._id}`} className="product-link">
                  <div className="product-image-container">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="product-image"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/300x300?text=No+Image';
                      }}
                    />
                    {discount && <div className="discount-badge">{discount}% off</div>}
                    <div className="prime-badge"><span className="prime-icon">✓</span> Prime</div>
                  </div>

                  <div className="product-details">
                    <h3 className="product-title">{product.title}</h3>
                    <div className="price-section">
                      <span className="current-price">₹{product.price.toLocaleString()}</span>
                      <span className="original-price">₹{original.toLocaleString()}</span>
                    </div>

                    {discount && (
                      <div className="coupon-section">
                        <span className="coupon-badge">Save ₹{(original - product.price).toLocaleString()}</span>
                        <span className="coupon-text">with coupon</span>
                      </div>
                    )}

                    <div className="delivery-info">
                      <span className="delivery-text">FREE delivery</span>
                      <span className="delivery-date">{getDeliveryDate()}</span>
                    </div>

                    <div className="product-rating">
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`star ${i < Math.floor(product.rating || 4) ? 'filled' : ''}`}>
                            {i < Math.floor(product.rating || 4) ? '★' : '☆'}
                          </span>
                        ))}
                      </div>
                      <span className="rating-count">{Math.floor(Math.random() * 900 + 100)}</span>
                    </div>

                    {product.isBestSeller && (
                      <div className="best-seller-badge">#1 Best Seller</div>
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

                <button className="add-to-cart-btn">Add to Cart</button>
                <button className="buy-now-btn">Buy Now</button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
