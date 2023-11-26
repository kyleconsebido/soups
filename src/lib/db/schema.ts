import type { AdapterAccount } from "@auth/core/adapters";
import { sql } from "drizzle-orm";
import {
  integer,
  sqliteTable,
  text,
  primaryKey,
  index,
} from "drizzle-orm/sqlite-core";

export const users = sqliteTable("user", {
  id: text("id").notNull().primaryKey(),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: integer("emailVerified", { mode: "timestamp_ms" }),
  image: text("image"),
});

export const accounts = sqliteTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccount["type"]>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
);

export const verificationTokens = sqliteTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  })
);

export const follows = sqliteTable(
  "follows",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    followedId: text("followedId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
  },
  (follows) => ({
    compoundKey: primaryKey({
      columns: [follows.userId, follows.followedId],
    }),
    follows_userIdx: index("follows_userIdx").on(follows.userId),
    follows_followedIdx: index("follows_followedIdx").on(follows.followedId),
  })
);

export const posts = sqliteTable(
  "posts",
  {
    id: integer("id", { mode: "number" })
      .notNull()
      .primaryKey({ autoIncrement: true }),
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "set null" }),
    title: text("title").notNull(),
    body: text("body").notNull(),
    createdAt: text("createdAt")
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
  },
  (posts) => ({
    posts_userIdx: index("posts_userIdx").on(posts.userId),
  })
);

export const votes = sqliteTable(
  "votes",
  {
    id: integer("id", { mode: "number" })
      .notNull()
      .primaryKey({ autoIncrement: true }),
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    postId: text("postId")
      .notNull()
      .references(() => posts.id, { onDelete: "cascade" }),
    isLiked: integer("isLiked", { mode: "boolean" }).notNull(),
  },
  (votes) => ({
    votes_userIdx: index("votes_userIdx").on(votes.userId),
    votes_postIdx: index("votes_postIdx").on(votes.postId),
  })
);

export const comments = sqliteTable(
  "comments",
  {
    id: integer("id").notNull().primaryKey({ autoIncrement: true }),
    postId: text("postId")
      .notNull()
      .references(() => posts.id, { onDelete: "cascade" }),
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "set null" }),
    body: text("body").notNull(),
    createdAt: text("createdAt")
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
  },
  (comments) => ({
    comments_userIdx: index("comments_userIdx").on(comments.userId),
    comments_postIdx: index("comments_postIdx").on(comments.postId),
  })
);

export const favorites = sqliteTable(
  "favorites",
  {
    id: integer("id").notNull().primaryKey({ autoIncrement: true }),
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    postId: integer("id", { mode: "number" })
      .notNull()
      .references(() => posts.id, { onDelete: "set null" }),
    createdAt: text("createdAt")
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
  },
  (favorites) => ({
    favorites_userIdx: index("favorites_userIdx").on(favorites.userId),
  })
);
