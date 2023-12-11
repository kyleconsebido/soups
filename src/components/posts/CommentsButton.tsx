"use client";
import { Comments } from "@/assets/icons";
import Button from "../Button";

export default function CommentsButton({
  comments = 0,
  disabled = false,
  className,
}: {
  comments?: number;
} & React.HTMLProps<HTMLButtonElement>) {
  return (
    <Button
      icon={<Comments isFilled={false} />}
      animate={false}
      disabled={disabled}
      className={className}
    >
      {disabled ? <>&nbsp;</> : comments}
    </Button>
  );
}
