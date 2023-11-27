"use client";
import { SessionProvider } from "next-auth/react";

import LoadingContextProvider from "./loadingContext";
export { useLoadingContext } from "./loadingContext";

import ToastContextProvider from "./toastContext";
export { useToastContext } from "./toastContext";

export default function GlobalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <ToastContextProvider>
        <LoadingContextProvider>{children}</LoadingContextProvider>
      </ToastContextProvider>
    </SessionProvider>
  );
}
