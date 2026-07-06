import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react";

import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">

      <div className="container">

        {/* Section Title */}

        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span>CONTACT US</span>

          <h2>
            Let's Create Your
            <span> Dream Portrait</span>
          </h2>

          <p>
            Have questions or need help with your order?
            Our team is always ready to assist you.
          </p>

        </motion.div>

        <div className="contact-grid">

          {/* Contact Information */}

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <div className="info-card">

              <Phone size={26} />

              <div>

                <h4>Call Us</h4>

                <p>+91 7058298917</p>

              </div>

            </div>

            <div className="info-card">

              <Mail size={26} />

              <div>

                <h4>Email</h4>

                <p>aveshdhakare@gmail.com</p>

              </div>

            </div>

            <div className="info-card">

              <MapPin size={26} />

              <div>

                <h4>Location</h4>

                <p>Pune, Maharashtra, India</p>

              </div>

            </div>

            <div className="info-card">

              <Clock size={26} />

              <div>

                <h4>Working Hours</h4>

                <p>Mon - Sun | 9:00 AM - 9:00 PM</p>

              </div>

            </div>

            <a
              href="https://wa.me/917058298917?text=Hello!%20I%20want%20to%20order%20a%20handmade%20portrait."
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >

              <MessageCircle size={22} />

              Chat on WhatsApp

            </a>

          </motion.div>

          {/* Contact Form */}

          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <div className="form-group">

              <input
                type="text"
                placeholder="Your Name"
                required
              />

            </div>

            <div className="form-group">

              <input
                type="email"
                placeholder="Your Email"
                required
              />

            </div>

            <div className="form-group">

              <input
                type="tel"
                placeholder="Phone Number"
                required
              />

            </div>

            <div className="form-group">

              <textarea
                rows="6"
                placeholder="Write your message..."
                required
              />

            </div>

            <button
              type="submit"
              className="contact-btn"
            >

              <Send size={18} />

              Send Message

            </button>

          </motion.form>

        </div>

      </div>

    </section>
  );
}