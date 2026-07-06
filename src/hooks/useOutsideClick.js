import { useEffect } from "react";

/**
 * Detects clicks outside of a referenced element.
 *
 * @param {React.RefObject} ref
 * @param {Function} callback
 */

export default function useOutsideClick(ref, callback) {
  useEffect(() => {
    const handleClick = (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        callback(event);
      }
    };

    const handleTouch = (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        callback(event);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClick
    );

    document.addEventListener(
      "touchstart",
      handleTouch
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClick
      );

      document.removeEventListener(
        "touchstart",
        handleTouch
      );
    };
  }, [ref, callback]);
}