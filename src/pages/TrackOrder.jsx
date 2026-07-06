import Navbar from "@/components/Navbar";
import TrackOrderSection from "@/components/TrackOrder";
import Footer from "@/components/Footer";

import {
  SEO,
  ScrollProgress,
  CursorGlow,
  FloatingButtons,
  SectionTitle,
} from "@/components/Common";

import "./TrackOrder.css";

export default function TrackOrder() {
  return (
    <>
      <SEO
        title="Track Your Order | aveXni"
        description="Track the progress of your handmade portrait order."
      />

      <ScrollProgress />
      <CursorGlow />
      <FloatingButtons />

      <Navbar />

      <main className="track-page">

        {/* Hero */}

        <section className="track-hero">

          <div className="container">

            <SectionTitle
              badge="TRACK ORDER"
              title="Track Your"
              highlight="Portrait"
              subtitle="Enter your Order ID below to check the latest status of your handmade portrait."
            />

          </div>

        </section>

        {/* Track Order */}

        <section className="track-section">

          <div className="container">

            <TrackOrderSection />

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}