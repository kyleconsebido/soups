"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import Modal, { type ModalRef } from "@/components/Modal";
import CloseButton from "@/components/CloseButton";
import styles from "./layout.module.css";

export default function SignInModalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const modalRef = useRef<ModalRef>(null);
  const router = useRouter();

  return (
    <Modal
      ref={modalRef}
      onClose={() => router.back()}
      className={styles.modal}
      isOpen
    >
      <CloseButton
        className={styles.close}
        onClick={() => modalRef.current?.close()}
      />
      {children}
    </Modal>
  );
}
