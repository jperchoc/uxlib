import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import { Input } from "../ui/input";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    type: {
      control: "text",
      description: "The input type, such as text, email, password, etc.",
      defaultValue: "text",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the input field.",
    },
    disabled: {
      control: "boolean",
      description: "Disables the input field if set to true.",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for the input field.",
    },
  },
} as Meta;

const Template: StoryFn = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "text",
  placeholder: "Enter text",
};

export const Email = Template.bind({});
Email.args = {
  type: "email",
  placeholder: "Enter your email",
};

export const Password = Template.bind({});
Password.args = {
  type: "password",
  placeholder: "Enter your password",
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: "text",
  placeholder: "Disabled input",
  disabled: true,
};
