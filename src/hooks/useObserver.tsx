"use client";
import { useEffect, useState, useRef, useMemo } from "react";

interface ObserverInstance {
  readonly isIntersecting: boolean;
  target?: React.ReactElement<HTMLSpanElement>;
}

interface useObserverParams {
  target?: Element;
}

export default function useObserver({
  target,
}: useObserverParams): ObserverInstance {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });

    if (target) {
      observer.observe(target);
    } else if (targetRef.current) {
      observer.observe(targetRef.current);
    } else {
      console.error(
        new TypeError(
          "useObserver has no target to observe. Either pass a target in the parameters or use the returned target"
        )
      );
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
