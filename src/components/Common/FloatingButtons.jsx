import { MessageCircle, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import "./FloatingButtons.css";

export default function FloatingButtons({
  phone = "+917058298917",
  message = "Hello! I want to order a handmade portrait.",
}) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="floating-buttons">

      {/* WhatsApp */}

      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp-btn"
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.95,
        }}
        aria-label="WhatsApp"
      >
        <MessageCircle size={26} />
      </motion.a>

      {/* Scroll To Top */}

      <AnimatePresence>

        {showTop && (
          <motion.button
            type="button"
            className="floating-btn top-btn"
            onClick={scrollTop}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 30,
            }}
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            <ArrowUp size={24} />
          </motion.button>
        )}

      </AnimatePresence>

    </div>
  );
}