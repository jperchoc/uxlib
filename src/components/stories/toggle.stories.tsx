import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import { Toggle } from "../ui/toggle";

export default {
  title: "Components/Toggle",
  component: Toggle,
  argTypes: {
    variant: {
      control: { type: "select", options: ["default", "outline"] },
    },
    size: {
      control: { type: "select", options: ["default", "sm", "lg"] },
    },
  },
} as Meta;

const Template: StoryFn = (args) => <Toggle {...args}>Toggle</Toggle>;

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
