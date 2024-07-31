"use client";
import React from "react";
import { Button } from "@/components/ui/button";

import bg from "@/public/assets/down.png";
import left from "@/public/assets/left.png";
import right from "@/public/assets/right.png";
import Image from "next/image";
import { redirect } from "next/navigation";

const Page = () => {
  const url = "http://localhost:3000/api/forget-password";
  const formAction = async (formData: FormData) => {
    const newPassword = formData.get("password");
    await fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ password: newPassword }),
    }).then(() => {
      redirect("/signin");
    });
  };
  return (
    <main className="flex justify-center items-center h-[90vh]">
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
      <div className="w-full h[calc(100vh-40px)] flex justify-center items-center">
        <section className="w-[70%] md:w-[80%] lg:w-[500px] p-2 rounded-md min-h-[260px] border">
          <p className="font-semibold uppercase text-center mt-10 pb-5 border-b">
            Password recovery
          </p>
          <form action={formAction}>
            <div className="flex flex-col mt-5">
              <label className="font-semibold text-[12px] mb-1">Password</label>
              <input
                placeholder="Enter new password"
                className="border rounded-md outline-none h-[45px] pl-2"
                type="text"
              />
            </div>
            <Button
              className="border rounded-md outline-none h-[45px] bg-black text-white w-[100%] mt-7"
              type="submit"
            >
              Verify Password
            </Button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Page;
