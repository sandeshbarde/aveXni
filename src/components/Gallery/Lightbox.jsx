import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import "./Gallery.css";

export default function Lightbox({
  images = [],
  currentIndex = 0,
  isOpen = false,
  onClose,
  onNext,
  onPrev,
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case "Escape":
          onClose?.();
          break;
        case "ArrowRight":
          onNext?.();
          break;
        case "ArrowLeft":
          onPrev?.();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || images.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="lightbox-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <button
          className="lightbox-close"
          onClick={onClose}
        >
          <X size={32} />
        </button>

        <button
          className="lightbox-nav left"
          onClick={(e) => {
            e.stopPropagation();
            onPrev?.();
          }}
        >
          <ChevronLeft size={36} />
        </button>

        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Gallery ${currentIndex + 1}`}
          className="lightbox-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        />

        <button
          className="lightbox-nav right"
          onClick={(e) => {
            e.stopPropagation();
            onNext?.();
          }}
        >
          <ChevronRight size={36} />
        </button>

        <div className="lightbox-counter">
          {currentIndex + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}