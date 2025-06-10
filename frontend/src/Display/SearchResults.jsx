import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../CSS/SearchResult.css"; // Add styling here

export default function SearchResults() {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/search?q=${query}`)
      .then((res) => setResults(res.data))
      .catch((err) => console.error(err));
  }, [query]);

  return (
    <div className="container py-4">
      <h5 className="mb-3">Search Results for "<strong>{query}</strong>"</h5>
      <div className="search-grid">
        {results.length === 0 ? (
          <p>No products found.</p>
        ) : (
          results.map((product) => (
            <Link
              to={`/product/${product._id}`}
              className="search-card"
              key={product._id}
            >
              <img
                src={product.image}
                alt={product.title}
                className="search-card-img"
              />
              <div className="search-card-body">
                <h6 className="search-card-title">{product.title}</h6>
                <p className="search-card-price">₹{product.price.toLocaleString()}</p>
                <p className="search-card-rating">⭐ {product.rating || 4.2}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
