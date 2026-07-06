import Navbar from "@/components/Navbar";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";

import {
  SEO,
  ScrollProgress,
  FloatingButtons,
  CursorGlow,
  SectionTitle,
} from "@/components/Common";

import "./Order.css";

export default function Order() {
  return (
    <>
      <SEO
        title="Order Portrait | aveXni"
        description="Order your handmade pencil portrait online with aveXni."
      />

      <ScrollProgress />
      <CursorGlow />
      <FloatingButtons />

      <Navbar />

      <main className="order-page">

        <section className="order-hero">

          <div className="container">

            <SectionTitle
              badge="ORDER NOW"
              title="Create Your"
              highlight="Masterpiece"
              subtitle="Upload your favorite photo, choose your portrait size, and place your order in just a few simple steps."
            />

          </div>

        </section>

        <section className="order-form-section">

          <div className="container">

            <OrderForm />

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}