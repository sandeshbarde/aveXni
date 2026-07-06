/**
 * Upload Image Utility
 *
 * Uploads an image to your backend using FormData.
 *
 * @param {File} file
 * @param {string} endpoint
 * @returns {Promise<Object>}
 */

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000/api";

export default async function uploadImage(
  file,
  endpoint = "/upload"
) {
  if (!file) {
    throw new Error("No file selected.");
  }

  const allowedTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
  ];

  if (!allowedTypes.includes(file.type)) {
    throw new Error(
      "Only JPG, PNG and WEBP images are allowed."
    );
  }

  const maxSize = 10 * 1024 * 1024;

  if (file.size > maxSize) {
    throw new Error(
      "Image size must be less than 10MB."
    );
  }

  const formData = new FormData();

  formData.append("image", file);

  const token = localStorage.getItem("token");

  try {
    const response = await fetch(
      `${API_URL}${endpoint}`,
      {
        method: "POST",

        headers: {
          ...(token && {
            Authorization: `Bearer ${token}`,
          }),
        },

        body: formData,
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Upload failed."
      );
    }

    return data;
  } catch (error) {
    console.error(
      "Upload Error:",
      error.message
    );

    throw error;
  }
}