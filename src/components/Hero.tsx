import { HeroObserverTarget } from "@/context/heroObserverContext";
import { Logo, LogoName } from "@/components/shared/icons";
import Button from "@/components/shared/Button";
import RouteLoaderLink from "./shared/RouteLoaderLink";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div style={{ paddingBottom: "100px", position: "relative" }}>
      <div className={styles.hero}>
        <svg
          className={styles.background}
          width="1920"
          height="600"
          viewBox="0 0 1920 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMax slice"
        >
          <path
            d="M1199.5 600L959.5 542.476L719.5 600L479.5 542.476L239.5 600L-0.5 542.476V0H1919.5V542.476L1679.5 600L1439.5 542.476L1199.5 600Z"
            fill="#393939"
          />
        </svg>
        <div className={styles.container}>
          <Logo className={styles.logo} />
          <div>
            <LogoName className={styles.logoName} />
            <span className={styles.tagline}>Serve your hottest takes</span>
            <RouteLoaderLink href={"/signin"} className={styles.getStarted}>
              <Button className={styles.startButton} variant="red">
                Start Cooking
              </Button>
            </RouteLoaderLink>
          </div>
        </div>
      </div>
      <HeroObserverTarget className={styles.observerTarget} />
    </div>
  );
}
