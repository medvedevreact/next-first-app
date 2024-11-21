import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Profile() {
  const session = await getServerSession(authConfig);
  if (!session) {
    redirect("/api/auth/signin");
  }
  return (
    <div>
      <h1>Profile of {session?.user?.email}</h1>
    </div>
  );
}
