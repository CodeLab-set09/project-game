//this is the sign in next-auth space for credentials and social auth

import { LIVE_URL } from "@/utils/constant";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {
          name: "email",
          label: "userName",
          type: "text",
          placeholder: "userName",
        },
        password: { name: "password", label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const URL: string = `${LIVE_URL}/api/signin`;

        const res = await fetch(URL, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();

        console.log("show:", user);

        if (user) {
          return {
            ...user,
            name: user?.data?.name,
            email: user?.data?.email,
            id: user?.data?._id,
          };
        }
        return null;
      },
    }),

    GithubProvider({
      clientId: process.env.NEXT_GITHUB_ID as string,
      clientSecret: process.env.NEXT_GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_ID as string,
      clientSecret: process.env.NEXT_GOOGLE_SECRET as string,
    }),
  ],

  pages: {
    signIn: "/signin",
  },

  callbacks: {
    async redirect() {
      return "/";
    },

    async jwt({ user, token }: any) {
      if (user) token.id = user.id;

      return token;
    },

    async session({ session, token }: any) {
      if (session) session.user.id = token.id;

      return session;
    },
  },
};
