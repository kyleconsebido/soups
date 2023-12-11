import Post from "@/components/posts/Post";
import { getPosts } from "@/services/posts";
import styles from "./page.module.css";
import Posts from "@/components/posts/Posts";

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams<"key">;
}) {
  const key = searchParams.key ?? 0;
  const postList = await getPosts(+key);

  return (
    <section className={styles.posts}>
      <Posts postList={postList} />
    </section>
  );
}
