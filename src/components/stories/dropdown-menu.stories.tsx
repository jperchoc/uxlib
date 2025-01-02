import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
} from "../ui/dropdown-menu";

export default {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
} as Meta;

const Template: StoryFn = () => (
  <DropdownMenu>
    <DropdownMenuTrigger className="px-4 py-2 bg-primary text-white rounded">
      Open Menu
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>Actions</DropdownMenuLabel>
      <DropdownMenuGroup>
        <DropdownMenuItem>New</DropdownMenuItem>
        <DropdownMenuItem>Open</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked>Option 1</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Option 2</DropdownMenuCheckboxItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuLabel>View</DropdownMenuLabel>
      <DropdownMenuRadioGroup>
        <DropdownMenuRadioItem value="grid">Grid View</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="list">List View</DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
);

export const Default = Template.bind({});
