/**
 * Capitalize first letter
 */
export function capitalize(text = "") {
  if (!text) return "";

  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Capitalize every word
 */
export function titleCase(text = "") {
  return text
    .toLowerCase()
    .split(" ")
    .map(capitalize)
    .join(" ");
}

/**
 * Slugify text
 */
export function slugify(text = "") {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

/**
 * Truncate text
 */
export function truncate(text = "", length = 100) {
  if (text.length <= length) return text;

  return `${text.substring(0, length)}...`;
}

/**
 * Random ID
 */
export function randomId(length = 8) {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
}

/**
 * Sleep
 */
export function sleep(ms = 500) {
  return new Promise((resolve) =>
    setTimeout(resolve, ms)
  );
}

/**
 * Copy text
 */
export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

/**
 * Scroll to top
 */
export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

/**
 * Scroll to element
 */
export function scrollToElement(id) {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

/**
 * Is Empty
 */
export function isEmpty(value) {
  return (
    value === null ||
    value === undefined ||
    value === "" ||
    (Array.isArray(value) &&
      value.length === 0)
  );
}

/**
 * Clamp Number
 */
export function clamp(
  value,
  min,
  max
) {
  return Math.min(
    Math.max(value, min),
    max
  );
}

/**
 * Random Number
 */
export function randomNumber(
  min,
  max
) {
  return (
    Math.floor(
      Math.random() * (max - min + 1)
    ) + min
  );
}

/**
 * Random Array Item
 */
export function randomItem(array = []) {
  if (!array.length) return null;

  return array[
    Math.floor(
      Math.random() * array.length
    )
  ];
}

/**
 * Remove Duplicate Objects
 */
export function uniqueBy(array, key) {
  return [
    ...new Map(
      array.map((item) => [
        item[key],
        item,
      ])
    ).values(),
  ];
}

/**
 * Group Array
 */
export function groupBy(array, key) {
  return array.reduce((acc, item) => {
    const group = item[key];

    if (!acc[group]) {
      acc[group] = [];
    }

    acc[group].push(item);

    return acc;
  }, {});
}

/**
 * Sort By Property
 */
export function sortBy(
  array,
  key,
  direction = "asc"
) {
  return [...array].sort((a, b) => {
    if (direction === "asc") {
      return a[key] > b[key] ? 1 : -1;
    }

    return a[key] < b[key] ? 1 : -1;
  });
}

/**
 * Deep Clone
 */
export function deepClone(data) {
  return structuredClone(data);
}

/**
 * Generate Order ID
 */
export function generateOrderId() {
  return `AVX-${Date.now()}`;
}

/**
 * Currency
 */
export function formatPrice(price) {
  return new Intl.NumberFormat(
    "en-IN",
    {
      style: "currency",
      currency: "INR",
    }
  ).format(price);
}

/**
 * Date
 */
export function formatDate(date) {
  return new Intl.DateTimeFormat(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  ).format(new Date(date));
}

/**
 * Phone
 */
export function formatPhone(phone) {
  return phone.replace(
    /(\d{5})(\d{5})/,
    "$1 $2"
  );
}

/**
 * Email Validation
 */
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    email
  );
}

/**
 * Phone Validation (India)
 */
export function isValidPhone(phone) {
  return /^[6-9]\d{9}$/.test(phone);
}

/**
 * Default Export
 */
const helpers = {
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
  generateOrderId,
  formatPrice,
  formatDate,
  formatPhone,
  isValidEmail,
  isValidPhone,
};

export default helpers;
