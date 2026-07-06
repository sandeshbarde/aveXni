import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Button from "./Button";
import "./Success.css";

export default function Success({
  title = "Success!",
  description = "Your request has been completed successfully.",
  image,
  buttonText,
  onButtonClick,
}) {
  return (
    <motion.div
      className="success-state"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      {image ? (
        <img
          src={image}
          alt={title}
          className="success-image"
        />
      ) : (
        <div className="success-icon">
          <CheckCircle size={80} />
        </div>
      )}

      <h2>{title}</h2>

      <p>{description}</p>

      {buttonText && (
        <Button
          variant="primary"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      )}
    </motion.div>
  );
}