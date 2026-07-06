import { motion } from "framer-motion";
import { Home, Eye, Frame, ArrowRight } from "lucide-react";

import "./RoomPreview.css";

export default function RoomPreview() {
  return (
    <section className="room-preview" id="preview">
      <div className="container">

        {/* Heading */}

        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span>LIVE PREVIEW</span>

          <h2>
            See Your Portrait
            <span> On The Wall</span>
          </h2>

          <p>
            Compare different portrait sizes with a realistic room preview
            before placing your order.
          </p>
        </motion.div>

        <div className="preview-grid">

          {/* Left */}

          <motion.div
            className="preview-image"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/sizes/room-preview.webp"
              alt="Room Preview"
              loading="lazy"
            />
          </motion.div>

          {/* Right */}

          <motion.div
            className="preview-content"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <div className="preview-item">
              <Home size={22} />
              <div>
                <h4>Real Room Simulation</h4>
                <p>
                  Visualize your portrait exactly as it will look on your wall.
                </p>
              </div>
            </div>

            <div className="preview-item">
              <Eye size={22} />
              <div>
                <h4>Perfect Size Selection</h4>
                <p>
                  Easily compare A4, A3, A2 and A1 portrait sizes.
                </p>
              </div>
            </div>

            <div className="preview-item">
              <Frame size={22} />
              <div>
                <h4>Frame Visualization</h4>
                <p>
                  Preview wooden frames before placing your order.
                </p>
              </div>
            </div>

            <a href="#order" className="preview-btn">
              Order Your Portrait
              <ArrowRight size={18} />
            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
}