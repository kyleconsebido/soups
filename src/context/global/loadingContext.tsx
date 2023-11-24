"use client";
import { createContext, useCallback, useContext, useRef } from "react";
import RouteLoader, {
  type RouteLoaderRef,
  type LoadRouteFn,
} from "@/components/RouteLoader";

interface LoadingContextValues {
  loadRoute: LoadRouteFn;
}

const LoadingContext: React.Context<LoadingContextValues> = createContext(
  {} as LoadingContextValues
);

export default function LoadingContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const routeLoaderRef = useRef<RouteLoaderRef>(null);

  const loadRoute = useCallback((href: string) => {
    routeLoaderRef.current?.loadRoute(href);
  }, []);

  return (
    <LoadingContext.Provider value={{ loadRoute }}>
      <RouteLoader ref={routeLoaderRef} />
      {children}
    </LoadingContext.Provider>
  );
}

export const useLoadingContext = () => useContext(LoadingContext);
