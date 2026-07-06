import { useState } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

import "./BeforeAfter.css";

export default function BeforeAfter() {
  const [position, setPosition] = useState(50);

  const updatePosition = (clientX, container) => {
    const rect = container.getBoundingClientRect();

    const x = clientX - rect.left;

    const percentage = (x / rect.width) * 100;

    setPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseMove = (e) => {
    updatePosition(e.clientX, e.currentTarget);
  };

  const handleTouchMove = (e) => {
    updatePosition(e.touches[0].clientX, e.currentTarget);
  };

  return (
    <section className="before-after-section" id="before-after">
      <div className="container">

        {/* Heading */}

        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>BEFORE & AFTER</span>

          <h2>
            From <span>Photo</span> To Handmade Art
          </h2>

          <p>
            Move the slider to compare the original photograph with the
            finished handmade portrait.
          </p>
        </motion.div>

        {/* Compare Slider */}

        <motion.div
          className="compare-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >

          {/* BEFORE IMAGE */}

          <img
            src="/images/before-after/before-01.webp"
            alt="Original Photo"
            className="before-image"
            draggable="false"
          />

          {/* AFTER IMAGE */}

          <div
            className="after-wrapper"
            style={{ width: `${position}%` }}
          >
            <img
              src="/images/before-after/after-01.webp"
              alt="Handmade Portrait"
              className="after-image"
              draggable="false"
            />
          </div>

          {/* Divider */}

          <div
            className="slider-line"
            style={{ left: `${position}%` }}
          >
            <div className="slider-button">
              <MoveHorizontal size={22} />
            </div>
          </div>

        </motion.div>

        {/* Bottom Cards */}

        <div className="compare-info">

          <div className="compare-card">
            <h3>Original Photo</h3>

            <p>
              Upload your favourite photo in high quality.
            </p>
          </div>

          <div className="compare-card">
            <h3>Handmade Portrait</h3>

            <p>
              Our artists recreate every detail completely by hand.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}