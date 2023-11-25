"use client";
import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useEffectAfterMount } from "@/hooks";
import { cn } from "@/lib/utils";
import { paths } from "./Sidebar";
import { Hamburger } from "./shared/icons";
import styles from "./HamburgerNav.module.css";
import RouteLoaderLink from "./shared/RouteLoaderLink";

const NAV_TRANSITION_MS = 200;

export default function HamburgerNav({
  isOpen,
  openNav,
  closeNav,
}: {
  readonly isOpen: boolean;
  openNav: () => void;
  closeNav: () => void;
}) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    setIsClosing(true);

    setTimeout(() => {
      closeNav();
      setIsClosing(false);
    }, NAV_TRANSITION_MS);
  }, [closeNav]);

  return (
    <>
      <button
        onClick={isOpen ? handleClose : openNav}
        className={styles.hamburgerBtn}
      >
        <Hamburger
          className={cn(styles.hamburgerIcon, isOpen && styles.open)}
        />
      </button>

      {isOpen && <Nav isClosing={isClosing} closeNav={handleClose} />}
    </>
  );
}

function Nav({
  isClosing,
  closeNav,
}: {
  isClosing: boolean;
  closeNav: () => void;
}) {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.style.overflowY = "hidden";

    return () => {
      document.documentElement.style.overflowY = "";
    };
  }, []);

  useEffectAfterMount(() => {
    closeNav();
  }, [pathname, closeNav]);

  return (
    <div className={cn(styles.nav, isClosing && styles.closing)}>
      <div className={styles.container}>
        {Object.entries(paths).map(([path, pathInfo]) => (
          <RouteLoaderLink
            key={path}
            href={path}
            className={styles.link}
            onClick={closeNav}
          >
            <span>{pathInfo.label}</span>
            <span className={styles.icon}>{pathInfo.icon}</span>
          </RouteLoaderLink>
        ))}
      </div>
    </div>
  );
}
