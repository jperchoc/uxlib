import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonProps } from "../ui/button"; // Adjust the path as needed
// import { TrashIcon } from "lucide-react";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "critical", "neutral"],
    },
    mode: {
      control: "select",
      options: ["default", "outline", "ghost"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md"],
    },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
} as Meta<ButtonProps>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "primary",
  mode: "default",
  size: "md",
  children: "Default Button",
};