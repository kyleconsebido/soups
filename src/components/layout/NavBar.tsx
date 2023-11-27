"use client";
import type { Session } from "next-auth";
import { useCallback, useState } from "react";
import { cn } from "@/utils";
import { useHeroContext } from "@/app/(main)/heroObserverContext";
import LogoName from "@/assets/LogoName";
import RouteLoaderLink from "../RouteLoaderLink";
import Button from "../Button";
import HamburgerNav from "./HamburgerNav";
import AvatarMenu from "./AvatarMenu";
import styles from "./NavBar.module.css";

export default function NavBar({ user }: { user: Session["user"] }) {
  const { isIntersecting } = useHeroContext();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const handleHamburgerOpen = useCallback(() => {
    setIsHamburgerOpen(true);
  }, []);

  const handleHamburgerClose = useCallback(() => {
    setIsHamburgerOpen(false);
  }, []);

  return (
    <nav
      className={cn(
        styles.nav,
        !isIntersecting && !user && styles.shift,
        isHamburgerOpen && styles.hamburgerOpen
      )}
    >
      <div className={styles.container}>
        <ul className={styles.list}>
          {user && (
            <li className={styles.hamburger}>
              <HamburgerNav
                isOpen={isHamburgerOpen}
                openNav={handleHamburgerOpen}
                closeNav={handleHamburgerClose}
              />
            </li>
          )}
          <li>
            <RouteLoaderLink
              className={cn(
                styles.link,
                !isIntersecting && !user && styles.hide
              )}
              href={"/"}
            >
              <LogoName className={styles.logo} />
            </RouteLoaderLink>
          </li>
        </ul>
        <ul className={cn(styles.list, styles.end)}>
          <li>
            {!user ? (
              <RouteLoaderLink
                className={cn(styles.link, !isIntersecting && styles.hide)}
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
              <AvatarMenu isHamburgerOpen={isHamburgerOpen} user={user} />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
