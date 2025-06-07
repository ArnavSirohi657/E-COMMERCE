export default function SignIn() {
    return (
      <div
        className="d-flex flex-column align-items-center justify-content-center py-5"
        style={{ backgroundColor: "#fff" }}
      >
        <h3 className="fw-semibold mb-3">See personalized recommendations</h3>
        <button
          className="btn btn-warning fw-bold mb-2 px-4 py-2"
          style={{ borderRadius: "20px" }}
        >
          Sign in
        </button>
        <p className="mb-0">
          New customer?{" "}
          <a href="#" className="text-primary text-decoration-none">
            Start here.
          </a>
        </p>
      </div>
    );
  }
  