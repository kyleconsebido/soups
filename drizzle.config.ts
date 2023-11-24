import type { Config } from "drizzle-kit";

export default {
  schema: "./src/lib/db/schema.ts",
  out: "./drizzle",
  driver: "libsql",
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },
} satisfies Config;
