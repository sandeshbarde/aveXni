import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  Upload,
  Image,
  CreditCard,
  Truck,
  CheckCircle,
} from "lucide-react";

import "./HowItWorks.css";

const steps = [
  {
    id: 1,
    icon: <Image size={42} />,
    title: "Choose Your Portrait",
    description:
      "Select your preferred portrait style, size, frame option, and orientation.",
  },
  {
    id: 2,
    icon: <Upload size={42} />,
    title: "Upload Your Photo",
    description:
      "Upload a clear, high-quality photo for the artist.",
  },
  {
    id: 3,
    icon: <CreditCard size={42} />,
    title: "Confirm Your Order",
    description:
      "Pay securely using UPI, Cards, Net Banking, or Wallet.",
  },
  {
    id: 4,
    icon: <Truck size={42} />,
    title: "Handmade & Delivered",
    description:
      "Your portrait is handmade and delivered safely.",
  },
];

const benefits = [
  "Handcrafted by Professional Artists",
  "Free Photo Quality Check",
  "Secure Protective Packaging",
  "Live Order Tracking",
  "Dedicated Customer Support",
  "Satisfaction Guaranteed",
];

export default function HowItWorks() {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <section className="how-it-works" id="how">
      <div className="container">

        <div className="steps">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              className="step-card"
              onClick={step.id === 2 ? handleUploadClick : undefined}
              style={{
                cursor: step.id === 2 ? "pointer" : "default",
              }}
              whileHover={{ y: -10 }}
            >
              <div className="step-number">{step.id}</div>

              <div className="step-icon">{step.icon}</div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

              {step.id === 2 && fileName && (
                <p
                  style={{
                    marginTop: 15,
                    color: "#F59E0B",
                    fontWeight: 600,
                  }}
                >
                  📷 {fileName}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />

        <div className="benefits">
          {benefits.map((item) => (
            <div key={item} className="benefit-item">
              <CheckCircle size={20} />
              <span>{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}