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
        <div className="h-[220px] w-[400px] flex flex-col rounded-md border justify-center items-center gap-5 p-4 ">
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
