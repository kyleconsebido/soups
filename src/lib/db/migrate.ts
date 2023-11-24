import { migrate } from "drizzle-orm/libsql/migrator";
import { db, client } from "./index";

async function run() {
  await migrate(db, { migrationsFolder: "./drizzle" });
  client.close();
}

run();
