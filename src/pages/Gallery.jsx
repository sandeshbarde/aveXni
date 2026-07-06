import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

import {
  SEO,
  ScrollProgress,
  FloatingButtons,
  CursorGlow,
  SectionTitle,
} from "@/components/Common";

import "./Gallery.css";

export default function GalleryPage() {
  return (
    <>
      <SEO
        title="Gallery | aveXni"
        description="Browse our collection of premium handmade pencil portraits."
      />

      <ScrollProgress />
      <CursorGlow />
      <FloatingButtons />

      <Navbar />

      <main className="gallery-page">

        {/* Hero */}

        <section className="gallery-hero">

          <div className="container">

            <SectionTitle
              badge="OUR GALLERY"
              title="Explore Our"
              highlight="Artwork"
              subtitle="Discover beautifully handcrafted portraits created with passion, precision, and premium-quality materials."
            />

          </div>

        </section>

        {/* Gallery */}

        <section className="gallery-section">

          <div className="container">

            <Gallery />

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}