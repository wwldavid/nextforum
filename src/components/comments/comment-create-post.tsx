import React from "react";
import { Button, Textarea } from "@heroui/react";

export default function CommentCreateForm() {
  return (
    <form className="space-y-3">
      <Textarea
        name="content"
        label="Reply"
        labelPlacement="inside"
        placeholder="Enter your comment"
      />
      <Button color="secondary">Create Comment</Button>
    </form>
  );
}
