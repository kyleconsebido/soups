"use client";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import Modal, { type ModalRef } from "@/components/Modal";
import CloseButton from "@/components/CloseButton";
import styles from "./layout.module.css";

export default function SignInModalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const modalRef = useRef<ModalRef>(null);

  const [isOpen, setIsOpen] = useState(true);

  const router = useRouter();

  function handleClose() {
    setIsOpen(false);

    router.back();
  }

  return (
    <Modal
      ref={modalRef}
      isOpen={isOpen}
      onClose={handleClose}
      className={styles.modal}
    >
      <CloseButton
        className={styles.close}
        onClick={() => modalRef.current?.startClosing()}
      />
      {children}
    </Modal>
  );
}
