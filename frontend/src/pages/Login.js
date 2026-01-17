import React, {useState} from "react";
import{Link, useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginApi } from "../api/authapi";
import { logout } from "../redux/authSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try{
      const data = await loginAPI({email, password});

      dispatch(
        logout({
          user: data.user,
          token: data.token,
        })
      );

      navigate("/dashboard");
    } catch(err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h3 className="fw-bold text-center mb-4">Login to DevCollab</h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button className="btn btn-primary w-100 mt-2">Login</button>
              </form>

              <p className="text-center mt-3 mb-0">
                Don’t have an account? <Link to="/signup">Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
