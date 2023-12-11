"use client";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useObserver } from "@/hooks";
import PostSkeleton from "./posts/PostSkeleton";

export interface ItemList<T> {
  items: T[];
  key: number;
  isLast: boolean;
  setItems: React.Dispatch<React.SetStateAction<T[]>>;
}

interface InfiniteScrollProps<T> {
  itemList: ItemList<T>;
  children: React.ReactNode;
}

export default function InfiniteScroll<T>({
  itemList,
  children,
}: InfiniteScrollProps<T>) {
  const router = useRouter();
  const keyRef = useRef<number>(itemList.key);

  useEffect(() => {
    if (itemList.key === keyRef.current) {
      return;
    }

    if (itemList.key > keyRef.current) {
      keyRef.current = itemList.key;
      itemList.setItems(itemList.items);
      return;
    }

    keyRef.current = itemList.key;
    itemList.setItems((prevItems: typeof itemList.items) => [
      ...prevItems,
      ...itemList.items,
    ]);
  }, [itemList, router]);

  return (
    <>
      {children}
      {!itemList.isLast && (
        <SkeletonObserver router={router} nextKey={itemList.key} />
      )}
    </>
  );
}

function SkeletonObserver({
  nextKey,
  router,
}: {
  nextKey: number;
  router: AppRouterInstance;
}) {
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
