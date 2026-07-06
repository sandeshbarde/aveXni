import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context";

/**
 * Protected Route
 *
 * Only authenticated users can access
 * the wrapped component.
 */

export default function ProtectedRoute({
  children,
}) {
  const {
    user,
    loading,
    isAuthenticated,
  } = useAuth();

  const location = useLocation();

  // Show loading while checking auth
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

  // Not logged in
  if (!isAuthenticated || !user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{
          from: location,
        }}
      />
    );
  }

  // Logged in
  return children;
}