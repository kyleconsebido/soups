"use client";
import { forwardRef } from "react";
import { cn } from "@/utils";
import styles from "./Input.module.css";

export const TextArea = forwardRef<
  HTMLTextAreaElement,
  React.HTMLProps<HTMLTextAreaElement>
>(function TextArea(
  { className, ...props }: React.HTMLProps<HTMLTextAreaElement>,
  ref
) {
  return (
    <div className={styles.container}>
      {props?.placeholder && (
        <span className={styles.placeholder}>{props?.placeholder}</span>
      )}
      <textarea
        ref={ref}
        className={cn(styles.input, "scrollbar", className)}
        {...props}
      />
    </div>
  );
});
