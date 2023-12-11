"use client";
import type { Post } from "@/lib/db/models";
import { useRef, useEffect, useState } from "react";
import { cn } from "@/utils";
import styles from "./PostBody.module.css";

interface PostBodyProps extends React.HTMLProps<HTMLDivElement> {
  body: Post["body"];
}

export default function PostBody({ body, className }: PostBodyProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [showMore, setShowMore] = useState(false);
  const [overflowing, setOverflowing] = useState({
    value: false,
    scrollHeight: 100,
  });

  useEffect(() => {
    if (ref.current?.scrollHeight! > ref.current?.clientHeight!) {
      setOverflowing({
        value: true,
        scrollHeight: ref.current?.scrollHeight!,
      });
    }
  }, [body]);

  return (
    <div
      ref={ref}
      className={cn(className, showMore && styles.showAll)}
      style={
        {
          "--scroll-height": overflowing.scrollHeight + "px",
        } as React.CSSProperties
      }
    >
      <div className={cn(overflowing.value && styles.overflowing)}>{body}</div>
      {overflowing.value && (
        <button
          title={!showMore ? "Show More" : "Show Less"}
          className={styles.showMore}
          onClick={() => setShowMore((shown) => !shown)}
        >
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </button>
      )}
    </div>
  );
}
