import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/SignUp.css";
import axios from "../utils/axiosInstance"; // adjust path if needed

axios.get(`/api/products`)
  .then((res) => {
    // your logic
  })
  .catch((err) => {
    console.error(err);
  });
export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // ✅ You can replace this with an API call to your backend
    const userData = {
      name,
      email,
      password,
    };

    console.log("Registering user:", userData);
    // axios.post("/api/auth/signup", userData)...

    // Redirect after success (simulate for now)
    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <div className="signup-container d-flex align-items-center justify-content-center">
      <div className="signup-card shadow-sm p-4 rounded bg-white">
        <h3 className="mb-3">Create Account</h3>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label className="form-label fw-bold">Your Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First and last name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="At least 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-warning w-100">
            Continue
          </button>
        </form>

        <p className="small mt-3">
          By creating an account, you agree to Amazon's{" "}
          <a href="#">Conditions of Use</a> and{" "}
          <a href="#">Privacy Notice</a>.
        </p>

        <hr />
        <p className="text-center small">Already have an account?</p>
        <button
          className="btn btn-light border w-100"
          onClick={() => navigate("/login")}
        >
          Log In
        </button>
      </div>
    </div>
  );
}
