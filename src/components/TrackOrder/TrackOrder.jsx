import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Package,
  Brush,
  Truck,
  CheckCircle,
} from "lucide-react";

import "./TrackOrder.css";

const orderStages = [
  {
    id: 1,
    title: "Order Received",
    icon: <Package size={24} />,
  },
  {
    id: 2,
    title: "Artwork in Progress",
    icon: <Brush size={24} />,
  },
  {
    id: 3,
    title: "Shipped",
    icon: <Truck size={24} />,
  },
  {
    id: 4,
    title: "Delivered",
    icon: <CheckCircle size={24} />,
  },
];

export default function TrackOrder() {
  const [orderId, setOrderId] = useState("");
  const [searched, setSearched] = useState(false);

  // Demo Progress
  const currentStage = 2;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!orderId.trim()) {
      alert("Please enter your Order ID.");
      return;
    }

    setSearched(true);
  };

  return (
    <section
      className="track-order-section"
      id="track-order"
    >
      <div className="container">

        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <span>TRACK ORDER</span>

          <h2>

            Track Your

            <span> Portrait</span>

          </h2>

          <p>
            Enter your Order ID to check the latest
            progress of your handmade artwork.
          </p>

        </motion.div>

        <motion.form
          className="track-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >

          <input
            type="text"
            placeholder="Enter Order ID"
            value={orderId}
            onChange={(e) =>
              setOrderId(e.target.value)
            }
          />

          <button type="submit">

            <Search size={18} />

            Track Order

          </button>

        </motion.form>

        {searched && (

          <motion.div
            className="tracking-card"
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >

            <h3>

              Order ID:
              <span> {orderId}</span>

            </h3>

            <div className="tracking-progress">

              {orderStages.map((stage, index) => (

                <div
                  key={stage.id}
                  className={`tracking-step ${
                    index <= currentStage
                      ? "active"
                      : ""
                  }`}
                >

                  <div className="tracking-icon">

                    {stage.icon}

                  </div>

                  <p>{stage.title}</p>

                </div>

              ))}

            </div>

            <div className="tracking-status">

              Current Status:
              <strong>

                Artwork in Progress

              </strong>

            </div>

          </motion.div>

        )}

      </div>
    </section>
  );
}