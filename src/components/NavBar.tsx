"use client";
import type { Session } from "next-auth";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { LogoName } from "./shared/icons";
import RouteLoaderLink from "./shared/RouteLoaderLink";
import Button from "./shared/Button";
import AvatarMenu from "./AvatarMenu";
import styles from "./NavBar.module.css";

export default function NavBar({ user }: { user: Session["user"] }) {
  const [isShown, setIsShown] = useState(true);

  useEffect(() => {
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    function handleScroll() {
      currentScrollPosition = window.scrollY;

      if (previousScrollPosition - currentScrollPosition < 0) {
        setIsShown(false);
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        setIsShown(true);
      }

      previousScrollPosition = currentScrollPosition;
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(styles.nav, !isShown && styles.hide)}>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li>
            <RouteLoaderLink className={styles.link} href={"/"}>
              <LogoName className={styles.logo} />
            </RouteLoaderLink>
          </li>
        </ul>
        <ul className={cn(styles.list, styles.end)}>
          <li>
            {!user ? (
              <RouteLoaderLink
                className={styles.link}
                href={"/signin"}
                scroll={false}
              >
                <Button
                  className={styles.signIn}
                  variant="yellow"
                  aria-label="Sign In"
                >
                  Sign in
                </Button>
              </RouteLoaderLink>
            ) : (
              <AvatarMenu />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
