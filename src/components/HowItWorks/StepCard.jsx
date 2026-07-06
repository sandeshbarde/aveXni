import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const StepCard = ({
  number,
  icon,
  title,
  description,
  isLast = false,
}) => {
  return (
    <motion.div
      className="step-card"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{
        y: -12,
        scale: 1.03,
      }}
    >
      {/* Step Number */}

      <div className="step-number">
        {number}
      </div>

      {/* Icon */}

      <div className="step-icon">
        {icon}
      </div>

      {/* Content */}

      <h3 className="step-title">
        {title}
      </h3>

      <p className="step-description">
        {description}
      </p>

      {/* Connector */}

      {!isLast && (
        <div className="step-arrow">
          <ArrowRight size={26} />
        </div>
      )}
    </motion.div>
  );
};

export default StepCard;