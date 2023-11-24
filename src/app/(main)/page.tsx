import Hero from "@/components/Hero";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();

  return <main>{!session?.user && <Hero />}</main>;
}
