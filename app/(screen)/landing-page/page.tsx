import { Banner } from "../(display)/components/Banner";
import { CallToAction } from "../(display)/components/CallToAction";
import { FAQs } from "../(display)/components/FAQs";
import { Features } from "../(display)/components/Features";
import { Footer } from "../(display)/components/Footer";
import { Hero } from "../(display)/components/Hero";
import { LogoTicker } from "../(display)/components/LogoTicker";
import { Navbar } from "../(display)/components/Navbar";
import { Pricing } from "../(display)/components/Pricingdemo";
import { ProductShowcase } from "../(display)/components/ProductShowcase";

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        {/* <Banner /> */}
        <Navbar />
        <Hero />
        <LogoTicker />

        <Features />

        <ProductShowcase />
        <FAQs />
        <Pricing />

        <CallToAction />
      </div>
      <Footer />
    </>
  );
}
