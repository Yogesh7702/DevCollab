import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { signupApi } from "../api/authapi";
import { logout } from "../redux/authSlice";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const data = await signupApi({ name, email, password });

      // 🔹 Redux me user set
      dispatch(logout(data.user));

      navigate("/dashboard");
    } catch (error) {
      alert(error.message || "Signup failed");
    }
  };

  return (
    <>
      <Navbar />

      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ minHeight: "70vh" }}
      >
        <div
          className="card p-4 shadow-sm"
          style={{ maxWidth: "400px", width: "100%" }}
        >
          <h2 className="text-center mb-4">Sign Up</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter full name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm password"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Sign Up
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Signup;
