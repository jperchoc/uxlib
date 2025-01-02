import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    className: {
      control: "text",
      description: "Custom class names for styling.",
    },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Avatar {...args}>
    <AvatarImage src={args.src} alt="Avatar Image" />
    <AvatarFallback>{args.fallback}</AvatarFallback>
  </Avatar>
);

export const Default = Template.bind({});
Default.args = {
  src: "https://github.com/ovh.png",
  fallback: "AB",
  className: "",
};

export const WithFallback = Template.bind({});
WithFallback.args = {
  src: "https://invalid.url/doesnotexist.png",
  fallback: "AB",
  className: "",
};
