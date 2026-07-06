import { motion } from "framer-motion";
import "./SectionTitle.css";

export default function SectionTitle({
  badge,
  title,
  highlight,
  subtitle,
  align = "center",
}) {
  return (
    <motion.div
      className={`section-title section-title-${align}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {badge && <span className="section-badge">{badge}</span>}

      <h2 className="section-heading">
        {title}
        {highlight && <span className="section-highlight"> {highlight}</span>}
      </h2>

      {subtitle && (
        <p className="section-subtitle">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}