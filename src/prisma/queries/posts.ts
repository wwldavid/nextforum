import type { Post } from "@prisma/client";
import { prisma } from "..";

export type PostWithData = {
  user: {
    name: string | null;
    image?: string | null;
  } | null;
  topic: {
    name: string;
  } | null;
  _count: {
    comments: number;
  };
} & Post;

export function fetchPostsByTopicName(name: string): Promise<PostWithData[]> {
  return prisma.post.findMany({
    where: {
      topic: {
        name,
      },
    },
    include: {
      user: {
        select: {
          name: true,
        },
      },
      topic: {
        select: {
          name: true,
        },
      },
      _count: {
        select: {
          comments: true,
        },
      },
    },
  });
}

export function fetchTopPosts(): Promise<PostWithData[]> {
  return prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
      topic: {
        select: {
          name: true,
        },
      },
      _count: {
        select: {
          comments: true,
        },
      },
    },
  });
}
