"use client";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { useLoadingContext } from "@/context/global/loadingContext";

export default function useLoaderRouter(): AppRouterInstance {
  const { loadRoute } = useLoadingContext();
  const router = useRouter();

  return {
    ...router,
    push(href, options) {
      loadRoute(href);
      router.push(href, options);
    },
    replace(href, options) {
      loadRoute(href);
      router.replace(href, options);
    },
  };
}
