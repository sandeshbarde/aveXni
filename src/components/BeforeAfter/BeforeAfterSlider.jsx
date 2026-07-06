import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
}) {
  const containerRef = useRef(null);

  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updateSlider = (clientX) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    let value =
      ((clientX - rect.left) / rect.width) * 100;

    value = Math.max(0, Math.min(100, value));

    setPosition(value);
  };

  const handleMouseDown = () => {
    setDragging(true);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    updateSlider(e.clientX);
  };

  const handleTouchMove = (e) => {
    updateSlider(e.touches[0].clientX);
  };

  return (
    <motion.div
      ref={containerRef}
      className="before-after-slider"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
    >

      {/* Before */}

      <img
        src={beforeImage}
        alt={beforeLabel}
        className="before-image"
      />

      {/* After */}

      <div
        className="after-image-wrapper"
        style={{
          width: `${position}%`,
        }}
      >

        <img
          src={afterImage}
          alt={afterLabel}
          className="after-image"
        />

      </div>

      {/* Labels */}

      <div className="before-label">
        {beforeLabel}
      </div>

      <div className="after-label">
        {afterLabel}
      </div>

      {/* Slider */}

      <div
        className="slider-divider"
        style={{
          left: `${position}%`,
        }}
      >

        <button
          type="button"
          className="slider-handle"
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >

          <MoveHorizontal size={26} />

        </button>

      </div>

    </motion.div>
  );
}