"use client";
import type { Post as TPost } from "@/lib/db/models";
import type { PostList } from "@/services/posts";
import { useMemo, useState } from "react";
import InfiniteScroll, { type ItemList } from "../InfiniteScroll";
import Post from "./Post";
import styles from "./Posts.module.css";

interface PostsProps {
  postList: PostList;
}

export default function Posts({ postList }: PostsProps) {
  const [posts, setPosts] = useState<TPost[]>(postList.posts);

  const itemList: ItemList<TPost> = useMemo(
    () => ({
      items: postList.posts,
      key: postList.key,
      isLast: postList.isLast,
      setItems: setPosts,
    }),
    [postList]
  );

  return (
    <div className={styles.posts}>
      <InfiniteScroll itemList={itemList}>
        {posts?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </InfiniteScroll>
    </div>
  );
}
