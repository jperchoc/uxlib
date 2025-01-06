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
  DialogClose,
} from "../ui/dialog";
import { Button } from '../ui/button';

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
        <DialogClose asChild>
          <Button variant="neutral" mode="ghost">Cancel</Button>
        </DialogClose>
        <DialogClose asChild>
          <Button variant="primary">Confirm</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export const Default = Template.bind({});
Default.args = {};
