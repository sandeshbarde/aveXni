import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    city: "Pune",
    image: "/images/testimonials/Rahul.webp",
    rating: 5,
    review:
      "The portrait exceeded my expectations. The detailing and quality are outstanding.",
  },
  {
    id: 2,
    name: "Priya Patel",
    city: "Mumbai",
    image: "/images/testimonials/Priya.webp",
    rating: 5,
    review:
      "Amazing artwork! The portrait looked exactly like our wedding photo.",
  },
  {
    id: 3,
    name: "Amit Verma",
    city: "Delhi",
    image: "/images/testimonials/Amit.webp",
    rating: 5,
    review:
      "Fast delivery, premium quality, and excellent customer service.",
  },
  {
    id: 4,
    name: "Sneha Joshi",
    city: "Nagpur",
    image: "/images/testimonials/Sneha.webp",
    rating: 5,
    review:
      "Beautiful handmade sketch. My family loved it. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="reviews">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>TESTIMONIALS</span>

          <h2>
            What Our <span>Customers Say</span>
          </h2>

          <p>
            Thousands of happy customers trust aveXni for premium handmade portraits.
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <Quote className="quote-icon" size={38} />

              <div className="testimonial-rating">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                    color="#F59E0B"
                  />
                ))}
              </div>

              <div className="testimonial-user">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/images/testimonials/default-avatar.webp";
                  }}
                />

                <div className="user-info">
                  <h4>{item.name}</h4>
                  <span>📍 {item.city}</span>

                  <small className="verified">
                    ✔ Verified Customer
                  </small>
                </div>
              </div>

              <p className="testimonial-review">{item.review}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}