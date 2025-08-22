import PostCreateForm from "@/components/posts/post-create-form";
import React from "react";

interface TopicShowPageProps {
  params: Promise<{ name: string }>;
}

export default async function TopicShowPage({ params }: TopicShowPageProps) {
  const name = (await params).name;
  const displayName = decodeURIComponent(name);

  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-xl mt-2">{displayName}</h1>
      </div>
      <div>
        <PostCreateForm name={name} />
      </div>
    </div>
  );
}
