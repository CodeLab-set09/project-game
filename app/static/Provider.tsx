"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { SessionProvider } from "next-auth/react";
import React, { FC, ReactNode } from "react";

interface iSession {
  children: ReactNode;
}

const Provider: FC<iSession> = ({ children }) => {
  return (
    <SessionProvider>
      {children}
      <ProgressBar
        height="4px"
        color="#0F172A"
        options={{ showSpinner: true }}
        shallowRouting
      />
    </SessionProvider>
  );
};

export default Provider;
