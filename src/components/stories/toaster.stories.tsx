import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import { Toaster } from "../ui/toaster";

export default {
  title: "Components/Toaster",
  component: Toaster,
} as Meta;

const Template: StoryFn = () => <Toaster />;

export const Default = Template.bind({});

Default.args = {
};
