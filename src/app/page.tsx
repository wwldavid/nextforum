import SignInButtonClient from "@/components/client/signin-button";
import SignOutButtonClient from "@/components/client/signout-button";
import UserInfoClient from "@/components/client/user-info";
import SignInButton from "@/components/sign-button";
import SignOutButton from "@/components/signout-button";
import UserInfo from "@/components/user-info";
import React from "react";

export default function Page() {
  return (
    <div>
      <UserInfo />
      <SignInButton />
      <SignOutButton />
      <hr />
      <SignInButtonClient />
      <SignOutButtonClient />
      <UserInfoClient />
    </div>
  );
}
