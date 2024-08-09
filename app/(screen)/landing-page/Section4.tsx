import React from "react";
import Image from "next/image";
import Qualified from "../../../public/cbb.png";
const Section4 = () => {
  return (
    <div className="w-full mt-20 mb-20 flex justify-center items-center flex-wrap px-16">
      <div className=" section border  py-[60px] flex flex-col  justify-center items-center flex-wrap gap-12 bg-[#ffffff] rounded-[30px]  ">
        <Image
          src={Qualified}
          width={350}
          height={350}
          alt="sponsor image"
          className="logo md:max-w-70"
        />
        <p className="text font-medium text-[25px] text-black  text-center  md:font-light sm:font-light text-balance">
          Coding encorages creativity and persistence. you will learn to
          approach challenges with a growth mindset, experimenting with new
          solutions and iterating on your ideas.
        </p>
        <button className=" learn w-[200px] h-[50px] cursor-pointer rounded-sm border text-white bg-black font-normal flex-wrap hover:bg-slate ">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Section4;
