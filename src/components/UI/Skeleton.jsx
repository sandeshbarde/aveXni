import "./Skeleton.css";

export default function Skeleton({
  width = "100%",
  height = "20px",
  borderRadius = "12px",
  className = "",
}) {
  return (
    <div
      className={`skeleton ${className}`}
      style={{
        width,
        height,
        borderRadius,
      }}
    />
  );
}