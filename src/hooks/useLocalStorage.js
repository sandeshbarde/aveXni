import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
  const readValue = () => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);

      return item !== null
        ? JSON.parse(item)
        : initialValue;
    } catch (error) {
      console.error("useLocalStorage:", error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState(readValue);

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function
          ? value(storedValue)
          : value;

      setStoredValue(valueToStore);

      window.localStorage.setItem(
        key,
        JSON.stringify(valueToStore)
      );
    } catch (error) {
      console.error("useLocalStorage:", error);
    }
  };

  const removeValue = () => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.error("useLocalStorage:", error);
    }
  };

  useEffect(() => {
    setStoredValue(readValue());
  }, [key]);

  return [
    storedValue,
    setValue,
    removeValue,
  ];
}