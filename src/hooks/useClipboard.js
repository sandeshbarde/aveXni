import { useState, useCallback } from "react";

/**
 * Custom hook for copying text to the clipboard.
 *
 * @returns {{
 *   copied: boolean,
 *   copy: Function
 * }}
 */

export default function useClipboard(
  timeout = 2000
) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    async (text) => {
      if (!text) return false;

      try {
        if (
          navigator.clipboard &&
          window.isSecureContext
        ) {
          await navigator.clipboard.writeText(text);
        } else {
          // Fallback
          const textArea =
            document.createElement("textarea");

          textArea.value = text;

          textArea.style.position = "fixed";
          textArea.style.left = "-9999px";

          document.body.appendChild(textArea);

          textArea.focus();
          textArea.select();

          document.execCommand("copy");

          document.body.removeChild(textArea);
        }

        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, timeout);

        return true;
      } catch (error) {
        console.error(
          "Clipboard copy failed:",
          error
        );

        setCopied(false);

        return false;
      }
    },
    [timeout]
  );

  return {
    copied,
    copy,
  };
}