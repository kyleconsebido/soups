import { cn } from "@/utils";
import Logo from "./Logo";
import LogoName from "./LogoName";
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
