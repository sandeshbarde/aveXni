import { memo } from "react";
import { motion } from "framer-motion";
import "./Card.css";

function Card({
  children,
  title,
  subtitle,
  icon,
  image,
  footer,
  hover = true,
  padding = "md",
  className = "",
  onClick,
}) {
  const classNames = [
    "card",
    `card-padding-${padding}`,
    hover && "card-hover",
    onClick && "card-clickable",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const isClickable = typeof onClick === "function";

  return (
    <motion.div
      className={classNames}
      onClick={onClick}
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      whileHover={
        hover
          ? {
              y: -8,
              scale: 1.02,
              transition: { duration: 0.25, ease: "easeOut" },
            }
          : undefined
      }
      whileTap={
        isClickable
          ? {
              scale: 0.98,
            }
          : undefined
      }
      onKeyDown={(e) => {
        if (!isClickable) return;

        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick(e);
        }
      }}
    >
      {image && (
        <div className="card-image">
          <img
            src={image}
            alt={title || "Card"}
            loading="lazy"
            decoding="async"
          />
        </div>
      )}

      {(icon || title || subtitle) && (
        <div className="card-header">
          {icon && (
            <div className="card-icon">
              {icon}
            </div>
          )}

          <div className="card-heading">
            {title && (
              <h3 className="card-title">
                {title}
              </h3>
            )}

            {subtitle && (
              <p className="card-subtitle">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}

      {children && (
        <div className="card-body">
          {children}
        </div>
      )}

      {footer && (
        <div className="card-footer">
          {footer}
        </div>
      )}
    </motion.div>
  );
}

export default memo(Card);