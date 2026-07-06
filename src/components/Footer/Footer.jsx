import "./Footer.css";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Heart,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">

        {/* Brand */}
        <motion.div
          className="footer-brand"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>aveXni</h2>

          <p>Handcrafted Memories, Drawn Forever.</p>

          <p>
            Premium handmade portrait sketches created with love and precision.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="footer-links"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          viewport={{ once: true }}
        >
          <h3>Quick Links</h3>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/track-order">Track Order</a></li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          className="footer-contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3>Contact</h3>

          <a href="tel:+917058298917">
            <Phone size={18} />
            <span>+91 70582 98917</span>
          </a>

          <a href="mailto:aveshdhakare@gmail.com">
            <Mail size={18} />
            <span>aveshdhakare@gmail.com</span>
          </a>

          <a
            href="https://wa.me/917058298917"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} />
            <span>WhatsApp</span>
          </a>

          <a
            href="https://instagram.com/rambhakt_d_aavesha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={18} />
            <span>@rambhakt_d_aavesha</span>
          </a>

          <a
            href="https://instagram.com/artist_d_aavesha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={18} />
            <span>@artist_d_aavesha</span>
          </a>

          <div className="footer-location">
            <MapPin size={18} />
            <span>Pune, Maharashtra, India</span>
          </div>
        </motion.div>

      </div>

      <div className="footer-bottom">
        <p>
          © {year} aveXni. Made with{" "}
          <Heart
            size={14}
            fill="currentColor"
            style={{
              display: "inline",
              verticalAlign: "middle",
            }}
          />{" "}
          in India.
        </p>
      </div>
    </footer>
  );
}