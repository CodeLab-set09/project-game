"use client";

import { onToggled } from "@/app/global/redux";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { HiOutlineLightBulb, HiLightBulb } from "react-icons/hi";

const SideBar = () => {
  const toggled = useSelector((state: any) => state.toggle);
  const dispatch = useDispatch();

  return (
    <div
      className={`w-[60px] md:w-[${
        toggled ? "60px" : "150px"
      }] transition-all duration-300 h-[100vh] border-r bg-slate-100
        
        `}
    >
      <div className="p-5">
        {toggled ? (
          <HiOutlineLightBulb
            className="text-[30px] text-slate-900 hover:text-slate-500 cursor-pointer transition-all duration-300"
            onClick={() => dispatch(onToggled())}
          />
        ) : (
          <HiLightBulb
            className="text-[30px] text-slate-900 hover:text-slate-500 cursor-pointer transition-all duration-300"
            onClick={() => dispatch(onToggled())}
          />
        )}
      </div>
      SideBar
    </div>
  );
};

export default SideBar;
