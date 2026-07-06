import { motion } from "framer-motion";
import {
  CheckCircle,
  ShieldCheck,
  Truck,
  RefreshCw,
  Palette,
  Package,
  Gift,
  HeartHandshake,
} from "lucide-react";

import "./Benefits.css";

const benefits = [
  {
    icon: <Palette size={28} />,
    title: "100% Handmade Artwork",
    description:
      "Every portrait is individually hand-drawn with precision, creativity, and exceptional attention to detail.",
  },
  {
    icon: <CheckCircle size={28} />,
    title: "Premium Quality",
    description:
      "Professional-grade materials ensure realistic artwork with a luxurious finish that lasts for years.",
  },
  {
    icon: <Package size={28} />,
    title: "Safe Packaging",
    description:
      "Every artwork is securely packed using protective materials to ensure it arrives in perfect condition.",
  },
  {
    icon: <Truck size={28} />,
    title: "Fast Delivery",
    description:
      "Reliable shipping with live order tracking across India and worldwide.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Secure Payments",
    description:
      "Enjoy safe and encrypted online payments with complete confidence and peace of mind.",
  },
  {
    icon: <RefreshCw size={28} />,
    title: "Unlimited Minor Revisions",
    description:
      "We'll make minor adjustments until you're happy with your portrait before it's finalized.",
  },
  {
    icon: <HeartHandshake size={28} />,
    title: "Trusted by Happy Customers",
    description:
      "Hundreds of satisfied customers trust AveXni to transform their memories into timeless artwork.",
  },
  {
    icon: <Gift size={28} />,
    title: "Perfect Gift",
    description:
      "Ideal for birthdays, anniversaries, weddings, festivals, and every special occasion.",
  },
];

export default function Benefits() {
  return (
    <section className="benefits" id="benefits">
      <div className="container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">
            ✨ Why Choose AveXni
          </span>

          <h2>
            Crafted with Passion,
            <span> Delivered with Care</span>
          </h2>

          <p>
            At AveXni, we don't just create portraits—we preserve emotions,
            memories, and special moments through handcrafted artwork made with
            passion, premium quality, and exceptional customer care.
          </p>
        </motion.div>

        <div className="benefits-grid">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              className="benefit-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
            >
              <div className="benefit-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}