import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ requiredRole, allowedRoles, children }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const isTokenExpired = () => {
    if (!token) return true;
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.exp * 1000 < Date.now();
    } catch (err) {
      console.error("Invalid token", err);
      return true;
    }
  };

  const isAuthenticated = token && role && !isTokenExpired();

  // Role check
  let isRoleMatch = true;

  if (requiredRole) {
    isRoleMatch = role === requiredRole;
  } else if (allowedRoles) {
    isRoleMatch = allowedRoles.includes(role);
  }

  // If not authenticated or role mismatch
  if (!isAuthenticated || !isRoleMatch) {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    return <Navigate to="/login" replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
