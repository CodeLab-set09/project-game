"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const QuestionScreen = ({
  level,
  args,
  tags,
  instruction,
  example,
  usecase,
}: any) => {
  const stateStage = usePathname();
  const mainLevel = stateStage.split("main-screen/")[1].split("/");

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (tags?.length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [loading]);
  const choose = Math.floor(Math.random() * usecase?.length);
  return (
    <main>
      <div className=" items-center h-[30px]">
        <div className="flex items-center gap-3">
          {mainLevel?.map((el: any) => (
            <p className="capitalize py-1 px-4 mt-2 text-[12px] font-bold rounded-full bg-orange-500 [&:nth-child(2)]:bg-purple-600 [&:nth-child(3)]:bg-red-600 text-white">
              {el}{" "}
            </p>
          ))}
        </div>
        <p className="font-bold mt-2">String ends with?</p>
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
            {loading ? (
              <div>
                <div className="w-[100%] h-[10px] bg-slate-400 animate-pulse mt-1 mb-2" />
                <div className="w-[60%] h-[10px] bg-slate-400 animate-pulse" />
              </div>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: instruction }} />
            )}
          </div>
          <p className="mt-5">Example: </p>
          <div className="mt-5 bg-[#282A36] min-h-[100px] rounded-md shadow-lg">
            <CopyBlock
              text={example}
              language="text"
              showLineNumbers
              theme={dracula}
              //   codeBlock
            />
          </div>

          <div className="flex">
            <p className="gap-2 flex flex-wrap text-[12px] mt-2  ">
              {tags?.map((el: string, i: number) => (
                <div
                  key={i}
                  className="px-4 py-1 bg-neutral-600 rounded-[2px] opacity-50"
                >
                  {el.trim()}
                </div>
              ))}
            </p>
          </div>
          <div className="flex">
            <p className="mt-6 border-b pb-1">Use Cases:</p>
          </div>
          <div className="mt-8 mb-3 text-[12px] tracking-[0.18rem] font-thin">
            {usecase && usecase[choose ? choose : 0]}
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
