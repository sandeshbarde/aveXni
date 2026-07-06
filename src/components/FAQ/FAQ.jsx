import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

import "./FAQ.css";

const faqs = [
  {
    id: 1,
    question: "How long does it take to complete a portrait?",
    answer:
      "Our artists usually complete handmade portraits within 4–7 business days. Express delivery options are also available.",
  },
  {
    id: 2,
    question: "Which photo quality is best?",
    answer:
      "Please upload a clear, high-resolution image with good lighting. Better quality photos produce more detailed portraits.",
  },
  {
    id: 3,
    question: "Do you provide framing?",
    answer:
      "Yes. We offer premium Black, Brown, and Golden wooden frames that are ready to hang.",
  },
  {
    id: 4,
    question: "Can I request changes before delivery?",
    answer:
      "Absolutely. We provide minor revisions before final dispatch to ensure you're happy with the artwork.",
  },
  {
    id: 5,
    question: "Which payment methods are accepted?",
    answer:
      "We accept UPI, Credit/Debit Cards, Net Banking, Wallets, and Razorpay secure payments.",
  },
  {
    id: 6,
    question: "Do you deliver across India?",
    answer:
      "Yes. We provide secure doorstep delivery across India with protective packaging.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(1);

  const toggle = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section className="faq-section" id="faq">

      <div className="container">

        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>FAQ</span>

          <h2>
            Frequently Asked
            <span> Questions</span>
          </h2>

          <p>
            Everything you need to know before ordering your handmade portrait.
          </p>
        </motion.div>

        <div className="faq-list">

          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              className={`faq-item ${
                active === faq.id ? "active" : ""
              }`}
              layout
            >
              <button
                className="faq-question"
                onClick={() => toggle(faq.id)}
              >
                <span>{faq.question}</span>

                {active === faq.id ? (
                  <Minus size={22} />
                ) : (
                  <Plus size={22} />
                )}
              </button>

              <AnimatePresence>

                {active === faq.id && (
                  <motion.div
                    className="faq-answer"
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}

              </AnimatePresence>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}