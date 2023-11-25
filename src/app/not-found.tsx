import { EmptyBowl } from "@/components/shared/icons";
import Button from "@/components/shared/Button";
import RouteLoaderLink from "@/components/shared/RouteLoaderLink";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <EmptyBowl className={styles.icon} />
        <div className={styles.info}>
          <span className={styles.code}>404</span>
          <span className={styles.message}>NOT FOUND</span>
          <RouteLoaderLink href={"/"} className={styles.homeLink}>
            <Button className={styles.homeBtn} variant="red">
              Go to homepage
            </Button>
          </RouteLoaderLink>
        </div>
      </div>
    </main>
  );
}
