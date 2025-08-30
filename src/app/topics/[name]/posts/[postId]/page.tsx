import CommentCreateForm from "@/components/comments/comment-create-post";
import PostShow from "@/components/posts/post-show";
import PostShowLoading from "@/components/posts/post-show-loading";

import React, { Suspense } from "react";

interface PostShowPageProps {
  params: Promise<{ name: string; postId: string }>;
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { postId } = await params;

  return (
    <div className="space-y-3">
      <Suspense fallback={<PostShowLoading />}>
        <PostShow postId={postId} />
      </Suspense>
      <CommentCreateForm />
    </div>
  );
}
