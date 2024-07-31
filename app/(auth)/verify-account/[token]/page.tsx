"use client";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
// import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
// import { JSON_SECRET } from "@/utils/constant";
import { toast } from "@/components/ui/use-toast";
import Image from "next/image";

import bg from "@/public/assets/down.png";
import left from "@/public/assets/left.png";
import right from "@/public/assets/right.png";

const page = ({ params }: any) => {
  const { token }: any = params;
  const { id }: any = jwtDecode<any>(token);
  const [state, setState] = useState<any>();

  const verifyAccount = async () => {
    return await fetch(`/api/vevrify-account/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ verifyToken: state }),
    })
      .then(async (res) => {
        return await res.json();
      })
      .then((res) => {
        if (res.status === 201) {
          return redirect("/signin");
        } else {
          toast({
            title: "Error with Verification Token",
            description: "This token is invalid",
          });
        }
      });
  };

  return (
    <div className="relative w-full h-screen">
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
      </div>{" "}
      <main className="w-full h-[500px] flex justify-center items-center ">
        <div className="min-h-[230px] w-[300px] md:w-[400px] flex flex-col rounded-md border items-center gap-5 p-4 ">
          <p className="font-semibold text-[30px]">Verify Token</p>
          <div className="w-full p-3 flex flex-col  gap-2 justify-center">
            <p className="font-semibold text-[16px]">Input token</p>
            <InputOTP
              maxLength={6}
              value={state}
              onChange={(value: any) => setState(value)}
            >
              <InputOTPGroup className="w-[50px] md:w-[100px]">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup className="w-[50px] md:w-[100px]">
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup className="w-[50px] md:w-[100px]">
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>

            <button
              className="w-[100px] h-[40px] rounded-md bg-neutral-700 hover:bg-neutral-600 text-white mt-4 "
              onClick={() => {
                console.log(state);
              }}
            >
              Verify
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
