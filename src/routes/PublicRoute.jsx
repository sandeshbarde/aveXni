import { Navigate } from "react-router-dom";
import { useAuth } from "@/context";

/**
 * Public Route
 *
 * Prevents authenticated users from
 * accessing Login and Register pages.
 */

export default function PublicRoute({
  children,
}) {
  const {
    user,
    loading,
    isAuthenticated,
  } = useAuth();

  // Show loading while checking authentication
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

  // Already logged in
  if (isAuthenticated && user) {
    return (
      <Navigate
        to="/dashboard"
        replace
      />
    );
  }

  // Not logged in
  return children;
}