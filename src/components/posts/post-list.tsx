"use client";
import { PostWithData } from "@/prisma/queries/posts";
import { Avatar, Listbox, ListboxItem } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function PostList({ posts }: { posts: PostWithData[] }) {
  const router = useRouter();
  return (
    <Listbox
      aria-label="Post List"
      itemClasses={{
        base: "border-small border-default-200 mt-4",
      }}
    >
      {posts.map((post) => {
        const topicName = post.topic?.name;
        if (!topicName) {
          throw new Error("Need a topic name to link to a post");
        }
        return (
          <ListboxItem
            key={post.id}
            description={<p className="text-sm mt-3">{post.user?.name}</p>}
            startContent={
              post.user?.image && (
                <div>
                  <Avatar src={post.user.image} className="w-8 h-8" />
                </div>
              )
            }
            endContent={
              <span className="text-sm text-gray-400 whitespace-nowrap self-end">
                {" "}
                {post._count.comments} comments
              </span>
            }
            onPress={() => {
              router.push(`/topics/${topicName}/posts/${post.id}`);
            }}
          >
            {post.title}
          </ListboxItem>
        );
      })}
    </Listbox>
  );
}
