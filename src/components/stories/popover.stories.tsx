import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";

export default {
  title: "Components/Popover",
  component: Popover,
} as Meta;

const Template: StoryFn = () => (
  <Popover>
    <PopoverTrigger className="px-4 py-2 bg-primary text-white rounded">
      Open Popover
    </PopoverTrigger>
    <PopoverContent>
      <div className="text-sm">
        This is the content of the popover. You can include any components or text here.
      </div>
    </PopoverContent>
  </Popover>
);

export const Default = Template.bind({});
