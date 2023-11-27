"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";

interface HeroContextValues {
  readonly isIntersecting: boolean;
  readonly setIsIntersecting: React.Dispatch<boolean>;
}

const HeroContext: React.Context<HeroContextValues> = createContext(
  {} as HeroContextValues
);

export default function HeroContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  return (
    <HeroContext.Provider value={{ isIntersecting, setIsIntersecting }}>
      {children}
    </HeroContext.Provider>
  );
}

export const useHeroContext = () => useContext(HeroContext);

export function HeroObserverTarget({
  ...props
}: React.HTMLProps<HTMLSpanElement>) {
  const { setIsIntersecting } = useHeroContext();

  const targetRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });

    observer.observe(targetRef.current!);

    return () => observer.disconnect();
  }, [setIsIntersecting]);

  return (
    <span
      {...props}
      ref={targetRef}
      style={{
        display: "block",
        height: "1px",
        width: "100%",
        opacity: "0",
        backgroundColor: "transparent",
        pointerEvents: "none",
      }}
    />
  );
}
