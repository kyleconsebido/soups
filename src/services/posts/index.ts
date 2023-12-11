import type { Post, NewPost } from "@/lib/db/models";
import { ValidationError } from "../ValidationError";
import {
  MAX_POST_CHARACTERS,
  MAX_TITLE_CHARACTERS,
  PAGE_LIMIT,
} from "@/lib/constants";
import { db } from "@/lib/db";
import { comments, posts, users, votes } from "@/lib/db/schema";
import { and, desc, eq, gt, lt, sql } from "drizzle-orm";
import { alias } from "drizzle-orm/sqlite-core";

const likes = alias(votes, "likes");
const dislikes = alias(votes, "dislikes");

export interface PostList {
  posts: Post[];
  key: number;
  isLast: boolean;
}

export async function getPosts(key: number = 0): Promise<PostList> {
  if (isNaN(key) || key === Infinity) {
    key = 0;
  }

  let isLast = false;

  try {
    const results: Post[] = await db
      .select({
        id: posts.id,
        createdAt: posts.createdAt,
        userId: posts.userId,
        title: posts.title,
        body: posts.body,
        image: users?.image,
        name: users?.name,
        comments: sql<number>`count(${comments.id})`,
        likes: sql<number>`cast(count(${likes.id}) as int)`,
        dislikes: sql<number>`cast(count(${dislikes.id}) as int)`,
      })
      .from(posts)
      .leftJoin(users, eq(posts.userId, users.id))
      .leftJoin(comments, eq(comments.postId, posts.id))
      .leftJoin(likes, and(eq(posts.id, likes.id), eq(likes.isLiked, true)))
      .leftJoin(
        dislikes,
        and(eq(posts.id, dislikes.id), eq(dislikes.isLiked, false))
      )
      .groupBy(
        posts.id,
        posts.createdAt,
        posts.userId,
        posts.title,
        posts.body,
        users.image,
        users.name
      )
      .orderBy(desc(posts.createdAt))
      .where(key === 0 ? gt(posts.id, 0) : lt(posts.id, key))
      .limit(PAGE_LIMIT);

    const lastResult = results[results.length - 1]?.id;

    if (results.length < PAGE_LIMIT) {
      isLast = true;
    } else {
      const lastPost = await db.select({ id: posts.id }).from(posts).limit(1);
      isLast = results[results.length - 1]?.id === lastPost?.[0]?.id ?? true;
    }

    return {
      posts: results,
      isLast,
      key: lastResult,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function createPost(post: NewPost): Promise<NewPost["id"]> {
  if (post.title.length > MAX_TITLE_CHARACTERS) {
    throw new ValidationError(
      `Title must not exceed ${MAX_TITLE_CHARACTERS} characters`
    );
  }

  if (post.body.replace(/(\r\n|\n|\r)/gm, "").length > MAX_POST_CHARACTERS) {
    throw new ValidationError(
      `Body must not exceed ${MAX_POST_CHARACTERS} characters`
    );
  }

  try {
    const [{ postId }] = await db
      .insert(posts)
      .values({
        body: post.body,
        title: post.title,
        userId: post.userId,
      })
      .returning({ postId: posts.id });

    return postId;
  } catch (error) {
    if (!(error instanceof ValidationError)) {
      console.error(error);
    }

    throw error;
  }
}
