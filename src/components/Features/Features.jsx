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
    icon: <Palette size={38} />,
    title: "100% Handmade Artwork",
    description:
      "Every portrait is individually handcrafted by skilled artists, capturing every detail with precision, passion, and artistic excellence.",
  },
  {
    id: 2,
    icon: <Truck size={38} />,
    title: "Safe Worldwide Delivery",
    description:
      "Professionally packed and securely shipped to ensure your artwork arrives safely anywhere in India and across the globe.",
  },
  {
    id: 3,
    icon: <ShieldCheck size={38} />,
    title: "100% Secure Payments",
    description:
      "Shop confidently with trusted payment gateways and advanced encryption that keeps every transaction safe and secure.",
  },
  {
    id: 4,
    icon: <Frame size={38} />,
    title: "Premium Wooden Frames",
    description:
      "Elegant, handcrafted frames designed to beautifully showcase and protect your portrait for years to come.",
  },
  {
    id: 5,
    icon: <Image size={38} />,
    title: "Museum-Quality Finish",
    description:
      "Printed and crafted using premium-quality materials for exceptional clarity, durability, and timeless beauty.",
  },
  {
    id: 6,
    icon: <Clock size={38} />,
    title: "Fast Order Processing",
    description:
      "We begin working on your portrait immediately and provide regular progress updates until delivery.",
  },
  {
    id: 7,
    icon: <Gift size={38} />,
    title: "Perfect Gift for Every Occasion",
    description:
      "A meaningful keepsake for birthdays, anniversaries, weddings, Mother's Day, Father's Day, and every special celebration.",
  },
  {
    id: 8,
    icon: <Star size={38} />,
    title: "Trusted by Happy Customers",
    description:
      "Hundreds of customers have trusted AveXni to transform their precious memories into timeless works of art.",
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
            Crafted with Passion,
            <span> Designed to Last Forever</span>
          </h2>

          <p>
            At AveXni, every portrait is more than artwork—it's a handcrafted
            memory created with premium materials, exceptional craftsmanship,
            and a commitment to preserving your most meaningful moments.
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="feature-card"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              <div className="feature-number">
                {String(feature.id).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}