"use client";

import { changeUserTimer } from "@/app/apiCalls/apiCall";
import { Button } from "@/components/ui/button";
import { LIVE_URL } from "@/utils/constant";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";

const page = () => {
  const session: any = useSession();
  const id = session?.data?.user?.id;

  useEffect(() => {
    if (id) {
      changeUserTimer(id).then((res) => {});
    }
  }, [id]);

  const data = [
    {
      id: 1,
      icon: <FaHtml5 />,
      text: "HTML",
      url: "/dashboard/main-screen/level-1/stage-1/questions",
    },
    {
      id: 2,
      icon: <FaCss3Alt />,
      text: "CSS",
      url: "/dashboard/main-screen/level-1/stage-1/questions",
    },
    {
      id: 3,
      icon: <SiJavascript />,
      text: "JAVASCRIPT",
      url: "/dashboard/main-screen/level-1/stage-1/questions",
    },
  ];

  return (
    <main className="h-full w-full p-6 flex flex-col gap-3">
      <div className="flex flex-col bg-[#D9D9D9] p-2 min-h-[200px] gap-2 ">
        <p className="text-[20px] md:text-[30px] text-black font-semibold ">
          Career Stage
        </p>
        <p className="text-black text-[12px] md:text-[14px]  ">
          What best describes where you are in your coding journey thus far?
        </p>
        <div className="">
          <input type="radio" id="aaa" name="careerStage" value="aaa" />
          <label htmlFor="aaa" className="text-[12px] text-black ml-2 ">
            None - I'm not in school and do not code professionally
          </label>
          <br />

          <input type="radio" id="bbb" name="careerStage" value="bbb" />
          <label htmlFor="bbb" className="text-[12px] text-black ml-2 ">
            None - I'm not in school and do not code professionally
          </label>
          <br />

          <input type="radio" id="ccc" name="careerStage" value="ccc" />
          <label htmlFor="ccc" className="text-[12px] text-black ml-2 ">
            None - I'm not in school and do not code professionally
          </label>
          <br />
        </div>
      </div>

      <div className="flex flex-col bg-[#D9D9D9] p-2 min-h-[200px] gap-5 ">
        <p className="text-[20px] md:text-[30px] text-black font-semibold ">
          Choose the languages you wish to train on:
        </p>
        <div className="flex gap-5">
          {data.map((el) => (
            <Link key={el.id} href={`${el.url}`}>
              <div className="flex justify-center items-center flex-col gap-2 md:w-[120px] w-[100px] h-[90px] md:h-[110px] bg-slate-900">
                <div className="text-[30px] md:text-[50px] text-white">
                  {el.icon}
                </div>
                <p className="text-white text-[12px] md:text-[16px] ">
                  {el.text}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Button className="w-[200px] h-[40px]">Proceed to Dashboard</Button>
    </main>
  );
};
export default page;
