import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import "../CSS/TopBar.css";

export default function TopBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [userName, setUserName] = useState(null);
  const navigate = useNavigate();
  const { cartItems } = useCart();

  useEffect(() => {
    const loadUser = () => {
      const user = localStorage.getItem("user");
      if (user) {
        const parsed = JSON.parse(user);
        setUserName(parsed.name);
      } else {
        setUserName(null); // handle logout or no user
      }
    };

    // Initial load
    loadUser();

    // Listen for login/signup
    window.addEventListener("user-logged-in", loadUser);

    // Optional: handle logout if needed
    window.addEventListener("user-logged-out", loadUser);

    return () => {
      window.removeEventListener("user-logged-in", loadUser);
      window.removeEventListener("user-logged-out", loadUser);
    };
  }, []);

  const handleSignin = () => {
    if (userName) return; // already signed in
    navigate("/signin");
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
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
          <span>Hello, {userName || "sign in"}</span>
          <strong>{userName ? "Account" : "Account & Lists"}</strong>
        </button>

        <button className="topbar-btn orders">
          <span>Returns</span>
          <strong>& Orders</strong>
        </button>

        <button className="topbar-btn cart" onClick={() => navigate("/cart")}>
          <FaShoppingCart />
          <span>Cart ({cartItems.length})</span>
        </button>
      </div>
    </div>
  );
}
