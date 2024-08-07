"use client";
import DisplayScreen from "@/app/(screen)/dashboard/components/DisplayScreen";
import QuestionScreen from "@/app/(screen)/dashboard/components/QuestionScreen";
import React, { useEffect } from "react";
import data from "../../../../../../../data.json";
import { usePathname } from "next/navigation";
import { log } from "console";
import { useDispatch, useSelector } from "react-redux";
import { addIndex } from "@/app/global/redux";
// import { fet } from "../fetch";

const page = () => {
  const index = useSelector((state: any) => state.index);
  const getData = async () => {
    const url = "https://js-add.vercel.app/api/add";
    const res = await fetch(url, {
      headers: { "Access-Control-Allow-Origin": "*" },
      cache: "no-cache",
      mode: "no-cors",
    });
    console.log(res);
  };
  useEffect(() => {
    getData();
  }, []);

  const val = data[index];

  return (
    <main className="w-full  grid grid-cols-1 lg:grid-cols-7 h-full gap-2">
      <section className="order-2 lg:order-1 col-span-1 lg:col-span-3 border rounded-md p-2 ">
        <QuestionScreen
          instruction={val.instruction}
          example={val.example}
          usecase={val.useCase}
        />
      </section>
      <section className="order-1 lg:order-2 col-span-1 lg:col-span-4 border p-2 rounded-md">
        <DisplayScreen
          redirect={val.url}
          answer={val.answer}
          output={val.output}
        />
      </section>
    </main>
  );
};

export default page;
