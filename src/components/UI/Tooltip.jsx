import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Tooltip.css";

export default function Tooltip({
  children,
  text,
  position = "top",
  delay = 200,
}) {
  const [visible, setVisible] = useState(false);

  let timer;

  const showTooltip = () => {
    timer = setTimeout(() => {
      setVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    clearTimeout(timer);
    setVisible(false);
  };

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}

      <AnimatePresence>
        {visible && (
          <motion.div
            className={`tooltip tooltip-${position}`}
            initial={{
              opacity: 0,
              y: position === "top" ? 8 : -8,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: position === "top" ? 8 : -8,
              scale: 0.95,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}