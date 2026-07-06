import { motion } from "framer-motion";
import { Inbox } from "lucide-react";
import Button from "./Button";
import "./EmptyState.css";

export default function EmptyState({
  title = "Nothing Found",
  description = "There is no data available right now.",
  image,
  icon = <Inbox size={70} />,
  buttonText,
  onButtonClick,
}) {
  return (
    <motion.div
      className="empty-state"
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
    >
      {image ? (
        <img
          src={image}
          alt={title}
          className="empty-state-image"
        />
      ) : (
        <div className="empty-state-icon">
          {icon}
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