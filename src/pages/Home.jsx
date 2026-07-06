import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import SizeGuide from "@/components/SizeGuide";
import PriceCalculator from "@/components/PriceCalculator";
import Gallery from "@/components/Gallery";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import {
  SEO,
  ScrollProgress,
  FloatingButtons,
  CursorGlow,
} from "@/components/Common";

export default function Home() {
  return (
    <>
      <SEO
        title="aveXni | Handcrafted Memories, Drawn Forever"
        description="Premium handmade pencil portraits crafted with passion."
      />

      <ScrollProgress />
      <CursorGlow />
      <FloatingButtons />

      <Navbar />

      <main>
        <Hero />
        <Benefits />
        <Features />
        <HowItWorks />
        <SizeGuide />
        <PriceCalculator />
        <Gallery />
        <BeforeAfter />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}