import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthContext from '../context/AuthContext';

function Signup() {
  const {login} = useContext(AuthContext);
const [email, setEmail] = useState("");
const navigate = useNavigate();


   const handleSubmit = (e) => {
    e.preventDefault();
    login(email);        // simulate signup
    navigate('/dashboard'); // redirect
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
          style={{ maxwidth: "400px", width: "100%" }}
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
              />
            </div>

             <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter password" />
            </div>

                        <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm password" />
            </div>

             <button type="submit" className="btn btn-primary w-100">Sign Up</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Signup;