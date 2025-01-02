import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";

export default {
  title: "Components/Accordion",
  component: Accordion,
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multiple"],
    },
    collapsible: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Accordion type='multiple' {...args}>
    <AccordionItem value="item-1">
      <AccordionTrigger>Accordion Item 1</AccordionTrigger>
      <AccordionContent>
        Content for the first accordion item. Add any text or components here.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Accordion Item 2</AccordionTrigger>
      <AccordionContent>
        Content for the second accordion item. You can also include other
        components.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Accordion Item 3</AccordionTrigger>
      <AccordionContent>
        Content for the third accordion item. Customize as needed.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const Single = Template.bind({});
Single.args = {
  type: "single",
  collapsible: true,
};

export const Multiple = Template.bind({});
Multiple.args = {
  type: "multiple",
  collapsible: false,
};
