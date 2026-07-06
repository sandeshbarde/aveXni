/**
 * Debounce Utility
 *
 * Delays the execution of a function until
 * after the specified delay has elapsed.
 *
 * @param {Function} callback
 * @param {number} delay
 * @returns {Function}
 */

export default function debounce(
  callback,
  delay = 300
) {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}