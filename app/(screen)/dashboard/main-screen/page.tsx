"use client";

import { changeUserTimer } from "@/app/apiCalls/apiCall";
import { LIVE_URL } from "@/utils/constant";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Challenge from "./Challenge";
import Badge from "./Badge";
import MainPage from "../MainPage";

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
