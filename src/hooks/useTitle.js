import { useEffect } from "react";

/**
 * Custom hook for updating the document title.
 *
 * @param {string} title
 * @param {string} defaultTitle
 */

export default function useTitle(
  title,
  defaultTitle = "aveXni | Handcrafted Memories, Drawn Forever"
) {
  useEffect(() => {
    if (title && title.trim() !== "") {
      document.title = title;
    } else {
      document.title = defaultTitle;
    }

    return () => {
      document.title = defaultTitle;
    };
  }, [title, defaultTitle]);
}