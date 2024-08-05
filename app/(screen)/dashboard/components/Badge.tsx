import React from "react";
import { FaAward } from "react-icons/fa";

const Badge = () => {
  return (
    <div className="grid grid-cols-3 gap-1 px-2">
      <div className="col-span-2 bg-gradient-to-r from-[#333232] to-[#404040]  rounded-md p-3 flex gap-3 items-center h-[150px]">
        <FaAward className="text-[80px] text-[#bebcbc]" />
        <div className="flex flex-col gap-3 text-white">
          <div className="leading-tight">
            <h1 className="text-[16px]  font-semibold">
              JavaScrip Array Methods
            </h1>
            <p className="text-[11px] font-light">
              Honor is earned for each new codewarrior who joins.
            </p>
          </div>
          <div>
            <button className="px-3 py-2 hover:bg-[#2d2d2d] hover:border-[#2d2d2d] transition-all duration-300 border text-[12px] font-medium rounded-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-1 rounded-md bg-[#333232] flex justify-center items-center">
        ADS
      </div>
    </div>
  );
};

export default Badge;
