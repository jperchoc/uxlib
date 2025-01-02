import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import { Progress } from "../ui/progress";

export default {
  title: "Components/Progress",
  component: Progress,
  argTypes: {
    value: {
      control: { type: "number", min: 0, max: 100 },
      description: "The progress value, between 0 and 100.",
    },
  },
} as Meta;

const Template: StoryFn = (args) => <Progress {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 50,
};

export const FullProgress = Template.bind({});
FullProgress.args = {
  value: 100,
};

export const NoProgress = Template.bind({});
NoProgress.args = {
  value: 0,
};
