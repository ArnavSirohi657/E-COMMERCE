import { FaBullhorn, FaStore } from "react-icons/fa";

export default function Referal() {
  return (
    <div className="container py-5">
      <div
        className="rounded-4 shadow-lg bg-light mx-auto overflow-hidden"
        style={{
          maxWidth: "1500px",
          height: "640px",
          border: "1px solid #e0e0e0",
        }}
      >
        <div className="row h-100 m-0">
          {/* Text Column */}
          <div className="col-md-6 d-flex flex-column justify-content-between p-5">
            <div>
              <h4 className="mb-4 fw-bold text-primary d-flex align-items-center">
                <FaBullhorn className="me-2" /> Referral Benefits
              </h4>

              <div className="mb-4">
                <button
                  className="btn text-white mb-2"
                  style={{
                    background: "linear-gradient(to right, #f7b42c, #fc575e)",
                  }}
                >
                  Just announced
                </button>
                <p className="text-secondary">
                  Sellers can now get further benefits on multi-unit purchases,
                  enjoying up to <strong>90%+ savings</strong> in fees on
                  additional units sold. Create promotions like{" "}
                  <em>"Buy 2, Get 10% Off"</em> to maximize your savings under
                  the new fee structure.
                </p>
              </div>

              <div>
                <button
                  className="btn text-white mb-2"
                  style={{
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                  }}
                >
                  Amazon Bazaar
                </button>
                <p className="text-secondary">
                  Sellers on Amazon Bazaar enjoy{" "}
                  <strong>zero referral fees</strong> on many products across
                  wide categories and now benefit from up to ₹18 reduction in
                  weight handling fees!
                </p>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="col-md-6 d-flex align-items-end justify-content-center p-0">
            <img
              src="/Sell/Referal.png"
              alt="Referral"
              style={{
                maxWidth: "300px",
                width: "100%",
                height: "auto",
                marginBottom: "4px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
