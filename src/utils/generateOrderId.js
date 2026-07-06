/**
 * Generates a unique order ID.
 *
 * Format:
 * AVX-YYYYMMDD-HHMMSS-XXXX
 *
 * Example:
 * AVX-20260703-143522-4821
 */

export default function generateOrderId(prefix = "AVX") {
  const now = new Date();

  const year = now.getFullYear();

  const month = String(now.getMonth() + 1).padStart(2, "0");

  const day = String(now.getDate()).padStart(2, "0");

  const hours = String(now.getHours()).padStart(2, "0");

  const minutes = String(now.getMinutes()).padStart(2, "0");

  const seconds = String(now.getSeconds()).padStart(2, "0");

  const random = Math.floor(
    1000 + Math.random() * 9000
  );

  return `${prefix}-${year}${month}${day}-${hours}${minutes}${seconds}-${random}`;
}