"use client";
import Bentodemo from "./bentogrid";

export const Features = () => {
  return (
    <div className="bg-black w-full text-white py-[50px] sm:py-24 ">
      <div className="container">
        <h2 className="text-center font-bold text-[200px] sm:text-6xl tracking-tighter">
          Everything you need{" "}
        </h2>
        <div className="max-w-[700px] mx-auto">
          <p className="w-full text-center mt-5 text-xl text-white/70">
            A graphic illustration of a coding battlefield, with code snippets
            and programming language represented as weapons and armor. Complete
            coding tasks and exercise to improve your coding skill.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row gap-4 mt-32">
          <Bentodemo />
        </div>
      </div>
    </div>
  );
};
