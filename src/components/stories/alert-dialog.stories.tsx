import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "../ui/alert-dialog";

export default {
  title: "Components/AlertDialog",
  component: AlertDialog,
  argTypes: {
    defaultOpen: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <AlertDialog {...args}>
    <AlertDialogTrigger className="btn btn-primary">Open Alert</AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your account and remove your data.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Delete</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export const Default = Template.bind({});
Default.args = {
  defaultOpen: false,
};
