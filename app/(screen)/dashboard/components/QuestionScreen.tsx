"use client";

import React from "react";

import { CopyBlock, dracula } from "react-code-blocks";

const QuestionScreen = () => {
  return (
    <main>
      <div className="flex items-center h-[30px]">
        <p className="py-1 px-4 mt-2 text-[12px] font-bold rounded-full bg-orange-500 text-white">
          Level: 1{" "}
        </p>
        <p className="font-bold ml-3 mt-2">String ends with?</p>
      </div>

      <section className="mt-10">
        <div className="my-5">
          <hr />
        </div>
        <div className="flex">
          <div className="border text-[12px] font-bold rounded-md text-white bg-neutral-400 flex p-2">
            Instruction/Question
          </div>
        </div>

        <div className="mt-10 bg-neutral-700 text-white text-[15px] p-2 rounded-md pt-5">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit a cumque voluptates, id fugiat alias eaque ex itaque
            ducimus impedit nobis eos, minus expedita. Corporis ipsa dignissimos
            ab maiores odit.
          </div>

          <p className="mt-5">Example: </p>

          <div className="mt-5 bg-[#282A36] min-h-[100px] rounded-md shadow-lg">
            <CopyBlock
              text={`console.log("This is CodeBook")`}
              language="text"
              showLineNumbers
              theme={dracula}
              //   codeBlock
            />
          </div>

          <div className="flex">
            <p className="mt-6 border-b pb-1">Use Cases:</p>
          </div>

          <div className="mt-8 mb-3 text-[12px] tracking-[0.18rem] font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit a cumque voluptates, id fugiat alias eaque ex itaque
            ducimus impedit nobis eos, minus expedita. Corporis ipsa dignissimos
            ab maiores odit.
          </div>
        </div>
      </section>

      <div className="my-5">
        <hr />
      </div>

      <div className="flex">
        <a href="https://www.youtube.com/@GhettoDev01" target="_blank">
          <p className="cursor-pointer transition-all duration-300 hover:bg-slate-100 bg-slate-50 font-bold text-[12px] py-2 px-4">
            Get Tutorials
          </p>
        </a>
      </div>
    </main>
  );
};

export default QuestionScreen;
