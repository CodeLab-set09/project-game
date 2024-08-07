"use client";
import { Spinner } from "@/app/static/Spinner";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { MdEmail } from "react-icons/md";

const page = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const url = "http://localhost:3000/api/reset-password";

  const formAction = async (formData: FormData) => {
    setToggle(true);
    const email = formData.get("email");
    await fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ email }),
    }).then(() => {
      redirect("/accountverify");
    });
  };
  return (
    <main>
      <form action={formAction}>
        <div className="flex gap-2 p-1 px-3  items-center bg-gray-100 rounded-md h-[45px]">
          <MdEmail className="text-[20px] text-slate-600" />
          <input
            className="outline-none bg-inherit placeholder:text-[14px] w-full "
            type="text"
            placeholder="Email"
            name="email"
          />
        </div>
        <Button disabled={toggle} type="submit" className="mt-5 py-6 ">
          {toggle ? <Spinner /> : " Submit"}
        </Button>
      </form>
    </main>
  );
};

export default page;
