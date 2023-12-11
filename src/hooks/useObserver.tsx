"use client";
import { useEffect, useState, useRef, useMemo } from "react";

interface ObserverInstance {
  readonly isIntersecting: boolean;
  target?: React.ReactElement<HTMLSpanElement>;
}

interface useObserverParams {
  target?: React.MutableRefObject<Element | null>;
}

export function useObserver({
  target,
}: useObserverParams = {}): ObserverInstance {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });

    if (target) {
      observer.observe(target.current!);
    } else if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return useMemo(
    () => ({
      isIntersecting,
      target: (
        <span
          ref={targetRef}
          style={{
            height: "1px",
            width: "100%",
            backgroundColor: "transparent",
            opacity: "0",
            pointerEvents: "none",
          }}
        />
      ),
    }),
    [isIntersecting]
  );
}
