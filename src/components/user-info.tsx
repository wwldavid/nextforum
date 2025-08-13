import Image from "next/image";
import { auth } from "../auth";

export default async function UserInfo() {
  const session = await auth();

  if (!session?.user) return null;

  const imageSrc = session.user.image ?? "/default-avatar.png";

  return (
    <div>
      <p>{JSON.stringify(session.user)}</p>
      <Image src={imageSrc} width={48} height={48} alt="User Avatar" />
    </div>
  );
}
