import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

export default {
  title: "Components/RadioGroup",
  component: RadioGroup,
} as Meta;

const Template: StoryFn = () => (
  <RadioGroup defaultValue="option1">
    <RadioGroupItem value="option1" id="option1" />
    <label htmlFor="option1" className="ml-2">
      Option 1
    </label>
    <RadioGroupItem value="option2" id="option2" />
    <label htmlFor="option2" className="ml-2">
      Option 2
    </label>
    <RadioGroupItem value="option3" id="option3" />
    <label htmlFor="option3" className="ml-2">
      Option 3
    </label>
  </RadioGroup>
);

export const Default = Template.bind({});
