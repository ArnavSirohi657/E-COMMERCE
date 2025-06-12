import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  // ✅ Calculate total based on quantity
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  const handleCheckout = () => {
    const orderId = `ORD-${Date.now()}`;
    navigate(`/checkout/${orderId}/${total}`);
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold">Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <h4 className="mb-3">🛒 Your cart is empty</h4>
          <Link to="/" className="btn btn-warning">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-8">
            {cartItems.map((item) => (
              <div
                key={item._id} // ✅ use _id
                className="d-flex align-items-center justify-content-between p-3 mb-3 border rounded shadow-sm bg-white"
              >
                <div className="d-flex align-items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "contain",
                    }}
                    className="me-3"
                  />
                  <div>
                    <h5 className="mb-1">{item.title}</h5>
                    <p className="text-muted mb-1">
                      Price: ₹{item.price.toLocaleString()}
                    </p>
                    <select
                      value={item.quantity || 1}
                      onChange={(e) =>
                        updateQuantity(item._id, parseInt(e.target.value))
                      }
                      className="form-select form-select-sm w-auto"
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          Qty: {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="btn btn-outline-danger btn-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="col-lg-4">
            <div className="p-4 border rounded shadow-sm bg-light">
              <h5 className="fw-bold mb-3">Order Summary</h5>
              <p>Total Items: {cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0)}</p>
              <h4>Total: ₹{total.toLocaleString()}</h4>
              <button
                className="btn btn-success w-100 mt-3 fw-bold"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
