import { motion } from "framer-motion";
import {
  Truck,
  ShieldCheck,
  Gift,
  Star,
  Clock,
  Image,
  Frame,
  Palette,
} from "lucide-react";

import "./Features.css";

const features = [
  {
    id: 1,
    icon: Palette,
    title: "100% Handmade Artwork",
    description:
      "Every portrait is individually handcrafted by skilled artists, capturing every detail with precision and artistic excellence.",
  },
  {
    id: 2,
    icon: Truck,
    title: "Safe Worldwide Delivery",
    description:
      "Professionally packed and securely shipped worldwide.",
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "100% Secure Payments",
    description:
      "Safe and encrypted payment experience.",
  },
  {
    id: 4,
    icon: Frame,
    title: "Premium Wooden Frames",
    description:
      "Elegant handcrafted premium frames.",
  },
  {
    id: 5,
    icon: Image,
    title: "Museum Quality Finish",
    description:
      "Premium materials for lasting quality.",
  },
  {
    id: 6,
    icon: Clock,
    title: "Fast Order Processing",
    description:
      "Quick artwork processing and regular updates.",
  },
  {
    id: 7,
    icon: Gift,
    title: "Perfect Gift",
    description:
      "Perfect for birthdays, weddings and anniversaries.",
  },
  {
    id: 8,
    icon: Star,
    title: "Trusted by Customers",
    description:
      "Loved by hundreds of happy customers.",
  },
];

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span>WHY CHOOSE AVEXNI</span>

          <h2>
            Crafted with Passion <span>Designed to Last Forever</span>
          </h2>

          <p>
            Every portrait is handmade with premium materials and exceptional
            craftsmanship.
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.id}
                className="feature-card"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
              >
                <div className="feature-icon">
                  <Icon size={38} />
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

                <div className="feature-number">
                  {String(feature.id).padStart(2, "0")}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}