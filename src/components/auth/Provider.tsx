"use client";
import type { ClientSafeProvider } from "next-auth/react";
import { signIn } from "next-auth/react";
import ProviderIcon from "./ProviderIcons";
import Button from "../shared/Button";
import styles from "./Provider.module.css";

export default function Provider({
  provider,
}: {
  provider: ClientSafeProvider;
}) {
  return (
    <Button onClick={() => signIn(provider.id)} className={styles.button}>
      <ProviderIcon providerId={provider.id} className={styles.icon} />
      <span>Sign in with {provider.name}</span>
    </Button>
  );
}
