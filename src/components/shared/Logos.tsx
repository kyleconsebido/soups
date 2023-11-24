import { Logo, LogoName } from "./icons";
import { cn } from "@/lib/utils";
import styles from "./Logos.module.css";

export default function Logos({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div {...props} className={cn(styles.logoContainer, className)}>
      <Logo animate={false} className={styles.logo} />
      <LogoName className={styles.logoName} />
    </div>
  );
}
