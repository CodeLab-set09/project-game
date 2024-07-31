"use client";

import { changeUserTimer } from "@/app/apiCalls/apiCall";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const router = useRouter();
  const session: any = useSession();
  const id = session?.data?.user?.id;

  useEffect(() => {
    changeUserTimer(id).then((res) => {
      console.log(res);
    });
  }, []);

  return <div>This is the very first Screen</div>;
};

export default page;
