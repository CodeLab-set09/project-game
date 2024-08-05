"use client";

import { changeUserTimer } from "@/app/apiCalls/apiCall";

import { useSession } from "next-auth/react";

import React, { useEffect } from "react";
import MainPage from "./MainPage";

const Page = () => {
  const session: any = useSession();
  const id = session?.data?.user?.id;

  useEffect(() => {
    if (id) {
      changeUserTimer(id).then((res) => {
        console.log("res: ", res);
      });
    }
  }, [id]);

  return (
    <div>
      <MainPage />
    </div>
  );
};

export default Page;
