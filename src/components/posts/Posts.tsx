"use client";
import type { Post as TPost } from "@/lib/db/models";
import type { PostList } from "@/services/posts";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import InfiniteScroll from "../InfiniteScroll";
import Post from "./Post";
import styles from "./Posts.module.css";

interface PostsProps {
  postList: PostList;
}

export default function Posts({ postList }: PostsProps) {
  const [posts, setPosts] = useState<TPost[]>(postList.posts);

  const router = useRouter();
  const keyRef = useRef<number>(postList.key);

  useEffect(() => {
    if (postList.key === keyRef.current) {
      return;
    }

    if (postList.key > keyRef.current) {
      keyRef.current = postList.key;
      setPosts(postList.posts);
      return;
    }

    keyRef.current = postList.key;
    setPosts((prevPosts) => [...prevPosts, ...postList.posts]);
  }, [postList, router]);

  return (
    <div className={styles.posts}>
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}

      {!postList.isLast && <InfiniteScroll nextKey={postList.key} />}
    </div>
  );
}
