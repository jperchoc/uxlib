import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectValue,
} from "../ui/select";

export default {
  title: "Components/Select",
  component: Select,
} as Meta;

const Template: StoryFn = () => (
  <Select>
    <SelectTrigger>
        <SelectValue placeholder="Select an option" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="grape">Grape</SelectItem>
        <SelectItem value="mango">Mango</SelectItem>
      </SelectGroup>
      <SelectGroup>
        <SelectLabel>Vegetables</SelectLabel>
        <SelectItem value="carrot">Carrot</SelectItem>
        <SelectItem value="broccoli">Broccoli</SelectItem>
        <SelectItem value="spinach">Spinach</SelectItem>
        <SelectItem value="pepper">Pepper</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
);

export const Default = Template.bind({});
