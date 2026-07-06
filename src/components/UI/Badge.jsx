import "./Badge.css";

export default function Badge({
  children,
  variant = "primary",
  size = "md",
  rounded = true,
  icon = null,
  className = "",
}) {
  const classes = [
    "badge",
    `badge-${variant}`,
    `badge-${size}`,
    rounded ? "badge-rounded" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes}>
      {icon && (
        <span className="badge-icon">
          {icon}
        </span>
      )}

      {children}
    </span>
  );
}