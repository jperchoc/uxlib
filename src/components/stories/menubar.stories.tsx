import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
} from "../ui/menubar";

export default {
  title: "Components/Menubar",
  component: Menubar,
} as Meta;

const Template: StoryFn = () => (
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>File</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>New</MenubarItem>
        <MenubarItem>Open</MenubarItem>
        <MenubarSeparator />
        <MenubarCheckboxItem checked>Auto Save</MenubarCheckboxItem>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger>Edit</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>Undo</MenubarItem>
        <MenubarItem>Redo</MenubarItem>
        <MenubarSeparator />
        <MenubarRadioGroup>
          <MenubarRadioItem value="copy">Copy</MenubarRadioItem>
          <MenubarRadioItem value="paste">Paste</MenubarRadioItem>
        </MenubarRadioGroup>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
);

export const Default = Template.bind({});