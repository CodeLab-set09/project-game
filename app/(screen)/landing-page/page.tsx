
import React from "react";
import Hero from "./Hero";
import Sharpencomp from "./Sharpencomp";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./section5";
import { MainHero } from "./MainHero";
import { LogoCarouselPage } from "./LogoCarouselPage";


const page = () => {
  return (
    <main className="w-full h-full">
      <MainHero />
       <div className="max-w-[1440px] m-auto flex justify-center  items-center flex-col  ">
      <Sharpencomp />
      <Section3 />
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
        <Banner />
        <Navbar />
        <Hero />
        <LogoTicker />

        <Features />

      <Section4 />
      <LogoCarouselPage/>
    </div>
    </main>
  );
};
        <ProductShowcase />
        <FAQs />
        <Pricing />

        <CallToAction />
      </div>
      <Footer />
    </>
  );
}
