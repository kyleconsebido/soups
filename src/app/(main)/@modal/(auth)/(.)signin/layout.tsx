"use client";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import Modal, { type ModalRef } from "@/components/shared/Modal";
import styles from "./layout.module.css";
import CloseButton from "@/components/shared/icons/CloseButton";

export default function SignInModalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const modalRef = useRef<ModalRef>(null);

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
