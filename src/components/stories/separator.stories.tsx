import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import { Separator } from "../ui/separator";

export default {
  title: "Components/Separator",
  component: Separator,
} as Meta;

const Template: StoryFn = () => (
  <div className="space-y-4">
    <p>Some content above the separator</p>
    <Separator />
    <p>Some content below the separator</p>

    <p>Some content above the vertical separator</p>
    <div className="flex">
      <Separator orientation="vertical" className="h-24" />
    </div>
    <p>Some content beside the vertical separator</p>
  </div>
);

export const Default = Template.bind({});
