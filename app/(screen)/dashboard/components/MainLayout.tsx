"use client";

import React from "react";
import { useSelector } from "react-redux";

interface iProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: iProps) => {
  const toggled = useSelector((state: any) => state.toggle);

  console.log("Toggled: ", toggled);
  return (
    <div
      className={`w-[calc(100vw-60px)] 
        transition-all duration-300 md:w-[${
          toggled ? "calc(100vw-60px)" : "calc(100vw-150px)"
        }] flex`}
    >
      <main className=" min-h-[100vh] p-2 w-full flex justify-center  ">
        <div className="w-full  lg:max-w-[1300px] ">
          <div className="ml-3 p-2 border rounded-md h-full">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
