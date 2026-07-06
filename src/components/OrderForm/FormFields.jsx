import {
  User,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
} from "lucide-react";

export default function FormFields({
  formData,
  handleChange,
}) {
  return (
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

          Email Address

        </label>

        <input
          type="email"
          name="email"
          placeholder="example@email.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

      </div>

      {/* Phone */}

      <div className="form-group">

        <label>

          <Phone size={18} />

          Mobile Number

        </label>

        <input
          type="tel"
          name="phone"
          placeholder="+91 9876543210"
          value={formData.phone}
          onChange={handleChange}
          required
        />

      </div>

      {/* Address */}

      <div className="form-group">

        <label>

          <MapPin size={18} />

          Delivery Address

        </label>

        <textarea
          name="address"
          rows="3"
          placeholder="Enter your complete delivery address"
          value={formData.address}
          onChange={handleChange}
          required
        />

      </div>

      {/* Portrait Type */}

      <div className="form-group">

        <label>

          Portrait Type

        </label>

        <select
          name="portraitType"
          value={formData.portraitType}
          onChange={handleChange}
        >

          <option value="Single">
            Single Portrait
          </option>

          <option value="Couple">
            Couple Portrait
          </option>

          <option value="Family">
            Family Portrait
          </option>

          <option value="Pet">
            Pet Portrait
          </option>

        </select>

      </div>

      {/* Size */}

      <div className="form-group">

        <label>

          Portrait Size

        </label>

        <select
          name="size"
          value={formData.size}
          onChange={handleChange}
        >

          <option value="A4">A4</option>

          <option value="A3">A3</option>

          <option value="A2">A2</option>

          <option value="A1">A1</option>

        </select>

      </div>

      {/* Frame */}

      <div className="form-group">

        <label>

          Frame Type

        </label>

        <select
          name="frame"
          value={formData.frame}
          onChange={handleChange}
        >

          <option value="None">
            No Frame
          </option>

          <option value="Black">
            Black Frame
          </option>

          <option value="Brown">
            Brown Frame
          </option>

          <option value="Golden">
            Golden Frame
          </option>

        </select>

      </div>

      {/* Notes */}

      <div className="form-group full-width">

        <label>

          <MessageSquare size={18} />

          Special Instructions

        </label>

        <textarea
          name="message"
          rows="5"
          placeholder="Write your special instructions here..."
          value={formData.message}
          onChange={handleChange}
        />

      </div>

    </div>
  );
}