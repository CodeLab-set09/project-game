"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { MdEmail, MdPassword } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast";
import { Spinner } from "@/app/static/Spinner";
import { signIn } from "next-auth/react";

const page = () => {
  const { toast } = useToast();
  const [toggle, setToggle] = useState<boolean>(false);

  const formAction = async (formData: FormData) => {
    setToggle(true);
    const email = formData.get("email");
    const password = formData.get("password");

    signIn("credentials", { email, password });
  };
  return (
    <div className=" bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] relative overflow-clip">
      <div className="absolute w-[750px] top- sm:w-[1536px] sm:h-[768px] lg:w-[2400px] llg:h-[800px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]" />
      {/* <Image
        width={1000}
        height={1000}
        src={
          "https://res.cloudinary.com/duewdl1ua/image/upload/v1723317841/down_ncbrxq.png"
        }
        alt="bg"
        className="w-full absolute bottom-0 h-[150px] -z-10"
      /> */}
      <div className="absolute overflow-hidden w-[50%]  h-[200px] left-0 bottom-0">
        <Image
          width={1000}
          height={1000}
          src={
            "https://res.cloudinary.com/duewdl1ua/image/upload/v1723317841/left_v68oln.png"
          }
          alt="bg"
          className="h-[200px] object-contain w-full absolute  left-0 -bottom-10 "
        />
      </div>
      <div className="absolute  w-[50%] overflow-hidden h-[200px] right-0 bottom-0">
        <Image
          width={1000}
          height={1000}
          src={
            "https://res.cloudinary.com/duewdl1ua/image/upload/v1723317841/right_jt1tub.png"
          }
          alt="bg"
          className="h-[280px] object-contain absolute right-0 -bottom-30 "
        />
      </div>{" "}
      <div className="z-50 flex justify-center items-center h-[100vh] w-full  ">
        <form
          action={formAction}
          className="w-[85%] md:w-[450px] shadow-sm items-center border p-3 rounded-md mt-5 z-10"
        >
          <div className="flex justify-center items-center w-full ">
            <div className="w-full">
              <div className="flex items-center w-full justify-center mt-3 mb-8">
                <div>
                  <Image
                    src={
                      "https://res.cloudinary.com/duewdl1ua/image/upload/v1722432802/codebook_white_l0et44.png"
                    }
                    alt="#"
                    width={160}
                    height={160}
                  />
                  <p className="mt-6 font-bold uppercase">
                    Log in Your Account
                  </p>
                </div>
              </div>
              <div className="flex justify-center gap-3">
                <div className="border p-2 rounded-md flex justify-center gap-2 items-center">
                  <BsGithub className="text-[55px]" />
                  {/* <h2 className="text-[13px]">Sign up with GitHub</h2> */}
                </div>
                <div className="border p-2 rounded-md flex justify-center gap-2 items-center">
                  <FcGoogle className="text-[55px]" />
                  {/* <h2 className="text-[13px]">Sign in with Google</h2> */}
                </div>
              </div>
            </div>
          </div>

          <div className="flex uppercase text-[12px] items-center justify-center gap-1 mt-5">
            <hr className="w-[189px] bg-gray-300" />
            <p>or</p>
            <hr className="w-[189px] bg-gray-300" />
          </div>

          <div>
            <div className="mt-5 flex flex-col gap-4">
              <div className="flex gap-2 p-1 px-3  items-center bg-gray-100 rounded-md h-[45px]">
                <MdEmail className="text-[20px] text-slate-600" />
                <input
                  className="outline-none text-black bg-inherit placeholder:text-[14px] w-full "
                  type="text"
                  placeholder="Email"
                  name="email"
                />
              </div>

              <div className="flex gap-2 p-1 px-3  items-center bg-gray-100 rounded-md h-[45px] ">
                <MdPassword className="text-[20px] text-slate-600" />
                <input
                  className="outline-none text-black bg-inherit placeholder:text-[14px] w-full "
                  type="text"
                  placeholder="Password"
                  name="password"
                />
              </div>
              <Link
                href="/forget-password"
                className="text-end text-white text-[12px] mt-2 font-semibold italic"
              >
                Forget Password
              </Link>

              <Button disabled={toggle} type="submit" className="mt-5 py-6 ">
                {toggle ? <Spinner /> : " Sign In"}
              </Button>

              <p className="text-[12px] font-light text-center my-[5px]">
                Don't have an Account?{" "}
                <Link
                  className="font-bold italic text-[14px] cursor-pointer"
                  href={"/signup"}
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
