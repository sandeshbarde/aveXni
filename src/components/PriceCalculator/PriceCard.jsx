import { motion } from "framer-motion";
import {
  Calculator,
  Frame,
  Truck,
  CreditCard,
  Sparkles,
  CheckCircle,
  Palette,
  Users,
} from "lucide-react";

export default function PriceCard({
  total = 0,
  size = "A3",
  drawingType = "premium",
  frame = "None",
  persons = 1,
  express = false,
  onOrder,
}) {

  const drawingName = {
    standard: "Standard Sketch",
    premium: "Premium Sketch",
    colour: "Standard Colour Drawing",
    premiumColour: "Premium Colour Drawing",
  };

  return (
    <motion.div
      className="price-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
      }}
    >
      {/* Header */}

      <div className="price-header">

        <Calculator size={55} />

        <h2>Estimated Price</h2>

        <p>Your live quotation</p>

      </div>

      {/* Total */}

      <div className="price-total">
        ₹{Number(total).toLocaleString("en-IN")}
      </div>

      {/* Details */}

      <div className="price-details">

        <div className="price-row">
          <span>Portrait Size</span>
          <strong>{size}</strong>
        </div>

        <div className="price-row">
          <span>Drawing Type</span>
          <strong>{drawingName[drawingType]}</strong>
        </div>

        <div className="price-row">
          <span>Frame</span>
          <strong>{frame}</strong>
        </div>

        <div className="price-row">
          <span>People</span>
          <strong>{persons}</strong>
        </div>

        <div className="price-row">
          <span>Express Delivery</span>
          <strong>{express ? "Yes" : "No"}</strong>
        </div>

      </div>

      {/* Includes */}

      <div className="price-includes">

        <h3>What's Included</h3>

        <ul>

          <li>
            <CheckCircle size={18} />
            100% Handmade Portrait
          </li>

          <li>
            <Palette size={18} />
            Premium Art Materials
          </li>

          <li>
            <Sparkles size={18} />
            Museum Quality Paper
          </li>

          <li>
            <Frame size={18} />
            Frame Support Available
          </li>

          <li>
            <Users size={18} />
            Multiple Person Portrait
          </li>

          <li>
            <Truck size={18} />
            Free Delivery Across India
          </li>

          <li>
            <CreditCard size={18} />
            Secure Online Payment
          </li>

        </ul>

      </div>

      <button
        className="price-order-btn"
        onClick={onOrder}
      >
        Order Now
      </button>

    </motion.div>
  );
}