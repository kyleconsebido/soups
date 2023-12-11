import { cn } from "@/utils";
import styles from "./Skeleton.module.css";

interface SkeletonProps extends React.HTMLProps<HTMLDivElement> {
  /**@defaultValue 100% */
  width?: React.CSSProperties["width"];
  /**@defaultValue 1em */
  height?: React.CSSProperties["height"];
  /**@defaultValue true */
  animate?: boolean;
}

export default function Skeleton({
  width = "100%",
  height = "1em",
  animate = true,
  className,
  style,
  ...props
}: SkeletonProps) {
  return (
    <div
      {...props}
      className={cn(styles.skeleton, animate && styles.animate, className)}
      style={{ width, height, ...style }}
    />
  );
}
