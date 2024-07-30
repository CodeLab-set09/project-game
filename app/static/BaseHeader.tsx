"use client";
import React, { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { MdCancel, MdMenu } from "react-icons/md";

const BaseHeader = () => {
  const navs = [
    { id: 0, name: "Blog", url: "/" },
    { id: 1, name: "About", url: "/" },
    { id: 2, name: "Directives", url: "/" },
  ];
  const [show, setShow] = useState(false);
  return (
    <main className="pb-20">
      <div className="flex h-[70px] w-[100%] fixed border-b justify-center items-center">
        <div className="w-[90%] flex  h-full items-center justify-between">
          <div className="flex gap-10 items-center">
            <div>Logo</div>
            <div className="md:flex gap-5 hidden">
              {navs.map((el: any) => (
                <Link
                  key={el.id}
                  className="text-[13px] font-normal text-neutral-500"
                  href={el.url}
                >
                  {el.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:flex gap-4 hidden">
            <button className="px-4 py-2 rounded-md text-[15px] font-semibold border">
              <Link href={"/signin"}> Log in</Link>
            </button>
            <button className="px-4 py-2 border-red-500 rounded-md text-[15px] font-semibold border">
              <Link href={"/signup"}>Join</Link>
            </button>
          </div>

          <div className="block md:hidden">
            {show ? (
              <MdCancel
                onClick={() => {
                  setShow(false);
                }}
                className="text-neutral-600 text-[30px]"
              />
            ) : (
              <MdMenu
                onClick={() => {
                  setShow(true);
                }}
                className="text-neutral-600 text-[30px]"
              />
            )}
          </div>
        </div>

        <div>
          {show && (
            <div
              className={`flex flex-col w-full  items-start bg-black px-6 py-5  h-[100vh] absolute top-[70px]  gap-5 md:hidden left-0 `}
            >
              {navs.map((el: any) => (
                <Link
                  key={el.id}
                  className="text-[14px] font-normal text-gray-400 hover:text-white hover:shadow-sm"
                  href={el.url}
                >
                  {el.name}
                </Link>
              ))}

              <button className="px-4 py-2 text-white w-full  text-[15px] font-medium border-[1.7px] rounded-md border-white">
                <Link href={"/signin"}> Log in</Link>
              </button>
              <button className="px-4 py-2 text-white w-full rounded-md text-[15px] font-medium border-[1.7px] border-red-600">
                <Link href={"/signup"}>Join</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default BaseHeader;
