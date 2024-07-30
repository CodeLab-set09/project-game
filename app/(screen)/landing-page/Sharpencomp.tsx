import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Sharpencomp = () => {
  return (
    <main className="w-[100%] h-[500px] md:w-full md:h-[calc(100vh-180px)] md:flex md:justify-center md:items-center bg-green-500 ">
      <section className="grid grid-cols-1 h-full md:grid md:grid-cols-4 w-full md:h-full  rounded-[50px]">
        <div className="md:col-span-2 bg-pink-400 px-8">
          <div className="mt-16">
            <Image
              src={"/cbb.png"}
              alt="#"
              width={1000}
              height={1000}
              className="w-40  object-contain"
            />
            <div className="mt-8">
              <p className="font-bold text-[30px]">
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
            <div className="mt-16">
              <Button>Join the team</Button>
            </div>
          </div>
        </div>
        <div className="col-span-2 bg-pink-600">
          <Image
            src={"/cbb.png"}
            alt="#"
            width={1000}
            height={1000}
            className=" object-cover"
          />
        </div>
      </section>
    </main>
  );
};

export default Sharpencomp;
