import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

import ContactForm from "./ContactForm";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">

        <div className="contact-wrapper">

          {/* Left Side */}

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >

            <h2>Get In Touch</h2>

            <p>
              We'd love to hear from you. Contact us for
              custom handmade portraits, pricing, or any
              questions.
            </p>

            <div className="contact-item">

              <Phone size={22} />

              <div>
                <h4>Phone</h4>

                <a href="tel:+917058298917">
                  +91 7058298917
                </a>

              </div>

            </div>

            <div className="contact-item">

              <MessageCircle size={22} />

              <div>

                <h4>WhatsApp</h4>

                <a
                  href="https://wa.me/917058298917"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91 7058298917
                </a>

              </div>

            </div>

            <div className="contact-item">

              <Instagram size={22} />

              <div>

                <h4>Instagram</h4>

                <a
                  href="https://instagram.com/rambhakt_d_aavesha"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @rambhakt_d_aavesha
                </a>

                <br />

                <a
                  href="https://instagram.com/artist_d_aavesha"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @artist_d_aavesha
                </a>

              </div>

            </div>

            <div className="contact-item">

              <Mail size={22} />

              <div>

                <h4>Email</h4>
                  <a href="mailto:aveshdhakare@gmail.com">
                   aveshdhakare@gmail.com
                    </a>
                

              </div>

            </div>

            <div className="contact-item">

              <MapPin size={22} />

              <div>

                <h4>Address</h4>

                <p>
                  Pune, Maharashtra,
                  India
                </p>

              </div>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            className="contact-form-area"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >

            <ContactForm />

          </motion.div>

        </div>

      </div>
    </section>
  );
}