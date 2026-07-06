import { useEffect } from "react";

export default function SEO({
  title = "aveXni | Handcrafted Memories, Drawn Forever",
  description = "Premium handmade pencil portraits, custom sketches, couple portraits, family portraits, pet portraits, and personalized gifts.",
  keywords = "handmade portrait, pencil sketch, custom portrait, couple portrait, family portrait, pet portrait, aveXni",
  author = "aveXni",
  image = "/images/og-image.webp",
  url = window.location.href,
}) {
  useEffect(() => {
    // Page Title
    document.title = title;

    // Helper
    const setMeta = (name, value, property = false) => {
      const selector = property
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;

      let tag = document.head.querySelector(selector);

      if (!tag) {
        tag = document.createElement("meta");

        if (property) {
          tag.setAttribute("property", name);
        } else {
          tag.setAttribute("name", name);
        }

        document.head.appendChild(tag);
      }

      tag.setAttribute("content", value);
    };

    // Standard SEO
    setMeta("description", description);
    setMeta("keywords", keywords);
    setMeta("author", author);

    // Open Graph
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:image", image, true);
    setMeta("og:url", url, true);
    setMeta("og:type", "website", true);

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);
  }, [
    title,
    description,
    keywords,
    author,
    image,
    url,
  ]);

  return null;
}