// src/pages/About.jsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";

import {
  SEO,
  ScrollProgress,
  CursorGlow,
  FloatingButtons,
  SectionTitle,
} from "@/components/Common";

import "./About.css";

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About | aveXni"
        description="Learn more about aveXni and our handcrafted portrait artworks."
      />

      <ScrollProgress />
      <CursorGlow />

      <Navbar />

      <main className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <SectionTitle
              title="About aveXni"
              subtitle="We transform your memories into beautiful handcrafted portrait artworks that last forever."
            />
          </div>
        </section>

        {/* About Content */}
        <section className="about-content">
          <div className="container">
            <div className="about-grid">
              <div className="about-card">
                <h2>Who We Are</h2>
                <p>
                  aveXni is a creative portrait art studio dedicated to turning
                  your favorite memories into stunning handmade portraits. Our
                  artists combine creativity, passion, and precision to create
                  premium artwork that you can proudly display.
                </p>
              </div>

              <div className="about-card">
                <h2>Our Mission</h2>
                <p>
                  Our mission is to preserve emotions through art. Every
                  portrait is carefully crafted with attention to every detail,
                  ensuring every customer receives a masterpiece they will
                  cherish forever.
                </p>
              </div>

              <div className="about-card">
                <h2>Why Choose Us?</h2>
                <ul>
                  <li>✔ Premium Quality Portraits</li>
                  <li>✔ Fast Delivery</li>
                  <li>✔ Affordable Pricing</li>
                  <li>✔ 100% Customer Satisfaction</li>
                  <li>✔ Secure Online Ordering</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <Features />

        {/* Testimonials */}
        <Testimonials />

        <FloatingButtons />
      </main>

      <Footer />
    </>
  );
}