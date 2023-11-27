import { type Session, getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import NavBar from "@/components/layout/NavBar";
import Hero from "@/app/(main)/Hero";
import SideBar from "@/components/layout/Sidebar";
import styles from "./layout.module.css";
import HeroContextProvider from "@/app/(main)/heroObserverContext";

export default async function MainLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const session = await getServerSession(options);

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
