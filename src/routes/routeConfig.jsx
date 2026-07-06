import {
  Home,
  About,
  Gallery,
  Contact,
  Order,
  TrackOrder,
  Login,
  Register,
  Dashboard,
} from "@/pages";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import AdminRoute from "./AdminRoute";

export const publicRoutes = [
  { path: "/", element: <Home />, title: "Home" },
  { path: "/about", element: <About />, title: "About" },
  { path: "/gallery", element: <Gallery />, title: "Gallery" },
  { path: "/contact", element: <Contact />, title: "Contact" },
  { path: "/order", element: <Order />, title: "Order" },
  { path: "/track-order", element: <TrackOrder />, title: "Track Order" },
];

export const authRoutes = [
  {
    path: "/login",
    title: "Login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/register",
    title: "Register",
    element: (
      <PublicRoute>
        <Register />
      </PublicRoute>
    ),
  },
];

export const protectedRoutes = [
  {
    path: "/profile",
    title: "Profile",
    element: (
      <ProtectedRoute>
        <div>Profile Page</div>
      </ProtectedRoute>
    ),
  },
  {
    path: "/my-orders",
    title: "My Orders",
    element: (
      <ProtectedRoute>
        <div>My Orders Page</div>
      </ProtectedRoute>
    ),
  },
];

export const adminRoutes = [
  {
    path: "/dashboard",
    title: "Dashboard",
    element: (
      <AdminRoute>
        <Dashboard />
      </AdminRoute>
    ),
  },
];

const routes = [
  ...publicRoutes,
  ...authRoutes,
  ...protectedRoutes,
  ...adminRoutes,
];

export default routes;