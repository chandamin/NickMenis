

// import { Navigate, Outlet } from 'react-router-dom';

// const ProtectedRoute = ({ requiredRole }) => {
//   const token = localStorage.getItem('token');
//   const role = localStorage.getItem('role'); // Check the user's role

//   // Verify token expiration
//   const isTokenExpired = () => {
//     if (!token) return true;
//     try {
//       const tokenData = JSON.parse(atob(token.split('.')[1]));
//       return tokenData.exp * 1000 < Date.now();
//     } catch (error) {
//       console.error('Error verifying token:', error);
//       return true;
//     }
//   };

//   // Check if the token exists, the role matches, and the token is valid
//   const isAuthenticated = token && role && !isTokenExpired();

//   // Role-based check (can be admin, seller, agent, etc.)
//   const isRoleMatch = requiredRole ? role === requiredRole : true;

//   if (!isAuthenticated || !isRoleMatch) {
//     // Clean up invalid or expired token from localStorage
//     localStorage.removeItem('token');
//     localStorage.removeItem('role');
//     return <Navigate to="/login" replace />;
//   }

//   // Return Outlet for nested routes
//   return <Outlet />;
// };

// export default ProtectedRoute;


import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoute = ({ requiredRole, allowedRoles, children }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  // Check JWT expiration
  const isTokenExpired = () => {
    if (!token) return true;
    try {
      const tokenData = JSON.parse(atob(token.split(".")[1]));
      return tokenData.exp * 1000 < Date.now();
    } catch (error) {
      console.error("Invalid token:", error);
      return true;
    }
  };
  const isAuthenticated = token && role && !isTokenExpired();
  // Role check
  let isRoleMatch = false;
  if (requiredRole) {
    isRoleMatch = role === requiredRole;
  } else if (allowedRoles) {
    isRoleMatch = allowedRoles.includes(role);
  } else {
    // No role restriction
    isRoleMatch = true;
  }
  // If not authenticated or role mismatch
  if (!isAuthenticated || !isRoleMatch) {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    return <Navigate to="/login" replace />;
  }
  // Return children or Outlet for nested routes
  return children ? children : <Outlet />;
};
export default ProtectedRoute;







