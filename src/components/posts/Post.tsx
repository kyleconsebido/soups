import type { Post } from "@/lib/db/models";
import { inriaSerif } from "@/assets/fonts";
import { cn } from "@/utils";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import Avatar from "../Avatar";
import RouteLoaderLink from "../RouteLoaderLink";
import PostBody from "./PostBody";
import LikeButton from "./LikeButton";
import DislikeButton from "./DislikeButton";
import CommentsButton from "./CommentsButton";
import styles from "./Post.module.css";

dayjs.extend(relativeTime);
dayjs.extend(utc);

export default function Post({ post }: { post: Post }) {
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
            {dayjs.utc(post.createdAt).local().fromNow()}
          </div>
        </span>
        <span className={styles.buttons}>
          <CommentsButton comments={post.comments} />
          <LikeButton likes={post.likes} />
          <DislikeButton dislikes={post.dislikes} />
        </span>
      </div>
      <PostBody className={styles.body} key={post.body} body={post.body} />
    </div>
  );
}
