"use client";
import {
  forwardRef,
  useCallback,
  useEffect,
  useState,
  useImperativeHandle,
  useRef,
} from "react";
import { cn } from "@/utils";
import styles from "./Modal.module.css";

const TRANSITION_DURATION_MS = 200;

interface StartClosingOptions {
  /**
   * Execute the onClose callback function from Modal Props after closing
   *
   * @defaultValue true
   */
  runOnClose?: boolean;
}

export interface ModalRef {
  el: HTMLDivElement | null;
  startClosing: (options?: StartClosingOptions) => Promise<void>;
}

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

const Modal = forwardRef<ModalRef, ModalProps>(function Modal(
  { isOpen, onClose, children, className, ...props }: ModalProps,
  ref
) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(
    async (options: StartClosingOptions = { runOnClose: true }) => {
      setIsClosing(true);
      await new Promise((resolve) =>
        setTimeout(() => {
          onClose && options?.runOnClose && onClose();
          resolve(null);
        }, TRANSITION_DURATION_MS)
      );
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        handleClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  useEffect(() => {
    if (!isOpen) return;

    window.document.documentElement.style.overflowY = "hidden";

    return () => {
      window.document.documentElement.style.overflowY = "";
    };
  }, [isOpen]);

  useImperativeHandle(
    ref,
    () => ({
      el: modalRef.current,
      async startClosing() {
        await handleClose();
      },
    }),
    [handleClose]
  );

  if (!isOpen) {
    return null;
  }

  function handleClickBackground(e: React.MouseEvent<HTMLDivElement>) {
    handleClose();
  }

  return (
    <div
      ref={modalRef}
      className={cn(styles.container, isClosing && styles.closing)}
      onPointerDown={handleClickBackground}
      style={{
        transitionDuration: TRANSITION_DURATION_MS + "ms",
        ...props.style,
      }}
      aria-hidden={!isOpen || isClosing}
      aria-label="modal"
      aria-modal
      role="dialog"
      {...props}
    >
      <div
        style={{ transitionDuration: TRANSITION_DURATION_MS + "ms" }}
        onPointerDown={(e) => e.stopPropagation()}
        className={cn(styles.modal, className)}
      >
        {children}
      </div>
    </div>
  );
});

export default Modal;
