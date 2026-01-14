import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let res;
      // :two: Try seller login
      try {
        res = await axios.post(`${backendUrl}/api/auth/login`, formData);
        if (res.data.success) {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("role", res.data.role);
            localStorage.setItem("user", JSON.stringify(res.data.user)); 
         if(res.data.role === 'admin'){
          navigate("/"+res.data.role+"/dashboard");
         }else{   
          navigate("/"+res.data.role+"/dashboard"); // your seller page
         }
          return;
        }
      } catch {}
      // :three: Try agent login
      alert("Invalid credentials for any role");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
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
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Signing in..." : "SIGN IN"}
          </button>
        </form>
        <p className="create-account">
          <Link to="/signup">CREATE ACCOUNT</Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
