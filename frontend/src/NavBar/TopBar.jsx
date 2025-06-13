import "../CSS/TopBar.css";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TopBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const navigate = useNavigate();

  const handleSignin = () => {
    window.location.href = "http://localhost:5173/signin";
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      // Send both search term and category if needed
      navigate(`/search?q=${searchTerm.trim()}&category=${category}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="topbar">
      <div className="topbar-left">
        <img src="/logo.png" alt="Logo" className="logo" />
        <div className="location">
          <span className="small-text">Delivering to Delhi 110008</span>
          <strong>Update location</strong>
        </div>
      </div>

      <div className="topbar-search">
        <select
          className="search-category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="books">Books</option>
          <option value="fashion">Fashion</option>
        </select>

        <input
          type="text"
          placeholder="Search ECOMM.in"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
        />

        <button className="search-btn" onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>

      <div className="topbar-right">
        <div className="language">
          <img
            src="https://flagcdn.com/w40/in.png"
            alt="India"
            className="flag"
          />
          <span>IND</span>
        </div>

        <button className="topbar-btn account" onClick={handleSignin}>
          <span>Hello, sign in</span>
          <strong>Account & Lists</strong>
        </button>

        <button className="topbar-btn orders">
          <span>Returns</span>
          <strong>& Orders</strong>
        </button>

        <button className="topbar-btn cart">
          <FaShoppingCart />
          <span>Cart</span>
        </button>
      </div>
    </div>
  );
}
