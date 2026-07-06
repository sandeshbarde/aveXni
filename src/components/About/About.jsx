import { motion } from "framer-motion";
import {
  Users,
  Award,
  Palette,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import "./About.css";

import aboutMain from "../assets/images/about/about-main.webp";
import aboutOne from "../assets/images/about/about-1.webp";
import aboutTwo from "../assets/images/about/about-2.webp";


  const stats = [
    {
      number: "900+",
      label: "Happy Customers",
      icon: <Users size={26} />,
    },
    {
      number: "50+",
      label: "Portraits Delivered",
      icon: <Palette size={26} />,
    },
    {
      number: "4.4★",
      label: "Customer Rating",
      icon: <Award size={26} />,
    },
    {
      number: "100%",
      label: "Handmade Artwork",
      icon: <ShieldCheck size={26} />,
    },
  ];

  return (
    <section className="about-section" id="about">
      <div className="container">

        <div className="about-grid">

          {/* Left Images */}
          <motion.div
            className="about-images"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <div className="about-main-image">
              <img
                src={aboutMain}
                alt="Handmade Portrait"
              />
            </div>

            <div className="about-small-image top">
              <img
                src={about1}
                alt="Portrait"
              />
            </div>

            <div className="about-small-image bottom">
              <img
                src={about2}
                alt="Sketch"
              />
            </div>

          </motion.div>

          {/* Right Content */}

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <span className="section-tag">
              ABOUT US
            </span>

            <h2>
              Crafting
              <span> Memories </span>
              Into Timeless Art
            </h2>

            <p>
              At <strong>aveXni</strong>, we transform your precious
              memories into premium handmade portraits created with
              passion, precision, and artistic excellence.
            </p>

            <p>
              Every sketch is carefully hand-drawn by experienced
              artists using museum-quality materials. Whether it's a
              birthday, wedding, anniversary, couple portrait,
              family portrait, baby portrait, pet portrait, or
              custom artwork, we create timeless memories you'll
              cherish forever.
            </p>

            <div className="about-list">

              <div>✓ 100% Handmade Artwork</div>

              <div>✓ Premium Quality Materials</div>

              <div>✓ Professional Artists</div>

              <div>✓ Free Delivery Across India</div>

              <div>✓ Live Order Tracking</div>

              <div>✓ Customer Satisfaction Guaranteed</div>

            </div>

            <a href="#order" className="about-btn">
              Order Your Portrait
              <ArrowRight size={18} />
            </a>

          </motion.div>

        </div>

        {/* Stats */}

        <div className="about-stats">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >

              <div className="stat-icon">
                {item.icon}
              </div>

              <h3>{item.number}</h3>

              <p>{item.label}</p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
