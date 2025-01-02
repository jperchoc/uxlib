import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import { Switch } from "../ui/switch";

export default {
  title: "Components/Switch",
  component: Switch,
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn = (args) => {
  return (
    <div className="space-y-4">
      <Switch {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  checked: false,
  disabled: false,
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: false,
  disabled: true,
};
