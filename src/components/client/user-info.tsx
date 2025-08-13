"use client";
import { useSession } from "next-auth/react";

import Image from "next/image";

export default function UserInfoClient() {
  const { data: session } = useSession();

  if (!session?.user) return null;

  const imageSrc = session.user.image ?? "/default-avatar.png";

  return (
    <div>
      <p>{JSON.stringify(session.user)}</p>
      <Image src={imageSrc} width={48} height={48} alt="User Avatar" />
    </div>
  );
}
