import { fetchTopics } from "@/prisma/queries/topics";
import { Badge, Chip } from "@heroui/react";
import Link from "next/link";
import React from "react";

export const ListBoxWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-64 p-2 rounded-sm border-2 border-slate-400 mt-4 flex gap-3 flex-wrap">
      {children}
    </div>
  );
};

export default async function TopicList() {
  const topics = await fetchTopics();
  return (
    <ListBoxWrapper>
      {topics.map((topic) => {
        return (
          <Badge color="primary" content={topic._count.posts} key={topic.id}>
            <Chip variant="shadow" color="default">
              <Link href={`/topics/${topic.name}`}>{topic.name}</Link>
            </Chip>
          </Badge>
        );
      })}
    </ListBoxWrapper>
  );
}
