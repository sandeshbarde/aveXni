import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import "./WhatsAppButton.css";

export default function WhatsAppButton({
  phone = "917058298917",
  message = "Hello! I'm interested in ordering a handmade portrait.",
}) {
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      whileHover={{
        scale: 1.08,
        rotate: 5,
      }}
      whileTap={{
        scale: 0.95,
      }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={30} />
    </motion.a>
  );
}