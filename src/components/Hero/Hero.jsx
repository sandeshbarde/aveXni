import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  CheckCircle,
  Play,
} from "lucide-react";

import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background Overlay */}
      <div className="hero-overlay"></div>

      {/* Background Image */}
      <img
        src="/images/backgrounds/hero-bg.webp"
        alt="Luxury Handmade Portrait Background"
        className="hero-bg"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />

      {/* Particles */}
      <img
        src="/images/backgrounds/particles.webp"
        alt=""
        aria-hidden="true"
        className="hero-particles"
        loading="lazy"
        decoding="async"
      />

      <div className="container hero-container">

        {/* LEFT CONTENT */}

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >

          <div className="hero-badge">
            <Star size={18} />
            <span>India's Premium Portrait Studio</span>
          </div>

          <h1>
            Handcrafted
            <span> Memories </span>
            Drawn Forever.
          </h1>

          <p>
            Transform your favourite memories into luxury handmade
            pencil portraits crafted by professional artists.
            Premium quality, museum-grade paper and elegant framing.
          </p>

          <div className="hero-price">
            Starting From
            <strong> ₹1499</strong>
          </div>

          <div className="hero-buttons">

            <a
              href="#order"
              className="btn-primary"
            >
              Order Now
              <ArrowRight size={18} />
            </a>

            <a
              href="https://wa.me/917058298917"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              WhatsApp
            </a>

          </div>

          <div className="hero-features">

            <div>
              <CheckCircle size={18} />
              Free Delivery
            </div>

            <div>
              <CheckCircle size={18} />
              Handmade
            </div>

            <div>
              <CheckCircle size={18} />
              Secure Payment
            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="hero-images"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >

          <div className="main-frame">

            <img
              src="/images/hero/hero-banner.webp"
              alt="Handmade Pencil Portrait"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />

          </div>

          <div className="floating-card top">

            <img
              src="/images/hero/hero-portrait-1.webp"
              alt="Portrait Sample"
              loading="lazy"
              decoding="async"
            />

          </div>

          <div className="floating-card bottom">

            <img
              src="/images/hero/hero-portrait-2.webp"
              alt="Portrait Artwork"
              loading="lazy"
              decoding="async"
            />

          </div>

        </motion.div>

      </div>

      {/* STATS */}

      <div className="hero-stats">

        <div>
          <h2>900+</h2>
          <span>Happy Customers</span>
        </div>

        <div>
          <h2>4.9★</h2>
          <span>Google Rating</span>
        </div>

        <div>
          <h2>48H</h2>
          <span>Express Delivery</span>
        </div>

        <div>
          <h2>100%</h2>
          <span>Handmade</span>
        </div>

      </div>

      {/* Scroll */}

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.4,
        }}
      >
        <Play size={18} />
      </motion.div>

    </section>
  );
}