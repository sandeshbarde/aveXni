import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function ReviewCard({
  name,
  city,
  image,
  rating = 5,
  review,
}) {
  return (
    <motion.div
      className="review-card"
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      {/* Quote */}

      <div className="review-quote">

        <Quote size={42} />

      </div>

      {/* Rating */}

      <div className="review-stars">

        {Array.from({ length: rating }).map((_, index) => (
          <Star
            key={index}
            size={18}
            fill="currentColor"
          />
        ))}

      </div>

      {/* Review */}

      <p className="review-text">

        "{review}"

      </p>

      {/* User */}

      <div className="review-user">

        <img
          src={image}
          alt={name}
          loading="lazy"
        />

        <div>

          <h4>{name}</h4>

          <span>{city}</span>

        </div>

      </div>

    </motion.div>
  );
}