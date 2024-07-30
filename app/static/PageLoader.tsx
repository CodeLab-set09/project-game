"use client";

import { PagesProgressBar as ProgressBar } from "next-nprogress-bar";

export const AllPageLoader = () => {
  return (
    <>
      {/* <Component {...pageProps} /> */}
      <ProgressBar
        height="4px"
        color="#ff0000"
        options={{ showSpinner: true }}
        shallowRouting
      />
    </>
  );
};

// ({ Component, pageProps }: AppProps)
