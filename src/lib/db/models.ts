import * as db from "./schema";

export type Post = typeof db.posts.$inferSelect;
export type NewPost = typeof db.posts.$inferInsert;

export type User = typeof db.users.$inferSelect;
