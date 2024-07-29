// the route part for nextauth

import nextAuth from "next-auth";
import { options } from "./options";

const handler: any = nextAuth(options);

export { handler as GET, handler as POST };
