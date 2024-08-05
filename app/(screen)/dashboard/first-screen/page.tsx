"use client";

import { changeUserTimer } from "@/app/apiCalls/apiCall";
import { LIVE_URL } from "@/utils/constant";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const session: any = useSession();
  const id = session?.data?.user?.id;

  useEffect(() => {
    if (id) {
      changeUserTimer(id).then((res) => {
        console.log("res: ", res);
      });
    }
  }, [id]);

  return <div>This is the very first Screen</div>;
};

export default page;
