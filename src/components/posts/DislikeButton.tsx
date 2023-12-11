"use client";
import { Cold } from "@/assets/icons";
import Button from "../Button";

export default function DislikeButton({
  dislikes = 0,
  disabled = false,
  className,
}: {
  dislikes?: number;
} & React.HTMLProps<HTMLButtonElement>) {
  return (
    <Button
      className={className}
      icon={<Cold isFilled={false} />}
      animate={false}
      disabled={disabled}
    >
      {disabled ? <>&nbsp;</> : dislikes}
    </Button>
  );
}
