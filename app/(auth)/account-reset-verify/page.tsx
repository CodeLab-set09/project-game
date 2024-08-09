import Image from "next/image";
import Link from "next/link";
import React from "react";

import bg from "@/public/assets/down.png";
import left from "@/public/assets/left.png";
import right from "@/public/assets/right.png";

const Page = () => {
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
      </div>

      <main className="w-full h-full flex justify-center items-center ">
        <div className="min-h-[250px] max-w-[500px] flex flex-col rounded-md border justify-center items-center gap-5 p-4 ">
          <div className="flex justify-center items-center w-full ">
            <div className="w-full">
              <div className="flex items-center w-full justify-center mt-3 mb-8">
                <div className="flex flex-col items-center ">
                  <Image src={"/cbb.png"} alt="#" width={160} height={160} />
                </div>
              </div>
            </div>
          </div>
          <p className="font-extrabold text-[25px] text-center uppercase ">
            Verify Token for Password Reset
          </p>
          <p className="font-semibold text-[30px]">Verify Account</p>
          <p className="text-[16px] text-center ">
            An email has been sent to your email account
            <br />
            check email to verify
          </p>
        </div>
      </main>
    </div>
  );
};

export default Page;
