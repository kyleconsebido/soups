import "server-only";
import { redirect } from "next/navigation";
import { getProviders } from "next-auth/react";
import { getSession } from "@/utils/auth/getSession";
import { cn } from "@/utils";
import Provider from "./Provider";
import AuthError from "./AuthError";
import Logos from "../../assets/Logos";
import styles from "./SignIn.module.css";

export default async function SignIn() {
  const session = await getSession();

  if (session) {
    redirect("/");
  }

  const providers = await getProviders();

  return (
    <div className={styles.container}>
      <AuthError />
      <Logos />
      <span className={cn(styles.welcome)}>WELCOME</span>
      <div className={styles.providers}>
        {providers &&
          Object.values(providers).map((provider) => (
            <Provider key={provider?.name} provider={provider} />
          ))}
      </div>
    </div>
  );
}
