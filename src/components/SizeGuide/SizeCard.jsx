import { motion } from "framer-motion";
import { Check, Star, Ruler, Frame } from "lucide-react";

export default function SizeCard({
  name,
  dimension,
  price,
  image,
  popular,
  onSelect,
}) {
  return (
    <motion.div
      className={`size-card ${popular ? "popular" : ""}`}
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      transition={{
        duration: 0.35,
      }}
    >
      {/* Popular Badge */}

      {popular && (
        <div className="popular-badge">
          <Star size={16} />
          <span>Most Popular</span>
        </div>
      )}

      {/* Image */}

      <div className="size-image">

        <img
          src={image}
          alt={name}
          loading="lazy"
        />

      </div>

      {/* Content */}

      <div className="size-content">

        <h3>{name}</h3>

        <div className="dimension">

          <Ruler size={16} />

          <span>{dimension}</span>

        </div>

        <div className="price">

          {price}

        </div>

        <ul className="size-features">

          <li>
            <Check size={16} />
            Handmade Portrait
          </li>

          <li>
            <Check size={16} />
            Premium Quality Paper
          </li>

          <li>
            <Check size={16} />
            HD Pencil Finish
          </li>

          <li>
            <Check size={16} />
            Optional Wooden Frame
          </li>

          <li>
            <Check size={16} />
            Free Delivery
          </li>

        </ul>

        <button
          className="select-btn"
          onClick={() => onSelect?.(name)}
        >

          <Frame size={18} />

          Select {name}

        </button>

      </div>

    </motion.div>
  );
}