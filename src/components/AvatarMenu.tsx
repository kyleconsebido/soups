"use client";
import type { Session } from "next-auth";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { User } from "./shared/icons";
import RouteLoaderLink from "./shared/RouteLoaderLink";
import Avatar from "./shared/Avatar";
import Button from "./shared/Button";
import SignOutButton from "./auth/SignOutButton";
import styles from "./AvatarMenu.module.css";

const MENU_TRANSITION_MS = 200;

export default function AvatarMenu({
  user,
  isHamburgerOpen,
}: {
  user?: Session["user"];
  isHamburgerOpen: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleOpen = useCallback(
    (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e?.stopPropagation();
      setIsOpen(true);
    },
    []
  );

  const handleClose = useCallback(
    (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e?.stopPropagation();
      menuRef.current?.classList?.add(styles.close);

      setTimeout(() => {
        setIsOpen(false);
      }, MENU_TRANSITION_MS);
    },
    []
  );

  useEffect(() => {
    if (!isOpen) return;

    function handleClick() {
      handleClose();
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.code === "Escape") {
        handleClose();
      }
    }

    window.addEventListener("click", handleClick);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleClose]);

  return (
    <div className={styles.container}>
      <Avatar src={user?.image!} onClick={isOpen ? handleClose : handleOpen} />

      {isOpen && (
        <div
          ref={menuRef}
          className={cn(styles.menu, isHamburgerOpen && styles.hamburgerOpen)}
          onClick={(e) => e.stopPropagation()}
          aria-label="Account Menu"
          role="dialog"
        >
          <div className={styles.user}>
            <Avatar src={user?.image!} className={styles.avatar} disabled />
            <div className={styles.info}>
              <span className={styles.name}>{user?.name}</span>
              <span className={styles.email}>{user?.email}</span>
            </div>
          </div>
          <div className={styles.buttons}>
            <RouteLoaderLink
              href={`/profile/${user?.id ?? ""}`}
              className={styles.posts}
              onClick={() => handleClose()}
            >
              <Button icon={<User className={styles.soupIcon} />}>
                Profile
              </Button>
            </RouteLoaderLink>
            <SignOutButton className={styles.signOut} variant="red" />
          </div>
        </div>
      )}
    </div>
  );
}
