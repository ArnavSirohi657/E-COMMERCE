import "../CSS/Fees.css";

export default function Fees() {
  return (
    <div className="fees-section py-5">
      <div className="container">
        <h1 className="text-center mb-5 fw-bold fees-title text-black">
          <img src="Sell01.gif" width="40px" alt="icon" className="me-2" />
          Fee drop highlights
        </h1>

        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-4 d-flex justify-content-center mb-4">
            <div className="fee-box bg-lightblue p-4 rounded-4 shadow-sm w-100">
              <h2 className="fw-bold display-5 mb-2">0%</h2>
              <p className="mb-1">Referral fees on products under</p>
              <p className="fw-bold fs-5 mb-0">₹300</p>
            </div>
          </div>

          <div className="col-12 col-md-4 d-flex justify-content-center mb-4">
            <div className="fee-box bg-lightblue p-4 rounded-4 shadow-sm w-100">
              <h2 className="fw-bold display-5 mb-2">₹65</h2>
              <p className="mb-1">National shipping rates now,</p>
              <p className="fw-bold fs-5 mb-0">from ₹77</p>
            </div>
          </div>

          <div className="col-12 col-md-4 d-flex justify-content-center mb-4">
            <div className="fee-box bg-lightblue p-4 rounded-4 shadow-sm w-100">
              <p className="small text-uppercase mb-1">Up to</p>
              <h2 className="fw-bold display-5 mb-2">90%</h2>
              <p className="mb-0">Savings in selling fees on the sale of second unit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
