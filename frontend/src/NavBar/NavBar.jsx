import { Link } from "react-router-dom";
import "../CSS/NavBar.css";

export default function NavBar() {
  return (
    <nav className="custom-navbar bg-dark text-white py-2 shadow-sm sticky-top">


      <div className="container-fluid px-lg-4 px-2">
      <div className="d-flex align-items-center justify-content-start gap-3 overflow-auto flex-nowrap">

          <Link className="nav-link text-white" to="/all">All</Link>
          <Link className="nav-link text-white" to="/sell">Sell</Link>
          <Link className="nav-link text-white" to="/bestsellers">Best Sellers</Link>
          <Link className="nav-link text-white" to="/todaydeal">Today's Deals</Link>
          <Link className="nav-link text-white" to="/mobiles">Mobiles</Link>
          <Link className="nav-link text-white" to="/customerservice">Customer Service</Link>
          <Link className="nav-link text-white" to="/fashion">Fashion</Link>
          <Link className="nav-link text-white" to="/newrealease">New Releases</Link>
          <Link className="nav-link text-white" to="/electronic">Electronics</Link>
          <Link className="nav-link text-white" to="/homeandkitchen">Home & Kitchen</Link>
          <Link className="nav-link text-white" to="/carandmotorbike">Car & Motorbike</Link>
          <Link className="nav-link text-white" to="/computer">Computers</Link>
          <Link className="nav-link text-white" to="/book">Books</Link>
          <Link className="nav-link text-white" to="/signin">Sign In</Link>
        </div>
      </div>
    </nav>
  );
}
