import { useCallback, useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import Avatar from "./shared/Avatar";
import SignOutButton from "./auth/SignOutButton";
import styles from "./AvatarMenu.module.css";
import RouteLoaderLink from "./shared/RouteLoaderLink";
import Button from "./shared/Button";
import { Chefs, Soup } from "./shared/icons";

const MENU_TRANSITION_MS = 200;

export default function AvatarMenu() {
  const { data } = useSession();

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleOpen = useCallback(
    (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e?.stopPropagation();
      setIsOpen(true);
    },
    []
  );

  const handleClose = useCallback(
    (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e?.stopPropagation();
      menuRef.current?.classList?.add(styles.close);

      setTimeout(() => {
        setIsOpen(false);
      }, 200);
    },
    []
  );

  useEffect(() => {
    if (!isOpen) return;

    function handleClick() {
      handleClose();
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.code === "Escape") {
        handleClose();
      }
    }

    window.addEventListener("click", handleClick);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleClose]);

  return (
    <div className={styles.container}>
      <Avatar
        src={data?.user?.image!}
        onClick={isOpen ? handleClose : handleOpen}
      />

      {isOpen && (
        <div
          ref={menuRef}
          className={styles.menu}
          onClick={(e) => e.stopPropagation()}
          aria-label="Account Menu"
          role="dialog"
        >
          <div className={styles.user}>
            <Avatar
              src={data?.user?.image!}
              className={styles.avatar}
              disabled
            />
            <div className={styles.info}>
              <span className={styles.name}>{data?.user?.name}</span>
              <span className={styles.email}>{data?.user?.email}</span>
            </div>
          </div>
          <RouteLoaderLink href={"/1"} className={styles.posts}>
            <Button icon={<Soup className={styles.soupIcon} />}>
              Your Soups
            </Button>
          </RouteLoaderLink>
          <SignOutButton className={styles.signOut} variant="red" />
        </div>
      )}
    </div>
  );
}
