"use client";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { useFormStatus } from "react-dom";
import Button, { type ButtonProps } from "../Button";
import styles from "./SubmitButton.module.css";
import { cn } from "@/utils";
import Spinner from "../Spinner";

interface SubmitButtonRef {
  readonly el: HTMLButtonElement;
  readonly pending: boolean;
}

interface SubmitButtonProps extends ButtonProps {
  label?: string;
}

export const SubmitButton = forwardRef<SubmitButtonRef, SubmitButtonProps>(
  function SubmutButton(
    { label = "Save", className, disabled, ...props },
    ref
  ) {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const { pending } = useFormStatus();

    useImperativeHandle(
      ref,
      () => ({
        el: buttonRef.current!,
        pending,
      }),
      [pending]
    );

    return (
      <Button
        {...props}
        type="submit"
        className={cn(styles.submit, className)}
        ref={buttonRef}
        disabled={pending || disabled}
      >
        {pending ? <Spinner /> : label}
      </Button>
    );
  }
);
