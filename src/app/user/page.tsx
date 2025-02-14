import { getSession } from "@auth0/nextjs-auth0";
import Link from "next/link";

export default async function UserPage() {
  const session = await getSession();
  const user = session?.user;


  return (
    user ? (
      <div>
        <h2>user.name}</h2>
        <p>{user.email}</p>
      </div>
  ): <Link href="/api/auth/login">Login</Link>
  );
};