"use client";
import { Hot } from "@/assets/icons";
import Button from "../Button";

export default function LikeButton({
  likes = 0,
  disabled = false,
  className,
}: {
  likes?: number;
} & React.HTMLProps<HTMLButtonElement>) {
  return (
    <Button
      className={className}
      icon={<Hot isFilled={false} />}
      animate={false}
      disabled={disabled}
    >
      {disabled ? <>&nbsp;</> : likes}
    </Button>
  );
}
