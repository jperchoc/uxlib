import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import { Textarea } from "../ui/textarea";

export default {
  title: "Components/Textarea",
  component: Textarea,
  argTypes: {
    className: { control: "text" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter text here...",
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "This textarea is disabled",
  disabled: true,
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  placeholder: "Styled textarea",
  className: "border-accent bg-accent-foreground text-white",
};
