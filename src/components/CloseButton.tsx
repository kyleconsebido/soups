"use client";
import { forwardRef } from "react";
import { Close } from "@/assets/icons";
import { cn } from "@/utils";
import styles from "./CloseButton.module.css";

interface CloseButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  light?: boolean;
}

const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  function CloseButton({ light, className, ...props }: CloseButtonProps, ref) {
    return (
      <button
        ref={ref}
        className={cn(styles.closeBtn, className)}
        style={
          light
            ? ({
                "--background-color": "rgba(0, 0, 0, 0.05)",
                ...props.style,
              } as React.CSSProperties)
            : { ...props.style }
        }
        {...props}
      >
        <Close className={styles.closeIcon} />
      </button>
    );
  }
);

export default CloseButton;
