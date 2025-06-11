import { useState } from "react";
import "../CSS/DeliveryInfo.css";
import { MapPin, Truck } from "lucide-react";

export default function DeliveryInfo() {
  const [pincode, setPincode] = useState("");
  const [location, setLocation] = useState("");

  const handleCheck = () => {
    if (pincode.length === 6) {
      setLocation("Delivery expected between 2-4 business days");
    } else {
      setLocation("Please enter a valid 6-digit pincode");
    }
  };

  return (
    <div className="delivery-box amazon-delivery-container border rounded p-3 mb-4">
      <div className="d-flex align-items-start mb-2">
        <MapPin size={18} className="me-2 text-muted mt-1" />
        <div>
          <span className="text-sm text-muted">Deliver to</span>
          <h6 className="fw-bold mb-1">India</h6>
        </div>
      </div>

      <div className="pincode-form d-flex gap-2 align-items-center mb-2">
        <input
          type="text"
          className="form-control amazon-pincode-input"
          placeholder="Enter pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
          maxLength={6}
        />
        <button 
          className="btn btn-sm amazon-pincode-btn"
          onClick={handleCheck}
        >
          Apply
        </button>
      </div>

      {location && (
        <div className="d-flex">
          <Truck size={16} className="me-2 text-muted mt-1" />
          <small className={`${location.includes("valid") ? "text-danger" : "text-success"}`}>
            {location}
          </small>
        </div>
      )}
    </div>
  );
}