import { motion } from "framer-motion";

export default function DashboardCards({
  title,
  value,
  icon: Icon,
  color = "#F59E0B",
  change,
  positive = true,
}) {
  return (
    <motion.div
      className="dashboard-card"
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
      }}
    >
      <div
        className="dashboard-card-icon"
        style={{
          background: color,
        }}
      >
        <Icon size={30} />
      </div>

      <div className="dashboard-card-content">
        <span className="dashboard-card-title">
          {title}
        </span>

        <h2>{value}</h2>

        {change && (
          <p
            className={`dashboard-card-change ${
              positive
                ? "positive"
                : "negative"
            }`}
          >
            {change}
          </p>
        )}
      </div>
    </motion.div>
  );
}