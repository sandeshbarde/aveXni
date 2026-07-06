import { motion } from "framer-motion";
import {
  Package,
  Palette,
  Truck,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Order Received",
    description: "Your order has been successfully placed.",
    icon: Package,
  },
  {
    id: 2,
    title: "Artwork in Progress",
    description: "Our artists are creating your handmade portrait.",
    icon: Palette,
  },
  {
    id: 3,
    title: "Shipped",
    description: "Your portrait has been packed and dispatched.",
    icon: Truck,
  },
  {
    id: 4,
    title: "Delivered",
    description: "Your artwork has reached your doorstep.",
    icon: CheckCircle,
  },
];

export default function Timeline({
  currentStep = 2,
}) {
  return (
    <div className="timeline">

      {steps.map((step, index) => {
        const Icon = step.icon;

        const active = index <= currentStep;

        return (
          <motion.div
            key={step.id}
            className={`timeline-item ${
              active ? "active" : ""
            }`}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >

            {/* Line */}

            {index !== steps.length - 1 && (
              <div className="timeline-line" />
            )}

            {/* Icon */}

            <div className="timeline-icon">

              <Icon size={24} />

            </div>

            {/* Content */}

            <div className="timeline-content">

              <h3>{step.title}</h3>

              <p>{step.description}</p>

            </div>

          </motion.div>
        );
      })}
    </div>
  );
}