import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "../ui/tooltip";
import { Button } from "../ui/button";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {
    side: {
      control: { type: "select", options: ["top", "right", "bottom", "left"] },
    },
    sideOffset: {
      control: { type: "number", min: 0, max: 20, step: 1 },
    },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <TooltipProvider>
    <Tooltip {...args}>
      <TooltipTrigger asChild>
        <Button>Hover over me</Button>
      </TooltipTrigger>
      <TooltipContent>Tooltip content</TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export const Default = Template.bind({});
Default.args = {
  side: "top",
  sideOffset: 4,
};

export const Right = Template.bind({});
Right.args = {
  side: "right",
  sideOffset: 10,
};

export const Bottom = Template.bind({});
Bottom.args = {
  side: "bottom",
  sideOffset: 6,
};

export const Left = Template.bind({});
Left.args = {
  side: "left",
  sideOffset: 8,
};
