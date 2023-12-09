import { User } from "@prisma/client";
export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified" | "hashedPassword"
> & { createdAt: string; updatedAt: string; emailVerified: string | null };

// Omit<User, "createdAt" | "updatedAt" | "emailVerified">
// removes three specific properties from the User type: createdAt, updatedAt, and emailVerified.
//adds three new properties to SafeUser:& { createdAt: string; updatedAt: string; emailVerified: string | null }
