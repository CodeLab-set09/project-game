"use client";

import { onToggled } from "@/app/global/redux";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { HiOutlineLightBulb, HiLightBulb } from "react-icons/hi";
import { FaRunning } from "react-icons/fa";
import { PiPersonSimpleRunBold } from "react-icons/pi";
import { IoLogoDiscord } from "react-icons/io5";

const SideBar = () => {
  const toggled = useSelector((state: any) => state.toggle);
  const dispatch = useDispatch();

  const training = [
    { id: 1, name: "pratice", icon: <FaRunning /> },
    { id: 2, name: "freestyle sparring", icon: <PiPersonSimpleRunBold /> },
  ];

  // const community = [
  //   {id:1, name: "Leaderboards", icon: },
  //   {id:2, name: "Chat", icon: <IoLogoDiscord />},
  //   {id:3, name: "Discussions", icon:}
  // ]

  return (
    <main
      className={`w-[60px] lg:w-[100px] md:w-[${
        toggled ? "60px" : "150px"
      }] transition-all duration-300 h-[100vh] border-r bg-slate-100 flex flex-col pt-5
        
        `}
    >
      <section className=" flex flex-col justify-center items-center gap-2">
        <p className="flex gap-2 items-center">
          <HiOutlineLightBulb className="lg:hidden" />
          <span className="hidden lg:flex ">blog</span>
        </p>

        <p> {toggled ? "" : "SideBar"} </p>
      </section>
      <section className="flex flex-col justify-center items-center gap-5 mt-3">
        <div>
          <span className="w-5 h-5 text-[10px] lg:hidden rounded-full bg-green-600 flex items-center justify-center">
            T
          </span>
          <span className="hidden lg:flex px-7 text-[12px] font-bold">
            TRAINING
          </span>
        </div>
        {training.map((el: any) => (
          <div className="" key={el.id}>
            <div className="flex gap-2">
              <div className="text-[28px] font-bold lg:hidden "> {el.icon}</div>
              <p className="hidden lg:flex text-[12px] items-center justify-center">
                {el.name}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default SideBar;
