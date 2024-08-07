import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Sharpencomp = () => {
  return (
    <main className="px-5 w-[100%] min-h-[500px] md:w-full md:h-[calc(100vh-170px)]  md:flex md:justify-center md:items-center mt-5 md:px-0">
      <section className=" grid grid-cols-1 h-[630px] w-full md:grid md:grid-cols-4 md:w-[92%] md:h-full rounded-[50px] border ">
        <div className="px-5 mt-10 md:col-span-2  md:px-14 md:my-24">
          <div className="">
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
            <div className="mb-8 mt-5 md:mt-12 px-1">
              <Button>Join the team</Button>
            </div>
          </div>
        </div>
        <div className="px-5 md:w-full md:col-span-2 md:my-24 md:px-0">
          <Image
            src={"/sharpbg.jpg"}
            alt="#"
            width={1000}
            height={1000}
            className=" object-cover "
          />
        </div>
      </section>
    </main>
  );
};

export default Sharpencomp;
