"use client";
import { ReactElement, forwardRef, useCallback, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import styles from "./Button.module.css";

type ButtonVariants = "dark" | "gray" | "red" | "yellow";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  animate?: boolean;
  variant?: ButtonVariants;
  icon?: ReactElement<SVGSVGElement>;
  className?: string;
  type?: "button" | "reset" | "submit" | undefined;
  children?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    animate = true,
    variant,
    icon,
    className,
    type,
    children,
    style,
    onMouseMove,
    ...props
  }: ButtonProps,
  ref
) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, Event>) => {
      const { x, y } = e.currentTarget.getBoundingClientRect();
      setPosition({ x: e.clientX - x, y: e.clientY - y });
    },
    []
  );

  return (
    <button
      ref={ref}
      type={type ?? "button"}
      aria-disabled={props?.disabled}
      className={cn(styles.button, styles[variant ?? ""], className)}
      onMouseMove={animate ? handleMouseMove : undefined}
      {...props}
      style={
        {
          "--x": position.x,
          "--y": position.y,
          "--display-animate": animate ? "initial" : "none",
          ...style,
        } as React.CSSProperties
      }
    >
      {icon}
      {icon ? <span className={styles.hasIcon}>{children}</span> : children}
    </button>
  );
});

export default Button;
