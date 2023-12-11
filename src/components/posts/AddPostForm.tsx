"use client";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { useToastContext } from "@/context";
import { MAX_POST_CHARACTERS, MAX_TITLE_CHARACTERS } from "@/lib/constants";
import { Input, TextArea, SubmitButton } from "../form";
import { createSoup } from "@/services/posts/actions";
import styles from "./AddPost.module.css";

interface AddPostFormProps {
  title: string;
  body: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
  ) => void;
  onSuccess: () => void;
}

export default function AddPostForm({
  title,
  body,
  onChange,
  onSuccess,
}: AddPostFormProps) {
  const { toast } = useToastContext();
  const [state, formAction] = useFormState(createSoupWrapper, null);

  useEffect(() => {
    if (state?.error) {
      toast(state.error, { type: "error", routePersist: true });
    } else if (state?.data) {
      toast("Fresh soup served!", { type: "success", routePersist: true });
      onSuccess();
    }
  }, [state, toast, onSuccess]);

  return (
    <form action={formAction} className={styles.form}>
      <Input
        className={styles.title}
        name="title"
        placeholder="Title"
        value={title}
        onChange={onChange}
        autoFocus
        required
        maxLength={MAX_TITLE_CHARACTERS}
      />
      <span className={styles.count}>
        {`${title.length}/${MAX_TITLE_CHARACTERS}`}
      </span>
      <TextArea
        className={styles.body}
        name="body"
        placeholder="Body"
        value={body}
        onChange={onChange}
        required
        maxLength={MAX_POST_CHARACTERS}
      />
      <div className={styles.submitContainer}>
        <span className={styles.count}>
          {`${body.length}/${MAX_POST_CHARACTERS}`}
        </span>
        <SubmitButton
          label="Serve Soup"
          className={styles.submit}
          disabled={!title || !body}
        />
      </div>
    </form>
  );
}

async function createSoupWrapper(
  _state: FormState<number> | null,
  formData: FormData
) {
  return await createSoup(formData);
}
