"use client";
import { forwardRef } from "react";
import { signOut } from "next-auth/react";
import { SignOut } from "../shared/icons";
import Button, { type ButtonProps } from "../shared/Button";
import styles from "./SignOutButton.module.css";
import { cn } from "@/lib/utils";

interface SignOutButtonProps extends ButtonProps {
  callbackUrl?: string | undefined;
}

const SignOutButton = forwardRef<HTMLButtonElement, SignOutButtonProps>(
  function SignOutButton({ callbackUrl = "/", className, ...props }, ref) {
    return (
      <Button
        {...props}
        ref={ref}
        className={cn(styles.btn, className)}
        onClick={() => signOut({ callbackUrl })}
        icon={<SignOut className={styles.icon} />}
      >
        <span className={styles.text}>Sign Out</span>
      </Button>
    );
  }
);

export default SignOutButton;
