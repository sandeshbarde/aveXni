import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReviewCard from "./ReviewCard";

export default function ReviewSlider({
  reviews = [],
}) {
  const [current, setCurrent] = useState(0);

  if (reviews.length === 0) {
    return null;
  }

  const previousSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === reviews.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="review-slider">

      <button
        className="slider-btn prev"
        onClick={previousSlide}
        type="button"
      >
        <ChevronLeft size={24} />
      </button>

      <AnimatePresence mode="wait">

        <motion.div
          key={reviews[current].id}
          initial={{
            opacity: 0,
            x: 80,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: -80,
          }}
          transition={{
            duration: 0.4,
          }}
        >

          <ReviewCard
            name={reviews[current].name}
            city={reviews[current].city}
            image={reviews[current].image}
            rating={reviews[current].rating}
            review={reviews[current].review}
          />

        </motion.div>

      </AnimatePresence>

      <button
        className="slider-btn next"
        onClick={nextSlide}
        type="button"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}

      <div className="slider-dots">

        {reviews.map((_, index) => (

          <button
            key={index}
            type="button"
            className={
              current === index
                ? "dot active"
                : "dot"
            }
            onClick={() => setCurrent(index)}
          />

        ))}

      </div>

    </div>
  );
}