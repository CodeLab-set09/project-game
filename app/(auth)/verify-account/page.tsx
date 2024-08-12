import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className=" bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] relative overflow-clip ">
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
      <div className="absolute w-[50%] overflow-hidden h-[200px] right-0 bottom-0">
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
      <main className="w-full h-screen flex justify-center items-center ">
        <div className="h-[220px] w-[400px] flex flex-col rounded-md border justify-center items-center gap-5 p-4 ">
          <p className="font-semibold text-[30px]">Verify Account</p>
          <p className="text-[16px] text-center ">
            An email has been sent to your email account
            <br />
            check email to verify
          </p>
        </div>
      </main>
    </div>
  );
};

export default Page;
