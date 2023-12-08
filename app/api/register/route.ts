import bcrypt from "bcrypt";

import prisma from "@/app/lib/prisma.db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  //   console.log("🚀 ~ file: route.ts:8 ~ POST ~ body:", body);
  const { email, name, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await prisma.user.create({
    data: { email, name, hashedPassword },
  });

  return NextResponse.json(user);
}
