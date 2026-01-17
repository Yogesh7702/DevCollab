import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());   // Redux state clear
    navigate("/login");   // Redirect
  };
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
    <div className="container">
      <a className="navbar-brand fw-bold" href="/">
        DevCollab
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#devcollabNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="devcollabNavbar">
        <div className="ms-auto d-flex gap-2 mt-3 mt-lg-0">
          {user ? (
            <>
              <Link to="/dashboard" className="btn btn-outline-primary">
                Dashboard
              </Link>

              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline-primary">
                Login
              </Link>

              <Link to="/signup" className="btn btn-outline-primary">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  </nav>
);

}

export default Navbar;
