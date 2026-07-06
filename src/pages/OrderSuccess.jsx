import { motion } from "framer-motion";
import {
  CheckCircle2,
  Package,
  Star,
  ArrowRight,
  Home,
} from "lucide-react";
import { Link } from "react-router-dom";

import "./OrderSuccess.css";

export default function OrderSuccess() {
  return (
    <section className="order-success">
      <div className="success-bg"></div>

      <motion.div
        className="success-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Success Icon */}
        <motion.div
          className="success-icon"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 12,
          }}
        >
          <CheckCircle2 size={90} />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Order Placed Successfully!
        </motion.h1>

        <motion.p
          className="success-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Thank you for choosing <strong>aveXni</strong>.
          <br />
          Your custom portrait order has been received successfully.
          We'll begin creating your artwork shortly.
        </motion.p>

        {/* Order Info */}
        <div className="order-info">
          <div className="info-box">
            <Package size={24} />
            <div>
              <span>Order Number</span>
              <h4>#AVX10245</h4>
            </div>
          </div>

          <div className="info-box">
            <Package size={24} />
            <div>
              <span>Estimated Delivery</span>
              <h4>5 - 7 Business Days</h4>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="success-buttons">
          <Link to="/track-order" className="primary-btn">
            Track Order
            <ArrowRight size={18} />
          </Link>

          <Link to="/" className="secondary-btn">
            <Home size={18} />
            Continue Shopping
          </Link>
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* Review CTA */}
        <motion.div
          className="review-box"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Star className="review-star" size={50} />

          <h2>Love Your Experience?</h2>

          <p>
            Your feedback helps other customers trust aveXni
            and supports our artists.
          </p>

          <div className="stars">
            ⭐⭐⭐⭐⭐
          </div>

          <a
            href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review"
            target="_blank"
            rel="noopener noreferrer"
            className="review-btn"
          >
            ⭐ Leave a Google Review
          </a>

          <small>It only takes 30 seconds ❤️</small>
        </motion.div>
      </motion.div>
    </section>
  );
}
<>
  {/* Success Section */}
  <section className="order-success">
    ...
  </section>

  {/* Review Section */}
  <ReviewCTA />
</>