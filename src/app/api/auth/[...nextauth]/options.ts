import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";
import { DrizzleAdapterFix } from "@/lib/db/Adapter";

export const options: NextAuthOptions = {
  adapter: DrizzleAdapterFix(),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    session({ session, token }) {
      if (token) {
        session.user.id = token.id;
      }

      return session;
    },
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }

      return token;
    },
  },
  pages: {
    signIn: "/signin",
    error: "/signin",
    signOut: "/signout",
  },
};
