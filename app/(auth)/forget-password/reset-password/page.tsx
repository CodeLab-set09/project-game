"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

import bg from "@/public/assets/down.png";
import left from "@/public/assets/left.png";
import right from "@/public/assets/right.png";
import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";
import {
  MdEmail,
  MdPassword,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";
import { Spinner } from "@/app/static/Spinner";
import { toast } from "@/components/ui/use-toast";

const Page = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggleOn, setToggleOn] = useState<boolean>(false);

  const url = "http://localhost:3000/api/forget-password";
  const formAction = async (formData: FormData) => {
    const newPassword = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (newPassword === confirmPassword) {
      await fetch(url, {
        method: "PATCH",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify({ password: newPassword }),
      }).then(() => {
        redirect("/signin");
      });
    } else {
      toast({
        title: "error",
        description: "Password and confirm password most match",
      });
    }
  };
  return (
    <div className="relative w-full">
      <Image
        width={1000}
        height={1000}
        src={bg}
        alt="bg"
        className="w-full absolute bottom-0 h-[150px] -z-10"
      />
      <div className="absolute overflow-hidden w-[50%]  h-[200px] left-0 bottom-0">
        <Image
          width={1000}
          height={1000}
          src={left}
          alt="bg"
          className="h-[200px] object-contain w-full absolute  left-0 -bottom-10 "
        />
      </div>
      <div className="absolute  w-[50%] overflow-hidden h-[200px] right-0 bottom-0">
        <Image
          width={1000}
          height={1000}
          src={right}
          alt="bg"
          className="h-[280px] object-contain absolute right-0 -bottom-30 "
        />
      </div>
      <div className="z-50 flex justify-center items-center h-[100vh] w-full">
        <form
          action={formAction}
          className="w-[85%] md:w-[450px] shadow-sm items-center border p-3 rounded-md mt-5"
        >
          <div className="flex justify-center items-center w-full ">
            <div className="w-full">
              <div className="flex items-center w-full justify-center mt-3 mb-8">
                <div className="flex flex-col items-center ">
                  <Image src={"/cbb.png"} alt="#" width={160} height={160} />
                  <p className="mt-6 font-bold uppercase">
                    Change your Password
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex uppercase text-[12px] items-center justify-center gap-1 mt-5">
            <hr className="flex-1 bg-gray-300" />
            <p>Please provide a Password you can Remember</p>
            <hr className="flex-1 bg-gray-300" />
          </div>

          <div>
            <div className="mt-5 flex flex-col gap-4">
              {toggleOn ? (
                <div className="flex gap-2 p-1 px-3  items-center bg-gray-100 rounded-md h-[45px]">
                  <MdPassword className="text-[20px] text-slate-600" />
                  <input
                    className="outline-none bg-inherit placeholder:text-[14px] w-full "
                    type="password"
                    placeholder="New Password"
                    name="password"
                  />
                  <MdVisibility
                    className="cursor-pointer text-[20px] text-slate-600"
                    onClick={() => {
                      setToggleOn(!toggleOn);
                    }}
                  />
                </div>
              ) : (
                <div className="flex gap-2 p-1 px-3  items-center bg-gray-100 rounded-md h-[45px]">
                  <MdPassword className="text-[20px] text-slate-600" />
                  <input
                    className="outline-none bg-inherit placeholder:text-[14px] w-full "
                    type="text"
                    placeholder="New Password"
                    name="confirmPassword"
                  />
                  <MdVisibilityOff
                    className="cursor-pointer text-[20px] text-slate-600"
                    onClick={() => {
                      setToggleOn(!toggleOn);
                    }}
                  />
                </div>
              )}
              {toggleOn ? (
                <div className="flex gap-2 p-1 px-3  items-center bg-gray-100 rounded-md h-[45px]">
                  <MdPassword className="text-[20px] text-slate-600" />
                  <input
                    className="outline-none bg-inherit placeholder:text-[14px] w-full "
                    type="password"
                    placeholder="New Password"
                    name="confirmPassword"
                  />
                </div>
              ) : (
                <div className="flex gap-2 p-1 px-3  items-center bg-gray-100 rounded-md h-[45px]">
                  <MdPassword className="text-[20px] text-slate-600" />
                  <input
                    className="outline-none bg-inherit placeholder:text-[14px] w-full "
                    type="text"
                    placeholder="New Password"
                    name="password"
                  />
                </div>
              )}

              <Button
                disabled={toggle}
                type="submit"
                className="w-full mt-5 py-6 "
              >
                {toggle ? <Spinner /> : "Change Password"}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
