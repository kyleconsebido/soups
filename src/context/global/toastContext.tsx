"use client";
import { createContext, useContext, useRef } from "react";
import Toasts, { type ToastsRef } from "@/components/Toasts";

const ToastContext: React.Context<ToastsRef> = createContext({} as ToastsRef);

export default function ToastContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const toastsRef = useRef<ToastsRef>(null);

  return (
    <ToastContext.Provider
      value={{
        toast: (message, options) => {
          const toast = toastsRef.current?.toast(message, options);
          return {
            remove(options) {
              setTimeout(() => toast?.remove(options), 0);
            },
          };
        },
      }}
    >
      <Toasts ref={toastsRef} />
      {children}
    </ToastContext.Provider>
  );
}

export const useToastContext = () => useContext(ToastContext);
