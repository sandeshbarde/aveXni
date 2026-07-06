import { motion } from "framer-motion";
import {
  Ruler,
  User,
  Frame,
  CheckCircle,
} from "lucide-react";

import "./HumanScale.css";

export default function HumanScale() {
  return (
    <section className="human-scale" id="human-scale">
      <div className="container">
        <div className="human-scale-grid">

          {/* Left Image */}
          <motion.div
            className="human-scale-image"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <img
              src="/images/sizes/human-scale.webp"
              alt="Human Portrait Size Comparison"
              loading="lazy"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="human-scale-content"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <span className="section-tag">
              SIZE COMPARISON
            </span>

            <h2>
              Compare Every
              <span> Portrait Size </span>
              With Human Scale
            </h2>

            <p>
              Easily compare A4, A3, A2 and A1 portrait sizes against a
              person's height so you can confidently choose the perfect
              artwork for your home or office.
            </p>

            <div className="scale-list">

              <div className="scale-item">
                <Ruler size={20} />
                <span>True-to-life dimensions</span>
              </div>

              <div className="scale-item">
                <User size={20} />
                <span>Human height comparison</span>
              </div>

              <div className="scale-item">
                <Frame size={20} />
                <span>Frame size visualization</span>
              </div>

              <div className="scale-item">
                <CheckCircle size={20} />
                <span>Perfect wall placement guide</span>
              </div>

            </div>

            <div className="scale-buttons">

              <a href="#order" className="btn-primary">
                Order Now
              </a>

              <a href="#gallery" className="btn-outline">
                View Gallery
              </a>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}