"use client";

import DisplayScreen from "@/app/(screen)/dashboard/components/DisplayScreen";
import QuestionScreen from "@/app/(screen)/dashboard/components/QuestionScreen";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJSQuestions } from "@/app/apiCalls/apiCall";
import { questionData, setPaths } from "@/app/global/redux";
import { usePathname } from "next/navigation";
import Congrat from "@/app/(screen)/(display)/components/Congrat";
import Canvas from "../components/Canvas";
import CssQuestion from "../components/CssQuetions";

const page = () => {
  const pathName = usePathname();
  const index = useSelector((state: any) => state.index);
  const data = useSelector((state: any) => state.question);
  const dispatch = useDispatch();
  const val = data[index];

  useEffect(() => {
    getJSQuestions().then((res) => {
      dispatch(questionData(res));
    });
  }, []);
  dispatch(setPaths(pathName));

  return (
    <main className="w-full  grid grid-cols-1 lg:grid-cols-7 h-full gap-2">
      <section className="order-2 lg:order-1 col-span-1 lg:col-span-3 border rounded-md p-2 ">
        <CssQuestion />
      </section>

      <section className="order-1 lg:order-2 col-span-1 lg:col-span-4 border p-2 rounded-md">
        <Canvas />
      </section>
    </main>
  );
};

export default page;
