import { useRef, useState } from "react";
import { Upload, ImagePlus, Trash2, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function UploadPhoto({
  onImageSelect,
}) {
  const inputRef = useRef(null);

  const [preview, setPreview] = useState(null);

  const handleFile = (file) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("Maximum image size is 10 MB.");
      return;
    }

    setPreview(URL.createObjectURL(file));

    if (onImageSelect) {
      onImageSelect(file);
    }
  };

  const handleChange = (e) => {
    handleFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();

    handleFile(e.dataTransfer.files[0]);
  };

  const removeImage = () => {
    setPreview(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }

    onImageSelect?.(null);
  };

  return (
    <div className="upload-wrapper">

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleChange}
      />

      {!preview ? (
        <motion.div
          className="upload-box"
          whileHover={{ scale: 1.02 }}
          onClick={() => inputRef.current.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <Upload size={60} />

          <h3>Upload Your Photo</h3>

          <p>
            Drag & Drop your image here
          </p>

          <span>or click to browse</span>

          <small>
            JPG • PNG • WEBP
            <br />
            Maximum 10 MB
          </small>

        </motion.div>
      ) : (
        <motion.div
          className="preview-card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >

          <img
            src={preview}
            alt="Preview"
          />

          <div className="preview-actions">

            <button
              type="button"
              onClick={() => inputRef.current.click()}
            >

              <ImagePlus size={18} />

              Change

            </button>

            <button
              type="button"
              className="delete-btn"
              onClick={removeImage}
            >

              <Trash2 size={18} />

              Remove

            </button>

          </div>

          <div className="upload-success">

            <CheckCircle size={18} />

            Image Uploaded Successfully

          </div>

        </motion.div>
      )}

    </div>
  );
}