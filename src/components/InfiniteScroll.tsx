"use client";
import { useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useObserver } from "@/hooks";
import PostSkeleton from "./posts/PostSkeleton";

export default function InfiniteScroll({ nextKey }: { nextKey: number }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentKey = Number(searchParams.get("key"));

  const skeletonRef = useRef<HTMLDivElement | null>(null);

  const { isIntersecting } = useObserver({ target: skeletonRef });

  useEffect(() => {
    if (isIntersecting && currentKey !== nextKey) {
      router.replace(`?key=${nextKey}`, { scroll: false });
    }
  }, [isIntersecting, router, currentKey, nextKey]);

  return (
    <>
      <PostSkeleton ref={skeletonRef} />
      <PostSkeleton />
    </>
  );
}
