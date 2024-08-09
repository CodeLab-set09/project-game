"use client";

import { useUserHook } from "@/app/hooks/hooks";
import { Spinner } from "@/app/static/Spinner";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

const page = () => {
  const router = useRouter();
  const session: any = useSession();
  let id = "";

  const [userData, setUserData] = useState<any>({});

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

  console.log("get data: ", userData);

  if (Object.keys(userData).length === 0) {
    return (
      <div className="flex w-full h-full items-center justify-center">
        <FaSpinner className="animate-spin text-[30px] text-blue-950" />
      </div>
    );
  } else {
    if (userData?.data?.firstTimer) {
      return router.push("/dashboard/first-screen");
    } else {
      return router.push("/dashboard/main-screen");
    }
  }
};

export default page;
