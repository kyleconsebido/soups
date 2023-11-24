"use client";
import type { ImageProps } from "next/dist/shared/lib/get-img-props";
import { forwardRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import DefaultAvatar from "./icons/DefaultAvatar";
import styles from "./Avatar.module.css";

type AvatarProps = React.HTMLAttributes<HTMLButtonElement> &
  React.HTMLProps<HTMLButtonElement> &
  Pick<React.HTMLProps<HTMLImageElement>, "src">;

const Avatar = forwardRef<HTMLButtonElement, AvatarProps>(function Avatar(
  { type = "button", className, disabled, src, ...props },
  ref
) {
  const [error, setError] = useState<React.SyntheticEvent<
    HTMLImageElement,
    Event
  > | null>(null);

  useEffect(() => {
    src && setError(null);
  }, [src]);

  return (
    <button
      ref={ref}
      type={type as React.ButtonHTMLAttributes<HTMLButtonElement>["type"]}
      className={cn(styles.btn, className)}
      aria-label="Avatar"
      disabled={!src || disabled}
      aria-disabled={disabled}
      {...props}
    >
      {error ? (
        <DefaultAvatar style={{ width: 32, height: 32 }} />
      ) : (
        src && (
          <div className={styles.container}>
            <Image
              className={styles.avatar}
              src={src}
              height={300}
              width={300}
              alt="Avatar"
              onError={setError}
            />
          </div>
        )
      )}
    </button>
  );
});

export default Avatar;
