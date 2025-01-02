import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "../ui/collapsible";

export default {
  title: "Components/Collapsible",
  component: Collapsible,
  argTypes: {
    defaultOpen: {
      control: "boolean",
      description: "Whether the collapsible is open by default.",
    },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Collapsible {...args}>
    <CollapsibleTrigger className="px-4 py-2 bg-primary text-white rounded">
      Toggle Content
    </CollapsibleTrigger>
    <CollapsibleContent className="mt-4 p-4 border rounded shadow">
      This is the collapsible content.
    </CollapsibleContent>
  </Collapsible>
);

export const Default = Template.bind({});
Default.args = {
  defaultOpen: false,
};

export const OpenByDefault = Template.bind({});
OpenByDefault.args = {
  defaultOpen: true,
};
