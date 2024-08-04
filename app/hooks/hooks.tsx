"use client";

import { useState, useEffect } from "react";
import { getSingleUser } from "../apiCalls/apiCall";

export const useUserHook = (id: string) => {
  const [user, setUser] = useState();

  useEffect(() => {
    getSingleUser(id).then((res) => {
      console.log("resdaing: ", res);
      //   setUser(res.data);
    });
  }, [id]);

  console.log(user);

  return { user };
};
