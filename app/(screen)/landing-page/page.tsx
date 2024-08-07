import React from "react";
import Hero from "./Hero";
import Sharpencomp from "./Sharpencomp";
import Section3 from "./Section3";
import Section4 from "./Section4";
import { MainHero } from "./MainHero";

const page = () => {
  return (
    <div>
      <MainHero />
      <Hero />
      <Sharpencomp />
      <Section3 />
      <Section4 />
    </div>
  );
};

export default page;
