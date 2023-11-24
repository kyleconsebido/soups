import { getServerSession } from "next-auth";
import NavBar from "@/components/NavBar";

export default async function MainLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <>
      <NavBar user={session?.user} />
      {props.children}
      {props?.modal}
    </>
  );
}
