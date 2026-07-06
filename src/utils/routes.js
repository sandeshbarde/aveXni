/**
 * Application Routes
 */

export const ROUTES = {
  // Public Pages
  HOME: "/",
  ABOUT: "/about",
  GALLERY: "/gallery",
  PRICING: "/pricing",
  ORDER: "/order",
  TRACK_ORDER: "/track-order",
  CONTACT: "/contact",

  // Authentication
  LOGIN: "/login",
  REGISTER: "/register",

  // Dashboard
  DASHBOARD: "/dashboard",
  DASHBOARD_ORDERS: "/dashboard/orders",
  DASHBOARD_GALLERY: "/dashboard/gallery",
  DASHBOARD_CUSTOMERS: "/dashboard/customers",
  DASHBOARD_SETTINGS: "/dashboard/settings",

  // User
  PROFILE: "/profile",
  MY_ORDERS: "/my-orders",

  // Errors
  NOT_FOUND: "*",
};

/**
 * Navigation Menu
 */

export const NAVIGATION = [
  {
    name: "Home",
    path: ROUTES.HOME,
  },
  {
    name: "Gallery",
    path: ROUTES.GALLERY,
  },
  {
    name: "Pricing",
    path: ROUTES.PRICING,
  },
  {
    name: "Order",
    path: ROUTES.ORDER,
  },
  {
    name: "Track Order",
    path: ROUTES.TRACK_ORDER,
  },
  {
    name: "About",
    path: ROUTES.ABOUT,
  },
  {
    name: "Contact",
    path: ROUTES.CONTACT,
  },
];

/**
 * Dashboard Sidebar
 */

export const DASHBOARD_ROUTES = [
  {
    name: "Dashboard",
    path: ROUTES.DASHBOARD,
  },
  {
    name: "Orders",
    path: ROUTES.DASHBOARD_ORDERS,
  },
  {
    name: "Gallery",
    path: ROUTES.DASHBOARD_GALLERY,
  },
  {
    name: "Customers",
    path: ROUTES.DASHBOARD_CUSTOMERS,
  },
  {
    name: "Settings",
    path: ROUTES.DASHBOARD_SETTINGS,
  },
];

/**
 * Footer Links
 */

export const FOOTER_LINKS = [
  {
    title: "Home",
    path: ROUTES.HOME,
  },
  {
    title: "Gallery",
    path: ROUTES.GALLERY,
  },
  {
    title: "Order",
    path: ROUTES.ORDER,
  },
  {
    title: "Track Order",
    path: ROUTES.TRACK_ORDER,
  },
  {
    title: "Contact",
    path: ROUTES.CONTACT,
  },
];

/**
 * Auth Routes
 */

export const AUTH_ROUTES = [
  ROUTES.LOGIN,
  ROUTES.REGISTER,
];

/**
 * Protected Routes
 */

export const PROTECTED_ROUTES = [
  ROUTES.DASHBOARD,
  ROUTES.DASHBOARD_ORDERS,
  ROUTES.DASHBOARD_GALLERY,
  ROUTES.DASHBOARD_CUSTOMERS,
  ROUTES.DASHBOARD_SETTINGS,
  ROUTES.MY_ORDERS,
  ROUTES.PROFILE,
];

export default ROUTES;