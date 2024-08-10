"use client";
import QuestionScreen from "@/app/(screen)/dashboard/components/QuestionScreen";
import { setLevel } from "@/app/global/redux";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const index = useSelector((state: any) => state.index);
  const data = useSelector((state: any) => state.question);
  const pathName = useSelector((state: any) => state.paths);
  const level = useSelector((state: any) => state.level);

  console.log("newPath: ", pathName);

  const dispatch = useDispatch();
  const val = data[index];
  return (
    <div>
      <QuestionScreen
        loading
        tags={val?.tag}
        instruction={val?.instruction}
        example={val?.example}
        usecase={val?.usecase}
      />
      {/* <Link onClick={() => dispatch(setLevel(level + 1))} href={newPath}>
        Next
      </Link> */}
    </div>
  );
};
export default page;
