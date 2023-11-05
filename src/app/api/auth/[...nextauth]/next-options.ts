// import { authenticate } from "@/services/authService"
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { authenticate } from "@/utils/authenticate";
export const authoptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "abc@xyz.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          if (typeof credentials !== "undefined") {
            const res = await authenticate(
              credentials.email,
              credentials.password,
              process.env.API_BASE_URL
            );
            if (
              typeof res !== "undefined" &&
              !res.error &&
              res !== "fetch failed"
            ) {
              res.user = {
                email: credentials.email,
                apiToken: res.accessToken,
              };
              return { ...res.user };
            } else {
              return null;
            }
          } else {
            return null;
          }
        } catch (err: any) {
          console.log(err.message);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async session({ session, token }: { session: any; token: JWT }) {
      // console.log("==session==",{token,session});

      session.apiToken = token.apiToken as string;
      return session;
    },
    async jwt({ token, user, account }) {
      if (user && user.apiToken) {
        token.apiToken = user.apiToken;
        return token;
      }
      return token;
    },
  },

  pages: {
    signIn: "/signin/",
  },
};
