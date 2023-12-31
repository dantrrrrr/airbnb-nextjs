import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import prisma from "../../../lib/prisma.db";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import NextAuth from "next-auth";
export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  //save oauth data to database

  ///This will enable NextAuth.js to store the user profile information
  //from the OAuth providers in a MongoDB collection called users and link to the account collection

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")

      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        //check if the value  exist from the credentials
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid Credentials");
        }
        // find user with that email from credentials
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        //not found user
        if (!user || !user?.hashedPassword) {
          throw new Error("Invalid Credentials");
        }

        //check passsword match
        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        //not match password
        if (!isCorrectPassword) throw new Error("Invalid Credentials");

        return user;
      },
    }),
  ],
  callbacks: {},
  pages: {
    signIn: "/", //redirect here when error happend
  },
  debug: process.env.NODE_ENV === "development", //allow to see bug in the terminal
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRECT,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

// All requests to /api/auth/* (signIn, callback, signOut, etc.) will automatically be handled by NextAuth.js.
