import { CreditCard, ShieldCheck, Smartphone, Wallet } from "lucide-react";
import { motion } from "framer-motion";

export default function PaymentSection({
  paymentMethod,
  setPaymentMethod,
}) {
  const methods = [
    {
      id: "upi",
      title: "UPI",
      icon: <Smartphone size={28} />,
      description: "Google Pay, PhonePe, Paytm",
    },
    {
      id: "card",
      title: "Credit / Debit Card",
      icon: <CreditCard size={28} />,
      description: "Visa, MasterCard, RuPay",
    },
    {
      id: "wallet",
      title: "Wallet",
      icon: <Wallet size={28} />,
      description: "Paytm Wallet & Others",
    },
    {
      id: "razorpay",
      title: "Razorpay",
      icon: <ShieldCheck size={28} />,
      description: "100% Secure Payment",
    },
  ];

  return (
    <section className="payment-section">

      <h3>

        Choose Payment Method

      </h3>

      <div className="payment-grid">

        {methods.map((method) => (

          <motion.div
            key={method.id}
            className={`payment-card ${
              paymentMethod === method.id
                ? "active"
                : ""
            }`}
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
            onClick={() =>
              setPaymentMethod(method.id)
            }
          >

            <div className="payment-icon">

              {method.icon}

            </div>

            <h4>

              {method.title}

            </h4>

            <p>

              {method.description}

            </p>

          </motion.div>

        ))}

      </div>

      <div className="payment-info">

        <ShieldCheck size={20} />

        <span>

          All payments are encrypted and securely
          processed through Razorpay.

        </span>

      </div>

    </section>
  );
}