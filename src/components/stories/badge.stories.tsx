import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import { Badge, BadgeProps } from "../ui/badge";

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline"],
      description: "The variant style of the badge.",
    },
    children: {
      control: "text",
      description: "Content inside the badge.",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for customization.",
    },
  },
} as Meta<BadgeProps>;

const Template: StoryFn<BadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "default",
  children: "Default Badge",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Secondary Badge",
};

export const Destructive = Template.bind({});
Destructive.args = {
  variant: "destructive",
  children: "Destructive Badge",
};

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
  children: "Outline Badge",
};
