"use client"

import Image from "next/image";
import LogoImage from "../assets/icons/logo.svg";
import MenuIcon from "../assets/icons/menu.svg";
import Link from "next/link";
import blog from "../../landing-page/blog/page";
import { MenuSquareIcon } from "lucide-react";
import { useState } from "react";
import { MdCancel, MdCancelPresentation, MdMenu } from "react-icons/md";
import logo from "../../../../public/cbb.png"

export const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false)
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="container bg-black">
          <div className="py-4 flex items-center justify-between">
            <div className="relative">
              {/* <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F7AABE,#B57CEC,#E472D1)] blur-md "></div> */}

              {/* <div className="h-10 w-10 relative mt-1"></div> */}
              <Image
                src={
                  logo
                }
                alt="/"
                width={1000}
                height={1000}
                className="h-12 w-full object-contain"
              />
            </div>
            <div className="border border-white  h-10 w-10 inline-flex justify-center items-center rounded-lg lg:hidden " >
            {toggle ? (
              <MdCancel
                onClick={() => {
                  setToggle(false);
                }}
                className="text-white text-[30px] cursor-pointer"
              />
            ) : (
              <MdMenu
                onClick={() => {
                  setToggle(true);
                }}
                className="text-white text-[30px] cursor-pointer"
              />
            )}
   <div className='flex justify-end'>
          {toggle && (
            <div
              className={`flex flex-col w-[230px] items-start bg-black px-6 py-5  h-[300px]  gap-10 z-50 relative top-44 right-24 `}
            >
            
              <a
                href="/landing-page/About"
                className="text-opacity-60 text-white hover:text-opacity-100 transition" onClick={() => {
                  setToggle(false);
                }}
              >
                About
              </a>
              <a
                href="/landing-page/blog"
                className="text-opacity-60 text-white hover:text-opacity-100 transition" onClick={() => {
                  setToggle(false);
                }}
              >
                Blog
              </a>
              <a
                href="#"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"onClick={() => {
                  setToggle(false);
                }}
              >
                Directives
              </a>

              <Link href={"/signup"}>
                <button className="w-full flex bg-white py-2 px-4 rounded-sm text-black" onClick={() => {
                    setToggle(false);
                  }}>
                  Get for free
                </button>
              </Link>

            </div>
          )}
        </div>
            </div>
            <nav className="text-white gap-6 items-center hidden lg:flex">
              <a
                href="/landing-page/About"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                About
              </a>
              <a
                href="/landing-page/blog"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Directives
              </a>

              <Link href={"/signup"}>
                <button className="bg-white py-2 px-4 rounded-lg text-black">
                  Get for free
                </button>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
