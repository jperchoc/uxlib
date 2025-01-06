import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription, SheetHeader, SheetFooter, SheetClose } from "../ui/sheet";
import { Button } from '../ui/button';

export default {
  title: "Components/Sheet",
  component: Sheet,
  argTypes: {
    side: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
    },
    collapsible: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <div className="space-y-4">
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open Sheet</Button>
      </SheetTrigger>
      <SheetContent {...args}>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>This is a description inside the sheet.</SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
          <Button>Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  </div>
);

export const Default = Template.bind({});
