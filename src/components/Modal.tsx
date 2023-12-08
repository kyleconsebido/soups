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

export interface ModalRef {
  el: HTMLDivElement | null;
  close: () => Promise<void>;
}

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

const Modal = forwardRef<ModalRef, ModalProps>(function Modal(
  { isOpen = false, onClose, children, className, ...props }: ModalProps,
  ref
) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(isOpen);

  const handleClose = useCallback(async () => {
    modalRef.current?.classList.add(styles.closing);
    await new Promise((resolve) =>
      setTimeout(() => {
        modalRef.current?.classList.remove(styles.closing);
        onClose && onClose();
        setOpen(false);
        resolve(null);
      }, TRANSITION_DURATION_MS)
    );
  }, [onClose]);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        handleClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, handleClose]);

  useEffect(() => {
    if (!open) return;

    window.document.documentElement.style.overflowY = "hidden";

    return () => {
      window.document.documentElement.style.overflowY = "";
    };
  }, [open]);

  useImperativeHandle(
    ref,
    () => ({
      el: modalRef.current,
      close: handleClose,
    }),
    [handleClose]
  );

  if (!open) {
    return null;
  }

  function handleClickBackground(e: React.MouseEvent<HTMLDivElement>) {
    handleClose();
  }

  return (
    <div
      ref={modalRef}
      className={styles.container}
      onPointerDown={handleClickBackground}
      style={{
        transitionDuration: TRANSITION_DURATION_MS + "ms",
        ...props.style,
      }}
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
