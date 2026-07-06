import { useState } from "react";
import { motion } from "framer-motion";
import {
  Eye,
  ShoppingCart,
  Sparkles,
} from "lucide-react";

import "./Gallery.css";

export default function GalleryCard({
  image,
  title = "Handmade Portrait",
  onClick,
}) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="gallery-card gallery-error">
        <div className="gallery-error-content">
          <Sparkles size={40} />

          <h4>Image Not Available</h4>

          <p>Please check the image source.</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="gallery-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        onError={() => setError(true)}
      />

      <div className="gallery-overlay">

        <span className="gallery-badge">
          Handmade
        </span>

        <div className="gallery-content">

          <h3>{title}</h3>

          <p>
            Premium handmade portrait created with
            precision and artistic excellence.
          </p>

          <div className="gallery-buttons">

            <button
              className="gallery-btn primary"
              onClick={(e) => {
                e.stopPropagation();
                onClick?.();
              }}
            >
              <Eye size={18} />
              Preview
            </button>

            <button
              className="gallery-btn secondary"
              onClick={(e) => {
                e.stopPropagation();

                document
                  .getElementById("price")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
            >
              <ShoppingCart size={18} />
              Order This Style
            </button>

          </div>

        </div>

      </div>
    </motion.div>
  );
}