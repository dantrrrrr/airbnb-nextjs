import { getServerSession } from "next-auth/next";

import { authOptions } from "../api/auth/[...nextauth]/route";

import prisma from "@/app/lib/prisma.db";

export async function getSession() {
  return await getServerSession(authOptions);
}
export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }
    const currentUser = await prisma.user.findUnique({
      where: { email: session.user.email as string },
    });

    if (!currentUser) {
      return null;
    }
    const { hashedPassword, ...others } = currentUser;
    return {
      ...others,
      createdAt: others.createdAt?.toISOString(),
      updatedAt: others.updatedAt?.toISOString(),
      emailVerified: others.emailVerified?.toISOString() || null,
    };
  } catch (error) {
    console.log(
      "🚀 ~ file: getCurrentUser.ts:13 ~ getCurrentUser ~ error:",
      error
    );
    return null;
  }
}
