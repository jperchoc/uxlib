import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription, SheetHeader, SheetFooter } from "../ui/sheet";

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
        <button className="px-4 py-2 text-white bg-blue-500 rounded">Open Sheet</button>
      </SheetTrigger>
      <SheetContent {...args}>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>This is a description inside the sheet.</SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <button className="px-4 py-2 text-white bg-gray-500 rounded">Close</button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  </div>
);

export const Default = Template.bind({});
