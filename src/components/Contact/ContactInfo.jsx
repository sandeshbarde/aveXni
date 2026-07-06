import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

export default function ContactInfo() {
  const contactDetails = [
    {
      id: 1,
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+91 7058298917",
    },
    {
      id: 2,
      icon: <Mail size={24} />,
      title: "Email",
      value: "aveshdhakare@gmail.com",
    },
    {
      id: 3,
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Pune, Maharashtra, India",
    },
    {
      id: 4,
      icon: <Clock size={24} />,
      title: "Working Hours",
      value: "Mon - Sun | 9:00 AM - 9:00 PM",
    },
  ];

  return (
    <motion.div
      className="contact-info"
      initial={{
        opacity: 0,
        x: -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      viewport={{ once: true }}
    >
      <h2>Get In Touch</h2>

      <p>
        We'd love to hear from you. Whether you have a
        question about your order, pricing, or custom
        artwork, our team is ready to help.
      </p>

      <div className="contact-info-list">
        {contactDetails.map((item) => (
          <div
            key={item.id}
            className="info-card"
          >
            <div className="info-icon">
              {item.icon}
            </div>

            <div className="info-content">
              <h4>{item.title}</h4>
              <span>{item.value}</span>
            </div>
          </div>
        ))}
      </div>

      <a
        href="https://wa.me/917058298917 ?text=Hello!%20I%20want%20to%20order%20a%20handmade%20portrait."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <MessageCircle size={20} />

        Chat on WhatsApp
      </a>
    </motion.div>
  );
}