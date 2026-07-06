import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import "./ReviewCTA.css";

export default function ReviewCTA() {
  return (
    <section className="review-cta">
      <motion.div
        className="review-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="review-icon"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 12,
          }}
        >
          ⭐
        </motion.div>

        <h2>Your Portrait Has Been Delivered! 🎉</h2>

        <p>
          Thank you for choosing <strong>aveXni</strong>.
          <br />
          We hope your handmade portrait exceeded your expectations.
        </p>

        <div className="review-divider"></div>

        <h3>Love Your Portrait?</h3>

        <p>
          Your review helps other customers trust aveXni and supports our
          artists in creating amazing handmade portraits.
        </p>

        <div className="review-stars">
          <Star fill="#FBBF24" strokeWidth={1.5} />
          <Star fill="#FBBF24" strokeWidth={1.5} />
          <Star fill="#FBBF24" strokeWidth={1.5} />
          <Star fill="#FBBF24" strokeWidth={1.5} />
          <Star fill="#FBBF24" strokeWidth={1.5} />
        </div>

        <a
          href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review"
          target="_blank"
          rel="noopener noreferrer"
          className="review-btn"
        >
          Leave a Google Review
          <ExternalLink size={18} />
        </a>

        <small>It only takes 30 seconds ❤️</small>
      </motion.div>
    </section>
  );
}