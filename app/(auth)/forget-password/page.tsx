"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { MdPassword } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast";
import { Spinner } from "@/app/static/Spinner";
import { signIn } from "next-auth/react";
import bg from "@/public/assets/down.png";
import left from "@/public/assets/left.png";
import right from "@/public/assets/right.png";
import { redirect } from "next/navigation";

const page = () => {
  const { toast } = useToast();
  const [toggle, setToggle] = useState<boolean>(false);

  const url = "http://localhost:3000/api/reset-password";

  const formAction = async (formData: FormData) => {
    setToggle(true);

    const email = formData.get("email");
    await fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ email }),
    })
      .then(() => {
        redirect("/account-reset-verify");
      })
      .finally(() => {
        setToggle(false);
      })
      .catch((errors) => {
        toast({ description: "Failed to send email, please try again." });
        console.error(errors);
      });

    // const timer = setTimeout(() => {
    //   setToggle(false);
    //   clearTimeout(timer);
    // }, 5000);

    // console.log(toggle);
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
                    Get your Password back
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex uppercase text-[12px] items-center justify-center gap-1 mt-5">
            <hr className="flex-1 bg-gray-300" />
            <p> Please provide your Email</p>
            <hr className="flex-1 bg-gray-300" />
          </div>

          <div>
            <div className="mt-5 flex flex-col gap-4">
              <div className="flex gap-2 p-1 px-3  items-center bg-gray-100 rounded-md h-[45px]">
                <MdPassword className="text-[20px] text-slate-600" />
                <input
                  className="outline-none bg-inherit placeholder:text-[14px] w-full "
                  type="text"
                  placeholder="Email"
                  name="email"
                />
                <MdPassword className="text-[20px] text-slate-600" />
              </div>

              <Link
                href="/signin"
                className="text-end  text-[12px] text-[#11192C] -mt-2 font-semibold italic"
              >
                I think i now Remember!
              </Link>

              <Button disabled={toggle} type="submit" className="mt-5 py-6 ">
                {toggle ? <Spinner /> : "Restrive Password"}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
