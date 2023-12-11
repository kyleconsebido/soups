"use client";
import { useCallback, useRef, useState } from "react";
import { MAX_POST_CHARACTERS, MAX_TITLE_CHARACTERS } from "@/lib/constants";
import { Add } from "@/assets/icons";
import Modal, { type ModalRef } from "@/components/Modal";
import Button from "@/components/Button";
import styles from "./AddPost.module.css";
import AddPostForm from "./AddPostForm";

const INITIAL_VALUE = {
  title: "",
  body: "",
};

export default function AddPostButton() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<ModalRef | null>(null);

  const [formData, setFormData] = useState(INITIAL_VALUE);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
  ) {
    const { name, value } = e.currentTarget;

    const max = name === "body" ? MAX_POST_CHARACTERS : MAX_TITLE_CHARACTERS;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value.slice(0, max),
    }));
  }

  const handleSuccess = useCallback(() => {
    modalRef.current?.close();
    setFormData(INITIAL_VALUE);
  }, []);

  return (
    <>
      <Button
        className={styles.addPost}
        icon={<Add className={styles.addIcon} />}
        onClick={() => setIsOpen(true)}
        animate={false}
      >
        New Soup
      </Button>

      {isOpen && (
        <Modal
          ref={modalRef}
          className={styles.modal}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <AddPostForm
            title={formData.title}
            body={formData.body}
            onChange={handleChange}
            onSuccess={handleSuccess}
          />
        </Modal>
      )}
    </>
  );
}
