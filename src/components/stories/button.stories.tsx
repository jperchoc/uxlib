import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonProps } from "../ui/button"; // Adjust the path as needed
import { TrashIcon } from "lucide-react";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
} as Meta<ButtonProps>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "default",
  size: "default",
  children: "Default Button",
};

export const Destructive = Template.bind({});
Destructive.args = {
  variant: "destructive",
  size: "default",
  children: "Destructive Button",
};

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
  size: "default",
  children: "Outline Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  size: "default",
  children: "Secondary Button",
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: "ghost",
  size: "default",
  children: "Ghost Button",
};

export const Link = Template.bind({});
Link.args = {
  variant: "link",
  size: "default",
  children: "Link Button",
};

export const Small = Template.bind({});
Small.args = {
  variant: "default",
  size: "sm",
  children: "Small Button",
};

export const Large = Template.bind({});
Large.args = {
  variant: "default",
  size: "lg",
  children: "Large Button",
};

export const Icon = Template.bind({});
Icon.args = {
  variant: "default",
  size: "icon",
  children: <span role="img" aria-label="Icon"><TrashIcon /></span>,
};
