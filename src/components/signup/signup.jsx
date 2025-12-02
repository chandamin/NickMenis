import React, { useState } from "react";


const SignUp = () => {
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="signup-main">
      <h2 className="signup-heading">Let’s get started !</h2>
      <p className="signup-subtitle">
        It is a long established fact that a reader will be
      </p>

      <div className="signup-card">
        <h3 className="signup-title">Sign Up</h3>

        <form onSubmit={handleSubmit}>

          <div className="signup-row">
            <input
              type="text"
              name="first"
              placeholder="First Name*"
              value={formData.first}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="last"
              placeholder="Last Name*"
              value={formData.last}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            required
            className="full-input"
          />

          <input
            type="password"
            name="password"
            placeholder="Password*"
            value={formData.password}
            onChange={handleChange}
            required
            className="full-input"
          />

          <input
            type="password"
            name="confirm"
            placeholder="Confirm Password*"
            value={formData.confirm}
            onChange={handleChange}
            required
            className="full-input"
          />

          <button type="submit" className="signup-btn">SIGN UP</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
