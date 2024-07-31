"use client";

import { options } from "@/app/api/auth/[...nextauth]/options";
import { useUserHook } from "@/app/hooks/hooks";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  const session: any = useSession();
  const id = session?.data?.user?.id;

  const { user }: any = useUserHook(id!);

  if (user?.firstTimer) {
    return router.push("/dashboard/first-screen");
  } else {
    return router.push("/dashboard/main-screen");
  }
};

export default page;
