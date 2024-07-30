import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Sharpencomp = () => {
  return (

    <main className="w-[100%] h-[500px] md:w-full md:h-[calc(100vh-170px)]  md:flex md:justify-center md:items-center mt-5">
      <section className="grid grid-cols-1 h-full w-full md:grid md:grid-cols-4 md:w-[90%] md:h-full  rounded-[50px] border ">
        <div className="px-5 md:col-span-2  md:px-14">

          <div className="mt-16">
            <Image
              src={"/cbb.png"}
              alt="#"
              width={1000}
              height={1000}
              className="w-40  object-contain"
            />
            <div className="mt-8 px-1">
              <p className=" font-bold text-[30px]">

                Sharpen Your Coding Skills
              </p>
              <p className="font-extralight text-[13px] mt-3 leading-6">
                Challenge yourself on small coding exercises called "kata".{" "}
                <br />
                Each kata is crafted by the community to help you strengthen{" "}
                <br />
                different coding techniques.
              </p>
            </div>
            <div className="mb-3 mt-16 px-1">

              <Button>Join the team</Button>
            </div>
          </div>
        </div>
        <div className="w-full md:col-span-2">
          <Image
            src={"/sharpbg.jpg"}
            alt="#"
            width={1000}
            height={1000}
            className="pl-1  mb-5  object-cover md:mt-[85px] "

          />
        </div>
      </section>
    </main>
  );
};

export default Sharpencomp;
