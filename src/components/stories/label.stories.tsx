import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import { Label } from "../ui/label";

export default {
  title: "Components/Label",
  component: Label,
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes for the label.",
    },
    htmlFor: {
      control: "text",
      description: "Specifies the ID of the input element the label is bound to.",
    },
    children: {
      control: "text",
      description: "The content of the label.",
    },
  },
} as Meta;

const Template: StoryFn = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  htmlFor: "input-id",
  children: "Default Label",
};
