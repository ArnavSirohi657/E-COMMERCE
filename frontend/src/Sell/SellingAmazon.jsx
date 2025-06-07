export default function SellingAmazon() {
    return (
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-5">How to sell on Amazon.in?</h2>
  
        {/* Step 1 and 2 */}
        <div className="row g-4 mb-4">
          {/* Step 1 */}
          <div className="col-md-6">
            <div className="border rounded-4 p-4 shadow-sm h-100 bg-white text-center">
              <h5 className="fw-bold mb-3 text-start">STEP 1: Register your account</h5>
              <img
                src="/Sell/Register.jpeg"
                alt="Register"
                className="img-fluid rounded mb-3"
                style={{ maxWidth: "220px" }}
              />
              <p className="text-start">
                Register on Amazon with GST/PAN details and an active bank account.
              </p>
            </div>
          </div>
  
          {/* Step 2 */}
          <div className="col-md-6">
            <div className="border rounded-4 p-4 shadow-sm h-100 bg-white text-center">
              <h5 className="fw-bold mb-3 text-start">STEP 2: Choose storage & shipping</h5>
              <img
                src="/Sell/Storage.jpeg"
                alt="Storage"
                className="img-fluid rounded mb-3"
                style={{ maxWidth: "220px" }}
              />
              <p className="text-start">
                Choose storage, packaging, and delivery options.
              </p>
            </div>
          </div>
        </div>
  
        {/* Step 3 and 4 */}
        <div className="row g-4">
          {/* Step 3 */}
          <div className="col-md-6">
            <div className="border rounded-4 p-4 shadow-sm h-100 bg-white text-center">
              <h5 className="fw-bold mb-3 text-start">STEP 3: List your products</h5>
              <img
                src="/Sell/List.jpeg"
                alt="List"
                className="img-fluid rounded mb-3"
                style={{ maxWidth: "220px" }}
              />
              <p className="text-start">
                List your products by providing product and brand details.
              </p>
            </div>
          </div>
  
          {/* Step 4 */}
          <div className="col-md-6">
            <div className="border rounded-4 p-4 shadow-sm h-100 bg-white text-center">
              <h5 className="fw-bold mb-3 text-start">STEP 4: Complete orders & get paid</h5>
              <img
                src="/Sell/Paid.png"
                alt="Paid"
                className="img-fluid rounded mb-3"
                style={{ maxWidth: "220px" }}
              />
              <p className="text-start">
                Deliver orders to customers on time and get paid within 7 days of delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  