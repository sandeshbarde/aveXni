import { motion } from "framer-motion";
import "./Spinner.css";

export default function Spinner({
  size = "md",
  color = "gold",
  text = "",
  center = true,
}) {
  return (
    <div
      className={`spinner-wrapper ${
        center ? "spinner-center" : ""
      }`}
    >
      <motion.div
        className={`spinner spinner-${size} spinner-${color}`}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 1,
        }}
      />

      {text && (
        <p className="spinner-text">
          {text}
        </p>
      )}
    </div>
  );
}