import { motion } from "framer-motion";
import "./Button.css";

export default function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  icon,
  loading = false,
  disabled = false,
  fullWidth = false,
  onClick,
  className = "",
}) {
  const classes = [
    "btn",
    `btn-${variant}`,
    `btn-${size}`,
    fullWidth ? "btn-full" : "",
    disabled ? "btn-disabled" : "",
    loading ? "btn-loading" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={
        disabled || loading
          ? {}
          : { y: -3, scale: 1.02 }
      }
      whileTap={
        disabled || loading
          ? {}
          : { scale: 0.97 }
      }
      transition={{
        duration: 0.2,
      }}
    >
      {loading ? (
        <>
          <span className="btn-spinner" />
          <span>Loading...</span>
        </>
      ) : (
        <>
          {icon && (
            <span className="btn-icon">
              {icon}
            </span>
          )}

          <span>{children}</span>
        </>
      )}
    </motion.button>
  );
}