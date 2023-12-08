import Post from "@/components/posts/Post";
import { getPosts } from "@/services/posts";
import styles from "./page.module.css";

export default async function Home() {
  const posts = await getPosts();
  return (
    <section className={styles.posts}>
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
}
