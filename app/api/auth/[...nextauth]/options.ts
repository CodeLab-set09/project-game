//this is the sign in next-auth space for credentials and social auth

import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {
          name: "email",
          label: "Username",
          type: "text",
          placeholder: "jsmith",
        },
        password: { name: "password", label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const URL: string = "https://project-game-ot04.onrender.com/api/signin";

        const res = await fetch(URL, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();

        console.log(user);

        if (user) {
          return {
            ...user,
            name: user?.data?.name,
            email: user?.data?.email,
          };
        }
        return null;
      },
    }),
  ],

  pages: {
    signIn: "/signin",
  },

  callbacks: {
    async redirect() {
      return "/";
    },
  },
};
