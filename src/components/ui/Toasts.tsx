"use client";
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import { useDynamicArrayRefs, useEffectAfterMount } from "@/hooks";
import { cn } from "@/utils";
import CloseButton from "../CloseButton";
import styles from "./Toasts.module.css";

const DEFAULT_TIMEOUT_MS = 5000;
const TRANSITION_EXIT_DURATION_MS = 500;

type ToastType = "success" | "error";

export type ToastInstance = {
  remove: (options?: { instant?: boolean }) => void;
};

export interface ToastsRef {
  toast: (message: Toast["message"], options?: ToastOptions) => ToastInstance;
}

export interface Toast {
  id: number;
  message: React.ReactNode | string;
  ref?: HTMLDivElement;
}

export interface ToastOptions {
  type?: ToastType;
  /**
   * Number of milliseconds before toast is automatically closed
   *
   * Value of `0` will stop it from automatically closing
   *
   * @defaultValue 5000
   */
  timeout?: number;
  /** Shows the close button */
  dismissible?: boolean;
  /** Persists toast when route changes */
  routePersist?: boolean;
}

interface ToastComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  toast: Toast & ToastOptions;
  handleRemove: (toastId: Toast["id"]) => void;
}

const ToastComponent = forwardRef<HTMLDivElement, ToastComponentProps>(
  function ToastComponent(
    { toast, handleRemove, ...props }: ToastComponentProps,
    ref
  ) {
    const pathname = usePathname();
    const toastRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => toastRef.current as HTMLDivElement, []);

    useLayoutEffect(() => {
      function setHeight() {
        toastRef?.current?.style.setProperty(
          "--height",
          toastRef.current?.clientHeight + "px"
        );
      }

      setHeight();

      window.addEventListener("resize", setHeight);

      return () => window.removeEventListener("resize", setHeight);
    }, [ref]);

    useEffect(() => {
      if (toast.timeout === 0) return;

      const timeout = setTimeout(
        () => {
          handleRemove(toast.id);
        },
        !toast?.timeout ? DEFAULT_TIMEOUT_MS : toast.timeout
      );

      return () => clearTimeout(timeout);
    }, [toast, handleRemove]);

    useEffectAfterMount(() => {
      handleRemove(toast.id);
    }, [pathname, handleRemove]);

    return (
      <div
        ref={toastRef}
        className={cn(styles.toast, styles[toast.type ?? ""])}
        {...props}
      >
        <span className={styles.message}>{toast.message}</span>
        {(toast?.dismissible === undefined || toast?.dismissible) && (
          <CloseButton
            onClick={() => handleRemove(toast.id)}
            light={Boolean(toast?.type)}
          />
        )}
      </div>
    );
  }
);

const Toasts = forwardRef<ToastsRef>(function Toasts(_, ref) {
  const [toasts, setToasts] = useState<(Toast & ToastOptions)[]>([]);
  const refs = useDynamicArrayRefs<{
    id?: Toast["id"];
    el?: HTMLDivElement | null;
  }>(toasts, {
    fillWith: {},
  });

  const removeToast = useCallback((toastId: Toast["id"]) => {
    setToasts((prevToasts) =>
      [...prevToasts].filter((toast) => toast.id !== toastId)
    );
  }, []);

  const handleRemove = useCallback(
    (toastId: Toast["id"], options?: { instant?: boolean }) => {
      const toast = refs.current.find((ref) => ref.id === toastId)?.el;
      toast?.classList?.add(styles.closing);
      setTimeout(
        () => {
          removeToast(toastId);
        },
        options?.instant ? 0 : TRANSITION_EXIT_DURATION_MS / 2
      );
    },
    [refs, removeToast]
  );

  useImperativeHandle(
    ref,
    (): ToastsRef => {
      return {
        toast(message, options): ToastInstance {
          const id = Date.now() + Math.random();

          setToasts((prevToasts) => {
            return [{ id, message, ...options }, ...prevToasts];
          });

          return {
            remove(options?: { instant?: boolean }) {
              handleRemove(id, options);
            },
          };
        },
      };
    },
    [handleRemove]
  );

  return (
    toasts.length > 0 && (
      <div className={styles.container}>
        <div className={styles.toasts}>
          {toasts.map((toast, i) => (
            <ToastComponent
              ref={(el) => {
                refs.current[i] = { id: toast.id, el };
              }}
              key={toast.id}
              toast={toast}
              handleRemove={handleRemove}
              style={{ "--index": i } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    )
  );
});

export default Toasts;
