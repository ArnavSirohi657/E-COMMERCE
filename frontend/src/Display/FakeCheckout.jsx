import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../utils/axiosInstance"; // adjust path if needed

axios.get(`/api/products`)
  .then((res) => {
    // your logic
  })
  .catch((err) => {
    console.error(err);
  });
export default function FakeCheckout() {
  const { orderId, amount } = useParams();
  const [paid, setPaid] = useState(false);
  const [timer, setTimer] = useState(12 * 60);

  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  const handleFakePayment = () => {
    if (
      accountName.trim().toLowerCase() === "fakepay merchant" &&
      accountNumber.trim() === "1234567890" &&
      ifscCode.trim().toUpperCase() === "FAKE0001234"
    ) {
      alert("✅ Simulated payment successful!");
      setPaid(true);
    } else {
      alert("❌ Incorrect bank details. Please verify and try again.");
    }
  };

  if (paid) {
    return (
      <div className="container py-5 text-center">
        <div className="card shadow p-4 mx-auto" style={{ maxWidth: "500px" }}>
          <h3 className="text-success mb-3">✅ Payment Successful</h3>
          <p><strong>Order ID:</strong> {orderId}</p>
          <p><strong>Paid to:</strong> fakeupi@bank</p>
          <p><strong>Amount:</strong> ₹{amount}</p>
          <p><strong>Account No:</strong> 1234567890</p>
          <p><strong>IFSC Code:</strong> FAKE0001234</p>
          <div className="alert alert-info mt-3">
            Thanks for your simulated payment!
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5 d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow" style={{ width: "400px", borderRadius: "12px", overflow: "hidden" }}>
        <div className="d-flex justify-content-between align-items-center p-3" style={{ backgroundColor: "#f4b400" }}>
          <div className="d-flex align-items-center">
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968757.png" alt="logo" width="30" className="me-2" />
            <strong style={{ fontSize: "18px" }}>FakePay</strong>
          </div>
          <span style={{ fontSize: "20px", cursor: "pointer", color: "#333" }}>×</span>
        </div>

        <div className="p-4">
          <h6 className="text-secondary mb-2">Pay via UPI ID</h6>
          <input
            type="text"
            className="form-control mb-3"
            value="fakeupi@bank"
            readOnly
            style={{ fontWeight: "bold" }}
          />

          <h6 className="text-secondary mt-3">Pay via QR</h6>
          <div className="text-center my-3">
            <img
              src={`/QRCODE.png`}
              alt="UPI QR Code"
              style={{
                width: "200px",
                height: "200px",
                border: "1px solid #ccc",
                backgroundColor: "#fff",
                padding: "10px",
              }}
            />
            <p className="text-muted mt-2 mb-0" style={{ fontSize: "13px" }}>
              Scan the QR using any UPI app
            </p>
            <p className="text-muted" style={{ fontSize: "12px" }}>
              QR valid for <strong>{minutes}:{seconds.toString().padStart(2, '0')}</strong>
            </p>
          </div>

          <h6 className="text-secondary mt-4">OR Enter Bank Details</h6>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Account Holder Name"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Account Number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="IFSC Code"
            value={ifscCode}
            onChange={(e) => setIfscCode(e.target.value)}
          />

          <button
            className="btn btn-success w-100 fw-bold"
            onClick={handleFakePayment}
          >
            I've Paid ₹{amount}
          </button>
        </div>
      </div>
    </div>
  );
}
