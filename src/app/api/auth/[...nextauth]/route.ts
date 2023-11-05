import NextAuth from "next-auth/next";
import { authoptions } from "./next-options";


const   handler = NextAuth(authoptions)
export { handler as GET, handler as POST };
