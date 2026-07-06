import { motion } from "framer-motion";
import { ArrowRight, Star, CheckCircle, Play } from "lucide-react";

import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background */}

      <div className="hero-overlay"></div>

      <img
        src="/images/hero/hero-bg.webp"
        alt="Background"
        className="hero-bg"
      />

      {/* Floating Particles */}

      <img
        src="/images/backgrounds/particles.webp"
        alt=""
        className="hero-particles"
      />

      <div className="container hero-container">

        {/* LEFT */}

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
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

            <a href="#order" className="btn-primary">

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
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <div className="main-frame">

            <img
              src="/images/hero/hero-banner.webp"
              alt="Portrait"
            />

          </div>

          <div className="floating-card top">

            <img
              src="/images/hero/hero-portrait-1.webp"
              alt=""
            />

          </div>

          <div className="floating-card bottom">

            <img
              src="/images/hero/hero-portrait-2.webp"
              alt=""
            />

          </div>

        </motion.div>

      </div>

      {/* Bottom Stats */}

      <div className="hero-stats">

        <div>

          <h2>900+</h2>

          <span>Happy Customers</span>

        </div>

        <div>

          <h2>4.4★</h2>

          <span>Average Rating</span>

        </div>

        <div>

          <h2>48H</h2>

          <span>Express Option</span>

        </div>

        <div>

          <h2>100%</h2>

          <span>Handmade</span>

        </div>

      </div>

      {/* Scroll Down */}

      <motion.div
        className="scroll-indicator"
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
      >

        <Play size={18} />

      </motion.div>

    </section>
  );
}