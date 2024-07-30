import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";

const page = () => {
  const formAction = async (formData: FormData) => {
    "use server";
    const email = formData.get("email");
    const password = formData.get("password");
    const url = "http:localhost:3000/api/signin";
    await fetch(url, {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }).then(() => {
      redirect("/dashboard");
    });
  };
  return (
    <div>
      <div className="flex justify-center items-center h-[100vh] w-full">
        <form
          action={formAction}
          className=" items-center border p-3 rounded-md mt-5"
        >
          <div className="flex justify-center items-center w-full ">
            <div className="w-full">
              <div className="flex items-center w-full justify-center mt-3 mb-8">
                <div>
                  <Image src={"/cbb.png"} alt="#" width={160} height={160} />
                </div>
              </div>
              <div className="flex justify-center gap-3">
                <div className="border p-2 rounded-md flex justify-center gap-2 items-center">
                  <BsGithub />
                  <h2 className="text-[13px]">Sign up with GitHub</h2>
                </div>
                <div className="border p-2 rounded-md flex justify-center gap-2 items-center">
                  <FcGoogle />
                  <h2 className="text-[13px]">Sign in with Google</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-1 mt-5">
            <hr className="w-[189px] bg-gray-300" />
            <p>or</p>
            <hr className="w-[189px] bg-gray-300" />
          </div>

          <div>
            <div className="mt-5 flex flex-col gap-4">
              <div className="flex gap-2 p-1 px-3  items-center bg-gray-100 rounded-md">
                <MdEmail className="text-[20px]" />
                <input
                  className="outline-none bg-inherit placeholder:text-[14px] "
                  type="text"
                  placeholder="Email"
                  name="email"
                />
              </div>

              <div className="flex gap-2 p-1 px-3  items-center bg-gray-100 rounded-md">
                <MdEmail className="text-[20px]" />
                <input
                  className="outline-none bg-inherit placeholder:text-[14px] "
                  type="text"
                  placeholder="Password"
                  name="password"
                />
              </div>

              <Button type="submit" className="mt-5">
                Sign In
              </Button>
              <p className="text-[12px] font-light mt-[-10px]">
                Don't have an account?{" "}
                <Link className="font-bold" href={"/signup"}>
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
