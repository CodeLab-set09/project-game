import React from "react";
import Hero from "../Hero";
import Sharpencomp from "../Sharpencomp";
import Section3 from "../Section3";
import Section4 from "../Section4";

import Section5 from "../section5";

import { MainHero } from "../MainHero";

const page = () => {
  return (
    <main className="w-full h-full">
      <MainHero />
      <div className="max-w-[1440px] m-auto">
        <Sharpencomp />
        <Section3 />

        <Section5 />

        <Section4 />
      </div>
    </main>
  );
};

export default page;
