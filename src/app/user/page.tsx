import { getSession } from "@auth0/nextjs-auth0";
import Link from "next/link";

export default async function UserPage() {
  const session = await getSession();
  const user = session?.user;
  // @Anna to check why I have to user absolute url here
  // const userResponse = await fetch('http://localhost:3000/api/user');

  return (
    user ? (
      <div>
        {/* <Image src={user.picture} alt={user.name} /> */}
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
  ): <Link href="/api/auth/login">Login</Link>
  );
};