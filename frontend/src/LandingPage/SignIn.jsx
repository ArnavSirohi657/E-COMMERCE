import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/SignIn.css";
import axios from "axios";


export default function SignIn() {
    const [signInData, setSignInData] = useState({ email: "", password: "" });
    const [signUpData, setSignUpData] = useState({ name: "", email: "", password: "" });
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        console.log("Signing in with:", signInData);
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", {
                email: signInData.email,
                password: signInData.password,
            });
            localStorage.setItem("token", res.data.token);
            alert("login successful")
            navigate("/")
        } catch (err) {
            alert("login failed")
        }


    };


    const handleSignUp = async (e) => {
        e.preventDefault();
        console.log("Registering user:", signUpData);

        try {
            const res = await axios.post("http://localhost:5000/api/auth/register", {
                name: signUpData.name,
                email: signUpData.email,
                password: signUpData.password,
            });

            alert("✅ Account created successfully!");
            navigate("/"); // or wherever you want to go after signup
        } catch (err) {
            console.error("❌ Sign up error:", err.response?.data?.message || err.message);
            alert("❌ Account creation failed");
        }
    };


    return (
        <div className="auth-container d-flex justify-content-center align-items-center">
            <div className="form-box signin-form bg-white p-4 rounded shadow-sm">
                <h3 className="mb-3">Sign-In</h3>
                <form onSubmit={handleSignIn}>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Email or mobile phone number</label>
                        <input
                            type="email"
                            className="form-control"
                            value={signInData.email}
                            onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
                            required
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={signInData.password}
                            onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
                            required
                            placeholder="Enter password"
                        />
                    </div>
                    <button type="submit" className="btn btn-warning w-100">
                        Continue
                    </button>
                </form>
                <p className="small mt-3">
                    By continuing, you agree to Amazon's{" "}
                    <a href="#">Conditions of Use</a> and{" "}
                    <a href="#">Privacy Notice</a>.
                </p>
            </div>

            <div className="form-box signup-form bg-white p-4 rounded shadow-sm ms-4">
                <h3 className="mb-3">Create Account</h3>
                <form onSubmit={handleSignUp}>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Your Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={signUpData.name}
                            onChange={(e) => setSignUpData({ ...signUpData, name: e.target.value })}
                            required
                            placeholder="First and last name"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={signUpData.email}
                            onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                            required
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={signUpData.password}
                            onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                            required
                            placeholder="At least 6 characters"
                        />
                    </div>
                    <button type="submit" className="btn btn-light border w-100">
                        Create your Amazon account
                    </button>
                </form>
            </div>
        </div>
    );
}
