"use client";
import { forwardRef } from "react";
import { cn } from "@/utils";
import styles from "./Input.module.css";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { error, className, ...props }: InputProps,
  ref
) {
  return (
    <div className={styles.container}>
      {props?.placeholder && (
        <span className={styles.placeholder} data-error={error}>
          {props?.placeholder}
        </span>
      )}
      <input ref={ref} className={cn(styles.input, className)} {...props} />
    </div>
  );
});
