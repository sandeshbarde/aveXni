/**
 * Download an image or file.
 *
 * @param {string} url - Image/File URL
 * @param {string} filename - Download filename
 */

export default async function downloadImage(
  url,
  filename = "image"
) {
  if (!url) {
    throw new Error("Image URL is required.");
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to download image.");
    }

    const blob = await response.blob();

    const objectUrl =
      window.URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = objectUrl;

    link.download = filename;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    window.URL.revokeObjectURL(objectUrl);

    return true;
  } catch (error) {
    console.error(
      "Download Error:",
      error
    );

    return false;
  }
}