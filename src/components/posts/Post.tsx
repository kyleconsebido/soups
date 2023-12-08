import type { Post, User } from "@/lib/db/models";
import { inriaSerif } from "@/assets/fonts";
import { cn } from "@/utils";
import Avatar from "../Avatar";
import RouteLoaderLink from "../RouteLoaderLink";
import styles from "./Post.module.css";

interface PostProps {
  post: Post & Partial<Pick<User, "name" | "image">>;
}

export default function Post({ post }: PostProps) {
  return (
    <div className={styles.post}>
      <h1 className={cn(styles.title, inriaSerif.className)}>{post.title}</h1>
      <div className={styles.details}>
        <RouteLoaderLink
          href={`/profile/${post.userId}`}
          className={styles.avatar}
        >
          <Avatar src={post?.image as string | undefined} />
        </RouteLoaderLink>
        <span className={styles.info}>
          <div>{post.name}</div>
          <div className={styles.date}>
            {new Date(post.createdAt).toLocaleDateString(undefined, {
              month: "long",
              day: "2-digit",
              year: "numeric",
            })}
          </div>
        </span>
      </div>
      <div className={styles.body}>{post.body}</div>
    </div>
  );
}
