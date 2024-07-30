"use client";

import { PagesProgressBar as ProgressBar } from "next-nprogress-bar";

export const AllPageLoader = () => {
  return (
    <>
      {/* <Component {...pageProps} /> */}
      <ProgressBar
        height="4px"
        color="#fffd00"
        options={{ showSpinner: true }}
        shallowRouting
      />
    </>
  );
};

// ({ Component, pageProps }: AppProps)
