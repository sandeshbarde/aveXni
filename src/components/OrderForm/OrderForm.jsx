import { useState } from "react";
import { motion } from "framer-motion";
import {
  Upload,
  User,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Send,
} from "lucide-react";

import "./OrderForm.css";

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    portraitType: "Single",
    size: "A3",
    frame: "Black",
    message: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Order submitted successfully!");
  };

  return (
    <section className="order-form-section" id="order">

      <div className="container">

        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>ORDER NOW</span>

          <h2>

            Create Your

            <span> Portrait</span>

          </h2>

          <p>

            Upload your photo, choose your options,
            and place your order in minutes.

          </p>

        </motion.div>

        <motion.form
          className="order-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <div className="form-grid">

            {/* Name */}

            <div className="form-group">

              <label>

                <User size={18} />

                Full Name

              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>

            {/* Email */}

            <div className="form-group">

              <label>

                <Mail size={18} />

                Email

              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>

            {/* Phone */}

            <div className="form-group">

              <label>

                <Phone size={18} />

                Phone Number

              </label>

              <input
                type="tel"
                name="phone"
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={handleChange}
                required
              />

            </div>

            {/* Address */}

            <div className="form-group">

              <label>

                <MapPin size={18} />

                Address

              </label>

              <input
                type="text"
                name="address"
                placeholder="Delivery Address"
                value={formData.address}
                onChange={handleChange}
                required
              />

            </div>

            {/* Portrait Type */}

            <div className="form-group">

              <label>Portrait Type</label>

              <select
                name="portraitType"
                value={formData.portraitType}
                onChange={handleChange}
              >
                <option>Single</option>
                <option>Couple</option>
                <option>Family</option>
                <option>Pet</option>
              </select>

            </div>

            {/* Size */}

            <div className="form-group">

              <label>Portrait Size</label>

              <select
                name="size"
                value={formData.size}
                onChange={handleChange}
              >
                <option>A4</option>
                <option>A3</option>
                <option>A2</option>
                <option>A1</option>
              </select>

            </div>

            {/* Frame */}

            <div className="form-group">

              <label>Frame</label>

              <select
                name="frame"
                value={formData.frame}
                onChange={handleChange}
              >
                <option>None</option>
                <option>Black</option>
                <option>Brown</option>
                <option>Golden</option>
              </select>

            </div>

            {/* Upload */}

            <div className="form-group">

              <label>

                <Upload size={18} />

                Upload Photo

              </label>

              <input
                type="file"
                accept="image/*"
                name="image"
                onChange={handleChange}
              />

            </div>

          </div>

          {/* Notes */}

          <div className="form-group full-width">

            <label>

              <MessageSquare size={18} />

              Additional Notes

            </label>

            <textarea
              rows="5"
              name="message"
              placeholder="Special instructions..."
              value={formData.message}
              onChange={handleChange}
            />

          </div>

          <button
            type="submit"
            className="submit-btn"
          >

            <Send size={18} />

            Place Order

          </button>

        </motion.form>

      </div>

    </section>
  );
}