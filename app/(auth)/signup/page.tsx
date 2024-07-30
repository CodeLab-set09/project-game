"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { MdEmail, MdPassword, MdPerson } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import { LIVE_URL } from "@/utils/constant";
import { toast, useToast } from "@/components/ui/use-toast";
import { Spinner } from "@/app/static/Spinner";
import { useRouter } from "next/navigation";

const page = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [toggle, setToggle] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const formAction = async () => {
    // "use server";
    setToggle(true);

    const url = `/api/signup`;
    await fetch(url, {
      method: "POST",
      body: JSON.stringify({ userName, email, password }),
    })
      .then(async (res) => {
        return await res.json();
      })
      .then((res) => {
        if (res.status === 201) {
          return router.push("/");
        } else {
          toast({
            title: "Failed to sign up",
            description: res.message,
          });
        }
      })
      .finally(() => {
        setToggle(false);
      });
  };
  return (
    <div>
      <div className="flex justify-center items-center h-[100vh] w-full">
        <main className="w-[300px] shadow-sm items-center border p-3 rounded-md mt-5">
          <div className="flex justify-center items-center w-full ">
            <div className="w-full">
              <div className="flex items-center w-full justify-center mt-3 mb-8">
                <div>
                  <Image src={"/cbb.png"} alt="#" width={160} height={160} />
                  <p className="mt-6 font-bold uppercase">
                    Register An Account
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
                <MdPerson className="text-[20px] text-slate-600" />
                <input
                  className="outline-none bg-inherit placeholder:text-[14px] "
                  type="text"
                  placeholder="User Name"
                  name="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="flex gap-2 p-1 px-3  items-center bg-gray-100 rounded-md h-[45px]">
                <MdEmail className="text-[20px] text-slate-600" />
                <input
                  className="outline-none bg-inherit placeholder:text-[14px] "
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex gap-2 p-1 px-3  items-center bg-gray-100 rounded-md h-[45px] ">
                <MdPassword className="text-[20px] text-slate-600" />
                <input
                  className="outline-none bg-inherit placeholder:text-[14px] "
                  type="text"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <Button
                disabled={toggle}
                type="submit"
                className="mt-5 py-6 "
                onClick={formAction}
              >
                {toggle ? <Spinner /> : " Sign Up"}
              </Button>

              <p className="text-[12px] font-light text-center my-[5px]">
                Already have an Account?{" "}
                <Link className="font-bold italic text-[14px]" href={"/signin"}>
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default page;
