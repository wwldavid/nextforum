import React from "react";

interface TopicShowPageProps {
  params: Promise<{ name: string }>;
}

export default async function TopicShowPage({ params }: TopicShowPageProps) {
  const name = (await params).name;
  const displayName = decodeURIComponent(name);

  return <div>Listing page for {displayName}</div>;
}
