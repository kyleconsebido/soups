import Avatar from "../Avatar";
import CommentsButton from "./CommentsButton";
import LikeButton from "./LikeButton";
import DislikeButton from "./DislikeButton";
import styles from "./Post.module.css";
import Skeleton from "../Skeleton";
import { forwardRef } from "react";

const PostSkeleton = forwardRef<HTMLDivElement>(function PostSkeleton(_, ref) {
  return (
    <div className={styles.post} ref={ref}>
      <Skeleton className={styles.title} height={"1em"} width={"60%"} />
      <div className={styles.details}>
        <div className={styles.avatar}>
          <Avatar className="loading" src={undefined} />
        </div>
        <span
          className={styles.info}
          style={{ display: "flex", flexDirection: "column", gap: "3px" }}
        >
          <Skeleton height={"1em"} width={"50%"} />
          <Skeleton height={"1em"} width={"50%"} />
        </span>
        <span className={styles.buttons}>
          <CommentsButton className="loading" disabled />
          <LikeButton className="loading" disabled />
          <DislikeButton className="loading" disabled />
        </span>
      </div>
      <Skeleton className={styles.body} height={"5em"} />
    </div>
  );
});

export default PostSkeleton;
