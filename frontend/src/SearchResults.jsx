import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

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
      <h2>Search Results for "{query}"</h2>
      <div className="row mt-4">
        {results.length === 0 ? (
          <p>No products found.</p>
        ) : (
          results.map((product) => (
            <div className="col-md-3 mb-4" key={product._id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body">
                  <h6 className="card-title">{product.title}</h6>
                  <p className="card-text">₹{product.price}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
