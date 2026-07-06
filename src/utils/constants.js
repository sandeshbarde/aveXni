/* ==========================================
   App
========================================== */

export const APP_NAME = "aveXni";

export const APP_TAGLINE =
  "Handcrafted Memories, Drawn Forever";

export const APP_VERSION = "1.0.0";

/* ==========================================
   Contact
========================================== */

export const COMPANY = {
  name: "aveXni",

  phone: "+91 7058298917",

  whatsapp: "917058298917",

  email: "aveshdhakare@gmail.com",

  address: "Pune, Maharashtra, India",

  website: "https://avexni.com",
};

/* ==========================================
   Social Media
========================================== */

export const SOCIAL_LINKS = {
  instagram1:
    "https://instagram.com/rambhakt_d_aavesha",

  instagram2:
    "https://instagram.com/artist_d_aavesha",

  whatsapp:
    "https://wa.me/917058298917",

  email:
    "mailto:aveshdhakare@gmail.com",
};

/* ==========================================
   Navigation
========================================== */

export const NAV_LINKS = [
  {
    id: 1,
    label: "Home",
    path: "/",
  },
  {
    id: 2,
    label: "Gallery",
    path: "/gallery",
  },
  {
    id: 3,
    label: "About",
    path: "/about",
  },
  {
    id: 4,
    label: "Order",
    path: "/order",
  },
  {
    id: 5,
    label: "Track Order",
    path: "/track-order",
  },
  {
    id: 6,
    label: "Contact",
    path: "/contact",
  },
];

/* ==========================================
   Portrait Types
========================================== */

export const PORTRAIT_TYPES = [
  "Single Portrait",
  "Couple Portrait",
  "Family Portrait",
  "Pet Portrait",
  "Wedding Portrait",
  "Baby Portrait",
  "Memorial Portrait",
  "Custom Portrait",
];

/* ==========================================
   Portrait Sizes
========================================== */

export const PORTRAIT_SIZES = [
  {
    label: "A4",
    price: 999,
  },
  {
    label: "A3",
    price: 1999,
  },
  {
    label: "A2",
    price: 3499,
  },
  {
    label: "A1",
    price: 5999,
  },
];

/* ==========================================
   Order Status
========================================== */

export const ORDER_STATUS = [
  "Order Received",
  "Sketch Started",
  "In Progress",
  "Quality Check",
  "Packed",
  "Shipped",
  "Delivered",
];

/* ==========================================
   Payment Methods
========================================== */

export const PAYMENT_METHODS = [
  "UPI",
  "Credit Card",
  "Debit Card",
  "Net Banking",
  "Cash on Delivery",
];

/* ==========================================
   Theme
========================================== */

export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
};

/* ==========================================
   Currency
========================================== */

export const CURRENCY = "INR";

export const CURRENCY_SYMBOL = "₹";

/* ==========================================
   Gallery Categories
========================================== */

export const GALLERY_CATEGORIES = [
  "All",
  "Single",
  "Couple",
  "Family",
  "Pet",
  "Wedding",
  "Baby",
  "Custom",
];

/* ==========================================
   Animation
========================================== */

export const ANIMATION_DURATION = 0.4;

export const SCROLL_OFFSET = 80;

/* ==========================================
   Pagination
========================================== */

export const ITEMS_PER_PAGE = 9;

/* ==========================================
   Local Storage Keys
========================================== */

export const STORAGE_KEYS = {
  THEME: "theme",
  USER: "user",
  TOKEN: "token",
  CART: "cart",
  ORDERS: "orders",
  GALLERY: "gallery",
};

/* ==========================================
   Default Export
========================================== */

export default {
  APP_NAME,
  APP_TAGLINE,
  APP_VERSION,
  COMPANY,
  SOCIAL_LINKS,
  NAV_LINKS,
  PORTRAIT_TYPES,
  PORTRAIT_SIZES,
  ORDER_STATUS,
  PAYMENT_METHODS,
  THEMES,
  CURRENCY,
  CURRENCY_SYMBOL,
  GALLERY_CATEGORIES,
  ANIMATION_DURATION,
  SCROLL_OFFSET,
  ITEMS_PER_PAGE,
  STORAGE_KEYS,
};