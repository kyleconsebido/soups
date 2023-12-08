import type { User, Post, NewPost } from "@/lib/db/models";
import { ValidationError } from "../ValidationError";
import { MAX_POST_CHARACTERS, MAX_TITLE_CHARACTERS } from "@/lib/constants";
import { desc, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { posts, users } from "@/lib/db/schema";

export async function getPosts(): Promise<Post[]> {
  try {
    const results: (Post & Partial<Pick<User, "name" | "image">>)[] = await db
      .select({
        id: posts.id,
        createdAt: posts.createdAt,
        userId: posts.userId,
        title: posts.title,
        body: posts.body,
        image: users?.image,
        name: users?.name,
      })
      .from(posts)
      .leftJoin(users, eq(posts.userId, users.id))
      .orderBy(desc(posts.createdAt));

    return results;
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

  if (post.body.length > MAX_POST_CHARACTERS) {
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
