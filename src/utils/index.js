// API
export { default as api } from "./api";

// Constants
export * from "./constants";

// Helpers
export { default as helpers } from "./helpers";

export {
  capitalize,
  titleCase,
  slugify,
  truncate,
  randomId,
  sleep,
  copyToClipboard,
  scrollToTop,
  scrollToElement,
  isEmpty,
  clamp,
  randomNumber,
  randomItem,
  uniqueBy,
  groupBy,
  sortBy,
  deepClone,
  generateOrderId as generateOrderIdHelper,
  formatPrice,
  formatDate as formatDateHelper,
  formatPhone,
  isValidEmail,
  isValidPhone,
} from "./helpers";

// Formatters
export { default as formatCurrency } from "./formatCurrency";
export { default as formatDate } from "./formatDate";

// Validators
export { default as validators } from "./validators";

export {
  required,
  email,
  phone,
  password,
  confirmPassword,
  name,
  number,
  minLength,
  maxLength,
  url,
  image,
  fileSize,
  validateOrder,
  validateLogin,
  validateRegister,
} from "./validators";

// Storage
export { default as storage } from "./storage";

// Utilities
export { default as generateOrderId } from "./generateOrderId";
export { default as debounce } from "./debounce";
export { default as downloadImage } from "./downloadImage";
export { default as uploadImage } from "./uploadImage";

// Routes
export {
  ROUTES,
  NAVIGATION,
  DASHBOARD_ROUTES,
  FOOTER_LINKS,
  AUTH_ROUTES,
  PROTECTED_ROUTES,
} from "./routes";