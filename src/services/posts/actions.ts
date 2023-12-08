"use server";
import type { Post } from "@/lib/db/models";
import * as PostServices from "@/services/posts";
import { FormResponse } from "@/services/FormResponse";
import { getSession } from "@/utils/auth/getSession";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function createSoup(
  formData: FormData
): Promise<FormState<Post["id"]>> {
  try {
    const session = await getSession();
    if (!session?.user?.id) redirect("/");

    const title = formData.get("title")?.toString();
    const body = formData.get("body")?.toString();

    if (!title?.trim()) throw Error("Soup has no title");
    if (!body?.trim()) throw Error("Soup has no body");

    const postId = await PostServices.createPost({
      title,
      body,
      userId: session.user.id,
    });

    revalidatePath("/");
    revalidatePath("/profile");

    return FormResponse.data(postId);
  } catch (error) {
    return FormResponse.error((error as Error).message);
  }
}

export async function likeSoup() {}

export async function dislikeSoup() {}

export async function commentSoup() {}
