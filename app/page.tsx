import { getServerSession } from "next-auth";

import { options } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const page = async () => {
  const user = await getServerSession(options);

  if (!user) {
    return redirect("/landing-page");
  } else {
    return redirect("/dashboard");
  }
};

export default page;
