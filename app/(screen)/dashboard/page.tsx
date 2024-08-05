"use client";

import { useUserHook } from "@/app/hooks/hooks";
import { Spinner } from "@/app/static/Spinner";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const router = useRouter();
  const session: any = useSession();
  let id = "";

  const [userData, setUserData] = useState<any>();

  useEffect(() => {
    id = session?.data?.user?.id;

    const getSingleUser = async () => {
      try {
        return await fetch(`/api/timer/${id}`, {
          cache: "no-cache",
        }).then(async (res) => {
          return await res.json();
        });
      } catch (error) {
        console.error("error", error);
      }
    };
    getSingleUser().then((res) => {
      setUserData(res);
    });
  }, [session?.data?.user?.id, userData]);

  console.log("show me: ", userData?.data);

  if (userData?.data === undefined) {
    return <Spinner />;
  } else {
    if (userData?.data?.firstTimer) {
      return router.push("/dashboard/first-screen");
    } else {
      return router.push("/dashboard/main-screen");
    }
  }
};

export default page;
