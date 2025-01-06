import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes for styling the checkbox.",
    },
    disabled: {
      control: "boolean",
      description: "Disables the checkbox.",
    },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <div className="flex items-center space-x-2">
    <Checkbox id="checkbox" {...args} />
    <Label htmlFor="checkbox">
      I agree to the terms and conditions.
    </Label>
  </div>
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
