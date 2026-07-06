import { useState, useEffect } from "react";

export default function useWindowSize() {
  const getWindowSize = () => {
    if (typeof window === "undefined") {
      return {
        width: 0,
        height: 0,
      };
    }

    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

  const [windowSize, setWindowSize] = useState(
    getWindowSize
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getWindowSize());
    };

    window.addEventListener("resize", handleResize);

    // Set initial size
    handleResize();

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  return windowSize;
}