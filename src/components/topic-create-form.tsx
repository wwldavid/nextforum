"use client";
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Input,
  Textarea,
  Chip,
} from "@heroui/react";
import React, { startTransition, useActionState } from "react";
import * as actions from "@/actions";

export default function TopicCreateForm() {
  const [state, formAction, isPending] = useActionState(actions.createTopic, {
    errors: {},
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    startTransition(() => formAction(formData));
  }
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary" variant="bordered">
          Create a Topic
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <form onSubmit={handleSubmit} noValidate>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Topic</h3>
            <Input
              name="name"
              label="Name"
              isInvalid={!!state.errors.name}
              errorMessage={state.errors.name?.join(",")}
              labelPlacement="outside"
              placeholder="Name"
            />
            <Textarea
              name="description"
              label="Description"
              isInvalid={!!state.errors.description}
              errorMessage={state.errors.description?.join(",")}
              labelPlacement="outside"
              placeholder="Describe your topic"
            />
            {state.errors._form ? (
              <Chip variant="bordered" radius="sm" className="max-w-full">
                {state.errors._form.join(",")}
              </Chip>
            ) : null}
            <Button isLoading={isPending} type="submit">
              Submit
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
