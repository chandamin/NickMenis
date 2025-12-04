import React, { useState } from "react";
import { Link } from "react-router-dom";  

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <div className="login-main">
      <h2 className="login-heading">Login To Your Account</h2>

      <div className="login-card">
        <h3 className="login-title">Sign In</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password*"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div className="forgot-text">
            <Link to="/forgot-password">Forgot password?</Link>
          </div>

          <Link to="/dashboard">
            <button type="submit" className="login-btn">SIGN IN</button>
          </Link>
        </form>

        <p className="create-account">
          <Link to="/signup">CREATE ACCOUNT</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
