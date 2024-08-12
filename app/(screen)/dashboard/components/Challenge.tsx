"use client";
import { setCounter } from "@/app/global/redux";
import Link from "next/link";
import React from "react";
import { MdSearch, MdSettings } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const Challenge = () => {
  // const stage = useSelector((state: any) => state.stage);
  const index = useSelector((state: any) => state.index);
  const data = useSelector((state: any) => state.question);
  const pathName = useSelector((state: any) => state.paths);
  const dispatch = useDispatch();
  const mainLevel = pathName?.split("javascript/")[1]?.split("/");
  mainLevel?.pop();

  const val = data[index];
  const qVa = val?.instruction?.replaceAll("<p>", "");
  const vals = qVa?.replaceAll("</p>", "");
  const counter = useSelector((state: any) => state.counter);
  if (counter > 3) {
    dispatch(setCounter(1));
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 px-1  md:p-2 h-[270px]">
      <div className="col-span-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-t-md md:rounded-tr-none md:rounded-l-md p-4 flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <h1 className="text-[14px] font-semibold text-white">
            Challenge History
          </h1>
          <MdSettings className="text-white" />
        </div>

        <div className="flex flex-col gap-3">
          <select className="text-[#4d4c4c]  font-semibold text-[15px] bg-[#49414922] w-full outline-none h-[30px] rounded-sm px-2">
            <option>JavaScript</option>
            <option>HTML</option>
            <option>CSS</option>
            <option>REACT</option>
            <option>TAILWIND</option>
          </select>
          <p className="text-[#ffffff] text-[15px] bg-[#49414922] w-full outline-none h-[30px] rounded-sm px-2 flex items-center font-bold">
            {mainLevel[0]?.split("-")?.join(" ")?.toUpperCase()}
          </p>
        </div>
        <div className="flex gap-3 justify-center">
          <Link
            href={pathName}
            className="text-[13px] rounded-md bg-[#eea079] flex items-center justify-center px-2 py-1 font-light  "
          >
            RESUME
          </Link>
          <button className="text-[13px] rounded-md border flex items-center justify-center px-2 py-1 font-light  ">
            RESTART
          </button>
        </div>

        <div className="w-full flex gap-1 items-center justify-center cursor-pointer">
          <MdSearch className="text-[14px]" />
          <h1 className="text-[12px]">Search</h1>
        </div>
      </div>

      <div className="col-span-2 flex  flex-col gap-3 bg-neutral-700 text-white md:rounded-r-md md:rounded-bl-none rounded-b-md p-3">
        <div className="flex gap-2">
          {mainLevel?.map((el: any) => (
            <p className="capitalize py-1 px-4 mt-2 text-[12px] font-bold rounded-full bg-orange-500 [&:nth-child(2)]:bg-purple-600 [&:nth-child(3)]:bg-red-600 text-white">
              {el.split("-").join(" ")}
            </p>
          ))}
          <p className="capitalize py-1 px-4 mt-2 text-[12px] font-bold rounded-full bg-orange-500 [&:nth-child(2)]:bg-purple-600 [&:nth-child(3)]:bg-red-600 text-white">
            Question {counter}
          </p>
        </div>

        <div className="flex flex-col gap-1 ">
          <h1 className="text-[13px] font-medium leading-6 h-[150px] overflow-x-auto">
            {vals}
          </h1>
          <div className="flex gap-1 items-end">
            {val?.tag?.map((el: any, id: number) => (
              <button
                key={id}
                className="px-2 py-1 text-[12px] bg-[#0c0c0b22] rounded-md font-light"
              >
                {el}
              </button>
            ))}

            {/* <button className="px-2 py-1 text-[12px] bg-[#0c0c0b22] rounded-md font-light">
              Fundamentals
            </button>
            <button className="px-2 py-1 text-[12px] bg-[#0c0c0b22] rounded-md font-light">
              Algorithms
            </button>
            <button className="px-2 py-1 text-[12px] bg-[#0c0c0b22] rounded-md font-light">
              Arrays
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
