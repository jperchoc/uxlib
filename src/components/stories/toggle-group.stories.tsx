import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";

export default {
  title: "Components/ToggleGroup",
  component: ToggleGroup,
  argTypes: {
    variant: {
      control: { type: "select", options: ["default", "outline", "destructive"] },
    },
    size: {
      control: { type: "select", options: ["default", "sm", "lg"] },
    },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <ToggleGroup type="single" {...args}>
    <ToggleGroupItem value="1">Option 1</ToggleGroupItem>
    <ToggleGroupItem value="2">Option 2</ToggleGroupItem>
    <ToggleGroupItem value="3">Option 3</ToggleGroupItem>
  </ToggleGroup>
);

export const Default = Template.bind({});
Default.args = {
  variant: "default",
  size: "default",
};

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
  size: "default",
};

export const Small = Template.bind({});
Small.args = {
  variant: "default",
  size: "sm",
};

export const Large = Template.bind({});
Large.args = {
  variant: "default",
  size: "lg",
};
