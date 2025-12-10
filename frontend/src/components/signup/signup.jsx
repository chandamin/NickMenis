// import React, { useState } from "react";


// const SignUp = () => {
//   const [role, setRole] = useState("seller"); // default role

//   const [formData, setFormData] = useState({
//     first: "",
//     last: "",
//     email: "",
//     password: "",
//     confirm: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   console.log("Form Submitted:", formData);
//   // };


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirm) {
//       alert("Passwords do not match");
//       return;
//     }

//     try {
//       const payload = {
//         firstName: formData.first,
//         lastName: formData.last,
//         email: formData.email,
//         password: formData.password,
//         confirmPassword: formData.confirm
//       };

//       // 👇 Decide API endpoint based on selected role
//       const endpoint =
//         role === "seller"
//           ? `${process.env.REACT_APP_BACKEND_URL}/api/sellers/signup`
//           : `${process.env.REACT_APP_BACKEND_URL}/api/agent/signup`;

//       // Example: For seller signup
//       const res = await fetch(endpoint, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();

//       if (data.success) {
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("role", data.role);
//         alert("Signup successful!");
//         // navigate to dashboard if needed
//       } else {
//         alert(data.message);
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Signup failed. Try again.");
//     }
//   };

//   return (
//     <div className="signup-main">
//       <h2 className="signup-heading">Let’s get started !</h2>
//       <p className="signup-subtitle">
//         It is a long established fact that a reader will be
//       </p>

//       <div className="signup-card">
//         <h3 className="signup-title">Sign Up</h3>


//         {/* Role Selector */}
//         <div className="user-type-box">
//           <label className="radio-option">
//             <input
//               type="radio"
//               name="role"
//               value="seller"
//               checked={role === "seller"}
//               onChange={() => setRole("seller")}
//             />
//             Seller
       
//           </label>

//           <label className="radio-option">
       
//             <input
//               type="radio"
//               name="role"
//               value="agent"
//               checked={role === "agent"}
//               onChange={() => setRole("agent")}
//             />
//             Agent
//           </label>
     
//         </div>

//         <form onSubmit={handleSubmit}>

//           <div className="signup-row">
//             <input
//               type="text"
//               name="first"
//               placeholder="First Name*"
//               value={formData.first}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="text"
//               name="last"
//               placeholder="Last Name*"
//               value={formData.last}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <input
//             type="email"
//             name="email"
//             placeholder="Email*"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="full-input"
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password*"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             className="full-input"
//           />

//           <input
//             type="password"
//             name="confirm"
//             placeholder="Confirm Password*"
//             value={formData.confirm}
//             onChange={handleChange}
//             required
//             className="full-input"
//           />

//           <button type="submit" className="signup-btn">SIGN UP</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;


import React, { useState } from "react";
const SignUp = () => {
  const [role, setRole] = useState("seller"); // default role
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
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form Submitted:", formData);
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirm) {
      alert("Passwords do not match");
      return;
    }
    try {
      const payload = {
        firstName: formData.first,
        lastName: formData.last,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirm
      };
      // :point_down: Decide API endpoint based on selected role
      const endpoint =
        role === "seller"
          ? `${process.env.REACT_APP_BACKEND_URL}/api/sellers/signup`
          : `${process.env.REACT_APP_BACKEND_URL}/api/agents/signup`;
      // Example: For seller signup
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        alert("Signup successful!");
        // navigate to dashboard if needed
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Signup failed. Try again.");
    }
  };
  return (
    <div className="signup-main">
      <h2 className="signup-heading">Let's get started !</h2>
      <p className="signup-subtitle">
        It is a long established fact that a reader will be
      </p>
      <div className="signup-card">
        <h3 className="signup-title">Sign Up</h3>
        {/* Role Selector */}
        <div className="role-select">
            <input
              type="radio"
              name="role"
              value="seller"
              checked={role === "seller"}
              onChange={() => setRole("seller")}
            />
            Seller
            <input
              type="radio"
              name="role"
              value="agent"
              checked={role === "agent"}
              onChange={() => setRole("agent")}
            />
            Agent
        </div>
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