"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/utils";
import { FreshSoup, Chefs, Cookbooks, User } from "../../assets/icons";
import RouteLoaderLink from "../RouteLoaderLink";
import styles from "./Sidebar.module.css";

type Path = "/" | "/following" | "/saved" | `/profile`;

interface PathInfo {
  label: string;
  icon: React.ReactElement<SVGSVGElement>;
}

export const paths: Record<Path, PathInfo> = {
  "/": { label: "Freshly Made", icon: <FreshSoup /> },
  "/following": { label: "Followed Chefs", icon: <Chefs /> },
  "/saved": { label: "Saved Cookbooks", icon: <Cookbooks /> },
  "/profile": { label: "My Profile", icon: <User /> },
} as const;

export default function SideBar({ userId }: { userId?: string }) {
  const [hoveredOn, setHoveredOn] = useState<number>(0);
  const pathname = usePathname();

  function handlePointerEnter(i: number) {
    return () => {
      setHoveredOn(i);
    };
  }

  const animateCurrent: React.CSSProperties | undefined =
    hoveredOn === 0 ? { animationDuration: "0s" } : undefined;

  const currentPathIndex = Object.keys(paths).indexOf(
    "/" + pathname.split("/")[1]
  );

  return (
    <section
      className={styles.sidebar}
      style={{ "--items": Object.keys(paths).length } as React.CSSProperties}
      onPointerLeave={() => setHoveredOn((num) => Math.abs(num) * -1)}
    >
      {hoveredOn !== 0 && (
        <span
          className={cn(styles.hoverBox, hoveredOn < 0 && styles.exit)}
          role="presentation"
          aria-hidden="true"
          style={{ "--i": Math.abs(hoveredOn) } as React.CSSProperties}
        />
      )}
      {currentPathIndex !== -1 && (
        <span
          className={cn(styles.selectedBox, styles.animate)}
          role="presentation"
          aria-hidden="true"
          style={
            {
              "--i": currentPathIndex + 1,
              ...animateCurrent,
            } as React.CSSProperties
          }
        />
      )}

      {Object.entries(paths).map(([path, pathInfo], i) => (
        <RouteLoaderLink
          key={path}
          href={path === "/profile" ? `/profile/${userId}` : path}
          className={cn(
            styles.link,
            path === "/profile"
              ? pathname.includes(path) && styles.selected
              : pathname === path && styles.selected
          )}
          onPointerEnter={handlePointerEnter(i + 1)}
        >
          <span className={styles.icon}>{pathInfo.icon}</span>
          {pathInfo.label}
        </RouteLoaderLink>
      ))}
    </section>
  );
}
