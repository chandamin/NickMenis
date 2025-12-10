// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";  
// import axios from "axios";

// // const backendUrl = import.meta.env.VITE_BACKEND_URL;
// // const backendUrl = process.env.VITE_BACKEND_URL;


// const Login = () => {
//   const backendUrl = process.env.REACT_APP_BACKEND_URL;
//   console.log(backendUrl);
//   const navigate = useNavigate();
//   const [loading,setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // const handleSubmit = async(e) => {
//   //   e.preventDefault();

//   //   console.log("Login Data:", formData);
//   //   setLoading(true);

//   //   try {
//   //     const res = await axios.post(`${backendUrl}/api/users/admin`, formData);

//   //     if (res.data.success) {
//   //       // Save token to localStorage
//   //       localStorage.setItem("token", res.data.token);
//   //       localStorage.setItem("isAdmin", "true");

//   //       // Redirect to dashboard
//   //       navigate("/admin");
//   //     } else {
//   //       alert(res.data.message || "Login failed");
//   //     }
//   //   } catch (err) {
//   //     alert(err.response?.data?.message || "Invalid login credentials");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       let res;

//       // 1️⃣ Try admin login
//       try {
//         res = await axios.post(`${backendUrl}/api/users/admin`, formData);
//         if (res.data.success) {
//           localStorage.setItem("token", res.data.token);
//           localStorage.setItem("role", "admin");
//           navigate("/admin");
//           return;
//         }
//       } catch {}

//       // 2️⃣ Try seller login
//       try {
//         res = await axios.post(`${backendUrl}/api/sellers/login`, formData);
//         if (res.data.success) {
//           localStorage.setItem("token", res.data.token);
//           localStorage.setItem("role", "seller");
//           navigate("/sellers"); // your seller page
//           return;
//         }
//       } catch {}

//       // 3️⃣ Try agent login
//       try {
//         res = await axios.post(`${backendUrl}/api/agents/login`, formData);
//         if (res.data.success) {
//           localStorage.setItem("token", res.data.token);
//           localStorage.setItem("role", "agent");
//           navigate("/agent"); // your agent page
//           return;
//         }
//       } catch {}

//       alert("Invalid credentials for any role");

//     } catch (err) {
//       console.error(err);
//       alert(err.response?.data?.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-main">
//       <h2 className="login-heading">Login To Your Account</h2>

//       <div className="login-card">
//         <h3 className="login-title">Sign In</h3>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email*"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password*"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />

//           <div className="forgot-text">
//             <Link to="/forgot-password">Forgot password?</Link>
//           </div>

//           {/* <Link to="/dashboard">
//             <button type="submit" className="login-btn">SIGN IN</button>
//           </Link> */}

//           <button type="submit" className="login-btn" disabled={loading}>
//             {loading ? "Signing in..." : "SIGN IN"}
//           </button>
//         </form>

//         <p className="create-account">
//           <Link to="/signup">CREATE ACCOUNT</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// const backendUrl = import.meta.env.VITE_BACKEND_URL;
// const backendUrl = process.env.VITE_BACKEND_URL;
const Login = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  console.log(backendUrl);
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // const handleSubmit = async(e) => {
  //   e.preventDefault();
  //   console.log("Login Data:", formData);
  //   setLoading(true);
  //   try {
  //     const res = await axios.post(`${backendUrl}/api/users/admin`, formData);
  //     if (res.data.success) {
  //       // Save token to localStorage
  //       localStorage.setItem("token", res.data.token);
  //       localStorage.setItem("isAdmin", "true");
  //       // Redirect to dashboard
  //       navigate("/admin");
  //     } else {
  //       alert(res.data.message || "Login failed");
  //     }
  //   } catch (err) {
  //     alert(err.response?.data?.message || "Invalid login credentials");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let res;
      // :one: Try admin login
      try {
        res = await axios.post(`${backendUrl}/api/users/admin`, formData);
        if (res.data.success) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("role", "admin");
          navigate("/admin");
          return;
        }
      } catch {}
      // :two: Try seller login
      try {
        res = await axios.post(`${backendUrl}/api/sellers/login`, formData);
        if (res.data.success) {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("role", res.data.role);
          navigate("/sellers-admin"); // your seller page
          return;
        }
      } catch {}
      // :three: Try agent login
      try {
        res = await axios.post(`${backendUrl}/api/agents/login`, formData);
        if (res.data.success) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("role", res.data.role);
          navigate("/agent-dashboard"); // your agent page
          return;
        }
      } catch {}
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
          {/* <Link to="/dashboard">
            <button type="submit" className="login-btn">SIGN IN</button>
          </Link> */}
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
