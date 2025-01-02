import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import { Slider } from "../ui/slider";

export default {
  title: "Components/Slider",
  component: Slider,
  argTypes: {
    defaultValue: [{ control: 'number' }],
    max: { control: 'number' },
    min: { control: 'number' },
    step: { control: 'number' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultValue: [50],
  min: 0,
  max: 100,
  step: 1,
};

export const Disabled = Template.bind({});
Disabled.args = {
  defaultValue: [30],
  min: 0,
  max: 100,
  step: 1,
  disabled: true,
};
