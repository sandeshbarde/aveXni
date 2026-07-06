import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import "./Modal.css";

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
  closeOnOverlay = true,
  showCloseButton = true,
}) {
  if (!isOpen) return null;

  const handleOverlayClick = () => {
    if (closeOnOverlay) {
      onClose?.();
    }
  };

  return (
    <AnimatePresence>

      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleOverlayClick}
      >

        <motion.div
          className={`modal modal-${size}`}
          initial={{
            opacity: 0,
            scale: 0.9,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
            y: 40,
          }}
          transition={{
            duration: 0.25,
          }}
          onClick={(e) => e.stopPropagation()}
        >

          {(title || showCloseButton) && (

            <div className="modal-header">

              {title && (
                <h2>{title}</h2>
              )}

              {showCloseButton && (

                <button
                  className="modal-close"
                  onClick={onClose}
                  type="button"
                >

                  <X size={22} />

                </button>

              )}

            </div>

          )}

          <div className="modal-body">

            {children}

          </div>

        </motion.div>

      </motion.div>

    </AnimatePresence>
  );
}