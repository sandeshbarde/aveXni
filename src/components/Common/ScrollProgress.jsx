import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./ScrollProgress.css";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop;

      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percent =
        scrollHeight > 0
          ? (scrollTop / scrollHeight) * 100
          : 0;

      setProgress(percent);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <motion.div
      className="scroll-progress"
      initial={{ scaleX: 0 }}
      animate={{
        scaleX: progress / 100,
      }}
      transition={{
        duration: 0.15,
        ease: "linear",
      }}
    />
  );
}