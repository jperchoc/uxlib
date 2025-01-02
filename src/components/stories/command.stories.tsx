import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from "../ui/command";

export default {
  title: "Components/Command",
  component: CommandDialog,
} as Meta;

const Template: StoryFn = (args) => (
  <CommandDialog {...args}>
    <CommandInput placeholder="Search..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Actions">
        <CommandItem>
          Action 1 <CommandShortcut>⌘A</CommandShortcut>
        </CommandItem>
        <CommandItem>
          Action 2 <CommandShortcut>⌘B</CommandShortcut>
        </CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Navigation">
        <CommandItem>
          Page 1 <CommandShortcut>⌘1</CommandShortcut>
        </CommandItem>
        <CommandItem>
          Page 2 <CommandShortcut>⌘2</CommandShortcut>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </CommandDialog>
);

export const Default = Template.bind({});
Default.args = {
  open: true,
};
