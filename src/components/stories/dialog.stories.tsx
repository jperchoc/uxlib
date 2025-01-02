import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";

export default {
  title: "Components/Dialog",
  component: Dialog,
} as Meta;

const Template: StoryFn = (args) => (
  <Dialog {...args}>
    <DialogTrigger className="px-4 py-2 bg-primary text-white rounded">
      Open Dialog
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogDescription>This is the dialog description.</DialogDescription>
      </DialogHeader>
      <div className="mt-4">Dialog body content goes here.</div>
      <DialogFooter>
        <button className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
        <button className="px-4 py-2 bg-primary text-white rounded">Confirm</button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export const Default = Template.bind({});
Default.args = {};
