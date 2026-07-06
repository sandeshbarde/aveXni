import { motion } from "framer-motion";
import "./Loader.css";

export default function Loader({
  size = "md",
  text = "Loading...",
  fullScreen = false,
}) {
  return (
    <div
      className={`loader-wrapper ${
        fullScreen ? "loader-fullscreen" : ""
      }`}
    >
      <motion.div
        className={`loader loader-${size}`}
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
      />

      {text && (
        <motion.p
          className="loader-text"
          initial={{
            opacity: 0.5,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.8,
          }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}