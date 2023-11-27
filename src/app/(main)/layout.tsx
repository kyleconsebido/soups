import type { Session } from "next-auth";
import { getSession } from "next-auth/react";
import NavBar from "@/components/layout/NavBar";
import SideBar from "@/components/layout/Sidebar";
import Hero from "./Hero";
import HeroContextProvider from "./heroObserverContext";
import styles from "./layout.module.css";

export default async function MainLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const session = await getSession();

  return (
    <>
      <HeroContextProvider>
        <NavBar user={session?.user as Session["user"]} />
        {!session && <Hero />}
      </HeroContextProvider>
      <main className={styles.main}>
        {session && <SideBar userId={session?.user?.id} />}
        {props.children}
      </main>
      {props?.modal}
    </>
  );
}
