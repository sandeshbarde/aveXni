import "./Navbar.css";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Gallery", href: "#gallery" },
    { name: "How It Works", href: "#how" },
    { name: "Order", href: "#order" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">

        {/* Logo */}

        <a href="#home" className="logo">
          <img
            src="/images/logo/logo-white.svg"
            alt="aveXni Logo"
          />
        </a>

        {/* Navigation */}

        <nav className="nav-menu">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Side */}

        <div className="nav-actions">

          <button
            className="icon-btn"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="icon-btn cart"
            aria-label="Shopping Cart"
          >
            <ShoppingCart size={20} />
            <span className="cart-count">0</span>
          </button>

          <a
            href="#order"
            className="order-btn"
          >
            Order Now
          </a>

        </div>

        {/* Mobile Button */}

        <button
          className="menu-btn"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle Menu"
        >
          {mobileMenu ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}

      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenu(false)}
              >
                {link.name}
              </a>
            ))}

            <button
              className="icon-btn"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href="#order"
              className="order-btn"
              onClick={() => setMobileMenu(false)}
            >
              Order Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}