import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context";

/**
 * Admin Route
 *
 * Allows access only to authenticated users
 * with the "admin" role.
 */

export default function AdminRoute({
  children,
}) {
  const {
    user,
    loading,
    isAuthenticated,
  } = useAuth();

  const location = useLocation();

  // Loading while checking authentication
  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          fontSize: "1.2rem",
          fontWeight: "600",
        }}
      >
        Loading...
      </div>
    );
  }

  // User not logged in
  if (!isAuthenticated || !user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }}
      />
    );
  }

  // User is logged in but not an admin
  if (user.role !== "admin") {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  return children;
}