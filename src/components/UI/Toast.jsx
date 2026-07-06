import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle,
  AlertCircle,
  AlertTriangle,
  Info,
  X,
} from "lucide-react";
import "./Toast.css";

const icons = {
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
};

export default function Toast({
  open = false,
  type = "success",
  title = "",
  message = "",
  duration = 3000,
  onClose,
}) {
  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(() => {
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [open, duration, onClose]);

  const Icon = icons[type] || CheckCircle;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={`toast toast-${type}`}
          initial={{
            opacity: 0,
            x: 80,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            x: 80,
            scale: 0.9,
          }}
          transition={{
            duration: 0.25,
          }}
        >
          <div className="toast-icon">
            <Icon size={24} />
          </div>

          <div className="toast-content">
            {title && (
              <h4>{title}</h4>
            )}

            {message && (
              <p>{message}</p>
            )}
          </div>

          <button
            className="toast-close"
            onClick={onClose}
            type="button"
          >
            <X size={18} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}