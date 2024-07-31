"use client";
import React, { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { MdCancel, MdMenu } from "react-icons/md";
import Image from "next/image";

const BaseHeader = () => {
  const navs = [
    { id: 0, name: "Blog", url: "/landing-page/blog" },
    { id: 1, name: "About", url: "/" },
    { id: 2, name: "Directives", url: "/" },
  ];
  const [show, setShow] = useState(false);
  return (
    <main className="pb-16 ">
      <div className="flex h-[70px] w-[100%] fixed bg-white border-b justify-center items-center">
        <div className="w-[100%] p-5 md:px-16 flex  h-full items-center justify-between">
          <div className="flex gap-20 items-center">
            <div>
              <Image src={"/cbb.png"} alt="#" width={160} height={160} />
            </div>
            <div className="md:flex gap-5 hidden">
              {navs.map((el: any) => (
                <Link
                  key={el.id}
                  className="text-[14px] font-normal text-neutral-500"
                  href={el.url}
                >
                  {el.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:flex gap-4 hidden">
            <button className="px-4 py-2 rounded-md text-[15px] font-semibold border text-black">
              <Link href={"/signin"}> Log in</Link>
            </button>
            <button className="px-4 py-2 border-red-500 rounded-md text-[15px] font-semibold border text-black">
              <Link href={"/signup"}>Join</Link>
            </button>
          </div>

          <div className="block md:hidden">
            {show ? (
              <MdCancel
                onClick={() => {
                  setShow(false);
                }}
                className="text-neutral-600 text-[30px] cursor-pointer"
              />
            ) : (
              <MdMenu
                onClick={() => {
                  setShow(true);
                }}
                className="text-neutral-600 text-[30px] cursor-pointer"
              />
            )}
          </div>
        </div>

        <div>
          {show && (
            <div
              className={`flex flex-col w-full  items-start bg-black px-6 py-5  h-[100vh] absolute top-[70px]   gap-5 md:hidden left-0 `}
            >
              {navs.map((el: any) => (
                <Link
                  key={el.id}
                  className="text-[14px] mb-5 font-normal text-gray-400 hover:text-white hover:shadow-sm"
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
