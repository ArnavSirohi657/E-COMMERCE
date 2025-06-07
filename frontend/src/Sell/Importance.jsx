import { FaUsers, FaRupeeSign, FaTruck } from "react-icons/fa";

export default function Importance() {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-5">Why become a seller on Amazon.in?</h2>

      <div className="row g-4">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0 rounded-4 text-center p-4">
            <div className="mb-3 text-warning fs-1">
              <FaUsers />
            </div>
            <h5 className="fw-bold mb-2">Crores of Customers</h5>
            <p className="text-secondary">
              Reach crores of customers on Amazon.in, India's most visited shopping destination.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0 rounded-4 text-center p-4">
            <div className="mb-3 text-success fs-1">
              <FaRupeeSign />
            </div>
            <h5 className="fw-bold mb-2">26,800 Crorepati Sellers</h5>
            <p className="text-secondary">
              95,500 lakhpati sellers in 2023 alone. You could be next.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0 rounded-4 text-center p-4">
            <div className="mb-3 text-primary fs-1">
              <FaTruck />
            </div>
            <h5 className="fw-bold mb-2">Unbeatable Reach</h5>
            <p className="text-secondary">
              Deliver to 100% of India's serviceable pincodes, through Easy Ship & Fulfillment by Amazon.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
