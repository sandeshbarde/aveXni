import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  Frame,
  Truck,
  Sparkles,
  CreditCard,
} from "lucide-react";

import "./PriceCalculator.css";

const PRICE_LIST = {
  A4: {
    standard: 700,
    premium: 900,
    colour: 1300,
    premiumColour: 1600,
  },
  A3: {
    standard: 1100,
    premium: 1600,
    colour: 2100,
    premiumColour: 2600,
  },
  A2: {
    standard: 1500,
    premium: 1900,
    colour: 2500,
    premiumColour: 2900,
  },
  A1: {
    standard: 2100,
    premium: 2500,
    colour: 3100,
    premiumColour: 3500,
  },
};


const FRAME_PRICES = {
  None: 0,
  Black: 499,
  Brown: 599,
  Golden: 799,
};

export default function PriceCalculator() {
  const [size, setSize] = useState("A3");
  const [drawingType, setDrawingType] = useState("premium");
  const [frame, setFrame] = useState("Black");
  const [persons, setPersons] = useState(1);
  const [express, setExpress] = useState(false);

  const total = useMemo(() => {
    let price = PRICE_LIST[size][drawingType];

    price += FRAME_PRICES[frame];

    if (persons > 1) {
      price += (persons - 1) * 600;
    }

    if (express) {
      price += 999;
    }

    return price;
  }, [size, drawingType, frame, persons, express]);

  return (
    <section className="price-calculator" id="price" data-section="calculator">
      <div className="container">

        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
         <span>INSTANT PRICE ESTIMATOR</span>

          <h2>
  Customize Your
  <span> Dream Portrait</span>
          </h2>

          <p>
           Choose your preferred size, artwork style, frame, and delivery options to
          receive an instant estimated price for your handmade portrait.
          </p>
        </motion.div>

        <div className="calculator-grid">

          <motion.div
            className="calculator-form"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="form-group">
              <label>Portrait Size</label>

              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                <option value="A4">A4</option>
                <option value="A3">A3</option>
                <option value="A2">A2</option>
                <option value="A1">A1</option>
              </select>
            </div>

            <div className="form-group">
              <label>Drawing Type</label>

              <select
                value={drawingType}
                onChange={(e) => setDrawingType(e.target.value)}
              >
                <option value="standard">
                  Standard Sketch
                </option>

                <option value="premium">
                  Premium Sketch
                </option>

                <option value="colour">
                  Standard Colour Drawing
                </option>

                <option value="premiumColour">
                  Premium Colour Drawing
                </option>
              </select>
            </div>

            <div className="form-group">
              <label>Frame</label>

              <select
                value={frame}
                onChange={(e) => setFrame(e.target.value)}
              >
                <option value="None">None</option>
                <option value="Black">Black</option>
                <option value="Brown">Brown</option>
                <option value="Golden">Golden</option>
              </select>
            </div>

            <div className="form-group">
              <label>Number of People</label>

              <input
                type="number"
                min="1"
                max="10"
                value={persons}
                onChange={(e) => {
                  const value = Math.max(
                    1,
                    Math.min(10, Number(e.target.value))
                  );

                  setPersons(value);
                }}
              />
            </div>

            <label className="checkbox">
              <input
                type="checkbox"
                checked={express}
                onChange={() => setExpress(!express)}
              />

              Express Delivery (+₹999)
            </label>

          </motion.div>

          <motion.div
            className="price-summary"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="price-card">

              <Calculator
                size={55}
                className="summary-icon"
              />

              <h3>Estimated Price</h3>

              <div className="total-price">
                ₹{total.toLocaleString("en-IN")}
              </div>

              <ul>

                <li>
                  <Frame size={18} />
                  {frame} Frame
                </li>

                <li>
                  <Sparkles size={18} />
                  {drawingType === "standard" &&
                    "Standard Sketch"}

                  {drawingType === "premium" &&
                    "Premium Sketch"}

                  {drawingType === "colour" &&
                    "Standard Colour Drawing"}

                  {drawingType === "premiumColour" &&
                    "Premium Colour Drawing"}
                </li>

                <li>
                  <Truck size={18} />
                  Free Delivery
                </li>

                <li>
                  <CreditCard size={18} />
                  Secure Payment
                </li>

              </ul>

              <button className="order-btn">
               🎨 Order Your Portrait
               </button>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
  <div className="price-guarantee">
  <p>✅ 100% Handmade Artwork</p>
  <p>📦 Safe Packaging</p>
  <p>🚚 Free Delivery Across India</p>
  <p>💳 Secure Payments</p>
</div>
} 