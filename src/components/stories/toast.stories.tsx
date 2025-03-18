import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription, ToastClose, ToastAction } from "../ui/toast";

export default {
  title: "Components/Toast",
  component: Toast,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["neutral", "destructive"],
      },
    },
    children: { control: "text" },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <ToastProvider>
    <ToastViewport>
      <Toast {...args}>
        <ToastTitle>{args.title || "Toast Title"}</ToastTitle>
        <ToastDescription>{args.description || "Toast description goes here."}</ToastDescription>
        <ToastAction altText="action">Take Action</ToastAction>
        <ToastClose />
      </Toast>
    </ToastViewport>
  </ToastProvider>
);

export const Default = Template.bind({});
Default.args = {
  variant: "neutral",
  title: "Default Toast",
  description: "This is a default toast notification.",
};

export const Destructive = Template.bind({});
Destructive.args = {
  variant: "destructive",
  title: "Error Toast",
  description: "This is a destructive toast notification.",
};

export const WithAction = Template.bind({});
WithAction.args = {
  variant: "neutral",
  title: "Actionable Toast",
  description: "This toast has an action button.",
};
