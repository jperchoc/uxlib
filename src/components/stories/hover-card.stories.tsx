import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "../ui/hover-card";

export default {
  title: "Components/HoverCard",
  component: HoverCard,
} as Meta;

const Template: StoryFn = () => (
  <HoverCard>
    <HoverCardTrigger className="px-4 py-2 bg-primary text-white rounded">
      Hover me
    </HoverCardTrigger>
    <HoverCardContent>
      <div className="text-sm">
        This is the content of the hover card. Add any details or components
        here.
      </div>
    </HoverCardContent>
  </HoverCard>
);

export const Default = Template.bind({});
