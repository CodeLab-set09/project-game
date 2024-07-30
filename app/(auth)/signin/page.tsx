import { Button } from "@/components/ui/button";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const page = () => {
  return (
    <main className="w-full h-[607px] flex items-center justify-center bg-red-500">
      <section className="w-[450px] h-[550px] bg-white flex flex-col items-center">
        <div className="mt-16 leading-5">
          <div className="w-[220px] h-[40px] bg-gray-500">hgfvjyh</div>
          <p className="text-[14px] font-light ml-[65px]">powered by</p>
          <p className="font-bold text-[25px] ml-[50px]">CodeLab</p>
        </div>
        <div className="mt-16 gap-3 flex px-3">
          <Button
            variant={"outline"}
            className="px-6 py-4 flex justify-center items-center gap-2"
          >
            <FaGithub className="text-[20px]" /> sign in with github
          </Button>
          <Button
            variant={"outline"}
            className="px-6 py-4 flex justify-center items-center gap-2"
          >
            <FcGoogle className="text-[20px]" />
            sign in with google
          </Button>
        </div>
        <div className="flex justify-center items-center gap-3 mt-10">
          <hr className="w-48  bg-gray-500" />
          <p>or</p>
          <hr className="w-48  bg-gray-500" />
        </div>
        <div className="mt-6 flex flex-col gap-5">
          <input
            type="text"
            placeholder="Email"
            className="w-[400px] h-10 bg-gray-300 outline-none border rounded-md px-3"
          />
          <input
            type="text"
            placeholder="Password"
            className="w-[400px] h-10 bg-gray-300 outline-none border rounded-md px-3"
          />
        </div>
      </section>
    </main>
  );
};

export default page;
