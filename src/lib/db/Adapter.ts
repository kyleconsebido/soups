import type { Adapter, AdapterAccount } from "next-auth/adapters";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { eq, and } from "drizzle-orm";
import { db } from "@/lib/db";
import { accounts, users, verificationTokens } from "./schema";

export function DrizzleAdapterFix(): Adapter {
  return {
    ...DrizzleAdapter(db),
    async getUser(data) {
      return (
        (await db.select().from(users).where(eq(users.id, data)).get()) ?? null
      );
    },
    async getUserByEmail(data) {
      return (
        (await db.select().from(users).where(eq(users.email, data)).get()) ??
        null
      );
    },
    async getUserByAccount(
      providerAccountId: Pick<AdapterAccount, "provider" | "providerAccountId">
    ) {
      const results = await db
        .select()
        .from(accounts)
        .leftJoin(users, eq(users.id, accounts.userId))
        .where(
          and(
            eq(accounts.provider, providerAccountId.provider),
            eq(accounts.providerAccountId, providerAccountId.providerAccountId)
          )
        )
        .get();

      return results?.user ?? null;
    },
    async useVerificationToken(token) {
      try {
        return (
          (await db
            .delete(verificationTokens)
            .where(
              and(
                eq(verificationTokens.identifier, token.identifier),
                eq(verificationTokens.token, token.token)
              )
            )
            .returning()
            .get()) ?? null
        );
      } catch (err) {
        throw new Error("No verification token found.");
      }
    },
  };
}
