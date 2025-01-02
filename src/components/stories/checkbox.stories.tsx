import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import { Checkbox } from "../ui/checkbox";

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
  <div className="flex flex-col gap-4">
    <Checkbox {...args} />
    <label htmlFor="checkbox" className="text-sm">
      I agree to the terms and conditions.
    </label>
  </div>
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
