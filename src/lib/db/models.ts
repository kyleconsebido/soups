import * as db from "./schema";

export type User = typeof db.users.$inferSelect;

export type NewPost = typeof db.posts.$inferInsert;

export type Post = typeof db.posts.$inferSelect &
  Pick<User, "name" | "image"> & {
    comments: number;
    likes: number;
    dislikes: number;
  };

export type Vote = typeof db.votes.$inferInsert;

export type Comment = typeof db.comments.$inferSelect;
