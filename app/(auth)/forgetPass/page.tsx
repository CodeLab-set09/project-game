import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <main className="flex justify-center items-center h-[90vh]">
      <div className="w-full h[calc(100vh-40px)] flex justify-center items-center">
        <section className="w-[70%] md:w-[80%] lg:w-[500px] p-2 rounded-md min-h-[300px] border">
          <p className="font-semibold uppercase text-center mt-10 pb-5 border-b">
            Password recovery
          </p>
          <form>
            <div className="flex flex-col mt-5">
              <label className="font-semibold text-[12px] mb-1">Password</label>
              <input
                placeholder="Enter new password"
                className="border rounded-md outline-none h-[45px] pl-2"
                type="text"
              />
            </div>

            <div className="text-center text-[12px] mt-3">
              <Link href={"/signin"} className="italic font-semibold">
                Sign in here
              </Link>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Page;
