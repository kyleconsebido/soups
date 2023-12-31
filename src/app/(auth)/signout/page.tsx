import { redirect } from "next/navigation";
import { getSession } from "@/utils/auth/getSession";
import RouteLoaderLink from "@/components/RouteLoaderLink";
import Button from "@/components/Button";
import SignOutButton from "@/components/auth/SignOutButton";
import Logos from "@/assets/Logos";
import styles from "./page.module.css";

export default async function SignInPage() {
  const session = await getSession();

  if (!session) {
    redirect("/");
  }

  return (
    <div className={styles.container}>
      <Logos />
      <span className={styles.heading}>
        Are you sure you want to sign out&#63;
      </span>
      <div className={styles.buttons}>
        <RouteLoaderLink className={styles.home} href={"/"}>
          <Button className={styles.homeBtn}>Back to Home</Button>
        </RouteLoaderLink>
        <SignOutButton className={styles.signOut} variant="red" />
      </div>
    </div>
  );
}
