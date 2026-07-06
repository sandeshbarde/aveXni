import { useState } from "react";
import { motion } from "framer-motion";

import GalleryCard from "./GalleryCard";
import Lightbox from "./Lightbox";

import "./Gallery.css";

export default function MasonryGallery({ images = [] }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Open Lightbox
  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  // Close Lightbox
  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  // Next Image
  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  // Previous Image
  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // Empty Gallery
  if (!images.length) {
    return (
      <div className="gallery-empty">
        <h3>No Images Available</h3>
        <p>Our latest artwork will be added soon.</p>
      </div>
    );
  }

  return (
    <>
      <motion.div
        className="masonry-gallery"
        layout
        transition={{
          layout: {
            duration: 0.4,
          },
        }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            layout
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.45,
              delay: index * 0.05,
              ease: "easeOut",
            }}
          >
            <GalleryCard
              image={image}
              index={index}
              onClick={() => openLightbox(index)}
            />
          </motion.div>
        ))}
      </motion.div>

      <Lightbox
        images={images}
        currentIndex={selectedIndex ?? 0}
        isOpen={selectedIndex !== null}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
}