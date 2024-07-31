"use client";

import React, { useState, useEffect } from "react";
import { getSingleUser } from "../apiCalls/apiCall";

export const useUserHook = (id: string) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    getSingleUser(id).then((res) => {
      setUser(res.data);
    });
  }, []);

  return { user };
};
