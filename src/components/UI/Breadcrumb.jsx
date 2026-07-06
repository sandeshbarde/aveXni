import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";

export default function Breadcrumb({
  items = [],
  separator = <ChevronRight size={16} />,
}) {
  if (!items.length) return null;

  return (
    <nav
      className="breadcrumb"
      aria-label="breadcrumb"
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div
            key={index}
            className="breadcrumb-item"
          >
            {isLast ? (
              <span className="breadcrumb-current">
                {item.label}
              </span>
            ) : (
              <>
                <Link
                  to={item.path}
                  className="breadcrumb-link"
                >
                  {item.label}
                </Link>

                <span className="breadcrumb-separator">
                  {separator}
                </span>
              </>
            )}
          </div>
        );
      })}
    </nav>
  );
}