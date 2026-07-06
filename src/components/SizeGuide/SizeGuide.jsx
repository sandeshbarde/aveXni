import { motion } from "framer-motion";
import {
  Check,
  Star,
  Ruler,
  Frame,
} from "lucide-react";

import "./SizeGuide.css";

const sizes = [
  {
    id: 1,
    name: "A4",
    dimension: "8.3 × 11.7 in",
    price: "₹700",
    image: "/images/sizes/A4.webp",
    popular: false,
  },
  {
    id: 2,
    name: "A3",
    dimension: "11.7 × 16.5 in",
    price: "1100",
    image: "/images/sizes/A3.webp",
    popular: true,
  },
  {
    id: 3,
    name: "A2",
    dimension: "16.5 × 23.4 in",
    price: "₹1500",
    image: "/images/sizes/A2.webp",
    popular: false,
  },
  {
    id: 4,
    name: "A1",
    dimension: "23.4 × 33.1 in",
    price: "₹2100",
    image: "/images/sizes/A1.webp",
    popular: false,
  },
];

export default function SizeGuide() {
  return (
    <section className="size-guide" id="sizes">

      <div className="container">

        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span>SIZE GUIDE</span>

          <h2>
            Choose The
            <span> Perfect Size</span>
          </h2>

          <p>
            Select the ideal portrait size for your wall,
            home, office or gifting purpose.
          </p>
        </motion.div>

        <div className="size-grid">

          {sizes.map((item) => (

            <motion.div
              key={item.id}
              className={`size-card ${item.popular ? "popular" : ""}`}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{
                duration: 0.35,
              }}
            >

              {item.popular && (
                <div className="popular-badge">
                  <Star size={16} />
                  <span>Most Popular</span>
                </div>
              )}

              <div className="size-image">

                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                />

              </div>

              <div className="size-content">

                <h3>{item.name}</h3>

                <div className="dimension">

                  <Ruler size={16} />

                  <span>{item.dimension}</span>

                </div>

                <div className="price">

                  {item.price}

                </div>

                <ul className="size-features">

                  <li>
                    <Check size={16} />
                    Premium Paper
                  </li>

                  <li>
                    <Check size={16} />
                    Handmade Drawing
                  </li>

                  <li>
                    <Check size={16} />
                    HD Pencil Finish
                  </li>

                  <li>
                    <Check size={16} />
                    Optional Wooden Frame
                  </li>

                  <li>
                    <Check size={16} />
                    Free Delivery
                  </li>

                </ul>

                <button
                  className="select-btn"
                  type="button"
                >
                  <Frame size={18} />
                  Select Size
                </button>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Room Preview */}

        <motion.div
          className="room-preview"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="room-text">

            <span>LIVE PREVIEW</span>

            <h2>
              See Your Portrait
              <span> On The Wall</span>
            </h2>

            <p>
              Compare different portrait sizes inside a
              realistic room before ordering.
            </p>

          </div>

          <div className="room-image">

            <img
              src="/images/sizes/room-preview.webp"
              alt="Room Preview"
              loading="lazy"
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}