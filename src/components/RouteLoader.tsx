"use client";
import {
  useImperativeHandle,
  forwardRef,
  useState,
  useEffect,
  useRef,
} from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import styles from "./RouteLoader.module.css";

const LOADING_THRESHOLD_MS = 50;
const EXTEND_100_DURATION_MS = 500;

export type LoadRouteFn = (href: string) => void;

export interface RouteLoaderRef {
  loadRoute: LoadRouteFn;
}

const RouteLoader = forwardRef<RouteLoaderRef>(function RouteLoader(_, ref) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const pathRef = useRef("");
  const loaderRef = useRef<HTMLSpanElement>(null);

  useImperativeHandle(
    ref,
    () => ({
      loadRoute: (href: string) => {
        setTimeout(() => {
          if (href === pathRef.current) {
            setIsLoading(false);
            return;
          }

          setIsLoading(true);
        }, LOADING_THRESHOLD_MS);
      },
    }),
    []
  );

  useEffect(() => {
    pathRef.current = pathname;

    let timeout = setTimeout(() => {
      if (loaderRef?.current) {
        loaderRef.current.style.width = loaderRef?.current?.clientWidth + "px";
      }

      setIsLoading(false);

      timeout = setTimeout(() => {
        if (loaderRef?.current) {
          loaderRef.current.style.width = "";
        }
      }, EXTEND_100_DURATION_MS);
    }, LOADING_THRESHOLD_MS);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <span
      ref={loaderRef}
      className={cn(styles.loader, isLoading && styles.loading)}
    />
  );
});

export default RouteLoader;
