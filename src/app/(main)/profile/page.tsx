import { notFound, redirect } from "next/navigation";
import { getSession } from "@/utils/auth/getSession";

export default async function ProfileRedirectPage() {
  const session = await getSession();

  if (session) {
    redirect(`/profile/${session.user.id}`);
  }

  notFound();
}
