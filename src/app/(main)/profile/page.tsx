import { notFound, redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export default async function ProfileRedirectPage() {
  const session = await getServerSession(options);

  if (session) {
    redirect(`/profile/${session.user.id}`);
  }

  notFound();
}
