import "../CSS/TopBar.css";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

export default function TopBar() {
  const handleSignin=()=>{
    window.location.href="http://localhost:5173/signin"
  }
  return (
    <div className="topbar">
      <div className="topbar-left">
        <img
          src="/Logo.jpg"
          alt="Logo"
          className="logo"
        />
        <div className="location">
          <span className="small-text">Delivering to Delhi 110008</span>
          <strong>Update location</strong>
        </div>
      </div>

      <div className="topbar-search">
        <select className="search-category">
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="books">Books</option>
          <option value="fashion">Fashion</option>
        </select>
        <input type="text" placeholder="Search ECOMM.in" />
        <button className="search-btn">
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
