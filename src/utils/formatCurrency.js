/**
 * Format currency values.
 *
 * @param {number|string} amount
 * @param {string} currency
 * @param {string} locale
 * @returns {string}
 */

export default function formatCurrency(
  amount = 0,
  currency = "INR",
  locale = "en-IN"
) {
  const value = Number(amount);

  if (Number.isNaN(value)) {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(0);
  }

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}