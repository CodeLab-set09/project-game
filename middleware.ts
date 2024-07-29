// export { default } from "next-auth/middleware";

// export const config = {
//   matcher: ["/"],
//   //   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };

"use client";

import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  //   const user = null;

  //   if (!user) {
  //     return NextResponse.redirect(new URL("/", request.url));
  //   }
  return NextResponse.next();
};

export const config = {
  matcher: ["/private"],
};
