import { PrismaClient } from "@prisma/client";

//declares a global variable named prisma that can be accessed from anywhere in the application
declare global {
  var prisma: PrismaClient | undefined;
}
// globalThis is a built-in JavaScript variable that allows you to access the global scope of your application.
// Its behavior is similar to the window object in web browsers but works in all JavaScript environments, including Node.js.
const client = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = client;
}

export default client;
