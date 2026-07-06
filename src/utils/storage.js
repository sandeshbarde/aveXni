/**
 * Local Storage Utility
 */

const storage = {
  /**
   * Get Item
   */
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);

      if (item === null) {
        return defaultValue;
      }

      return JSON.parse(item);
    } catch (error) {
      console.error(
        `Storage Get Error (${key}):`,
        error
      );

      return defaultValue;
    }
  },

  /**
   * Set Item
   */
  set(key, value) {
    try {
      localStorage.setItem(
        key,
        JSON.stringify(value)
      );

      return true;
    } catch (error) {
      console.error(
        `Storage Set Error (${key}):`,
        error
      );

      return false;
    }
  },

  /**
   * Remove Item
   */
  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error(
        `Storage Remove Error (${key}):`,
        error
      );

      return false;
    }
  },

  /**
   * Clear Storage
   */
  clear() {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error(
        `Storage Clear Error:`,
        error
      );

      return false;
    }
  },
};


export default storage;
