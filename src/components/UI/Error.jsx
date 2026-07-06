import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import Button from "./Button";
import "./Error.css";

export default function Error({
  title = "Something Went Wrong",
  description = "An unexpected error occurred.",
  image,
  buttonText = "Try Again",
  onButtonClick,
}) {
  return (
    <motion.div
      className="error-state"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      {image ? (
        <img
          src={image}
          alt={title}
          className="error-image"
        />
      ) : (
        <div className="error-icon">
          <AlertTriangle size={80} />
        </div>
      )}

      <h2>{title}</h2>

      <p>{description}</p>

      {buttonText && (
        <Button
          variant="danger"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      )}
    </motion.div>
  );
}