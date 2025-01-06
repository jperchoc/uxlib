import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input"; // Example Input component
import { Button } from 'react-day-picker';

export default {
  title: "Components/Form",
  component: Form,
} as Meta;

const Template: StoryFn = () => {
  const form = useForm({
    defaultValues: {
      username: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => console.log(data))}
        className="space-y-4"
      >
        <FormField
          name="username"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter your username" {...field} />
              </FormControl>
              <FormDescription>
                Please enter your username.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="px-4 py-2 bg-primary text-white rounded"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export const Default = Template.bind({});
