"use client";
import Link, { type LinkProps } from "next/link";
import { useLoadingContext } from "@/context/global/loadingContext";

interface RouterLoaderLinkProps
  extends LinkProps,
    React.HTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
}

export default function RouteLoaderLink({
  children,
  onClick,
  ...props
}: RouterLoaderLinkProps) {
  const { loadRoute } = useLoadingContext();

  return (
    <Link
      onClick={(e) => {
        loadRoute(props.href as string);
        onClick && onClick(e);
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
