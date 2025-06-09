import { Link } from "react-router-dom";
import "../CSS/NavBar.css";

export default function NavBar() {
  return (
    <nav className="custom-navbar bg-dark text-white py-2 shadow-sm sticky-top">
      <div className="container-fluid px-lg-4 px-2">
        <div
          className="d-flex align-items-center overflow-auto flex-nowrap"
          style={{ gap: "1.5rem" }}
        >
          {[
            { path: "/sell", label: "Sell" },
            { path: "/bestsellers", label: "Best Sellers" },
            { path: "/todaydeal", label: "Today's Deals" },
            { path: "/mobiles", label: "Mobiles" },
            { path: "/customerservice", label: "Customer Service" },
            { path: "/fashion", label: "Fashion" },
            { path: "/electronic", label: "Electronics" },
            { path: "/homeandkitchen", label: "Home & Kitchen" },
            { path: "/carandmotorbike", label: "Car & Motorbike" },
            { path: "/computer", label: "Computers" },
            { path: "/signin", label: "Sign In" },
          ].map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="nav-link text-white px-2 py-1"
              style={{
                whiteSpace: "nowrap",
                fontSize: "0.95rem",
                fontWeight: 500,
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
