import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuRadioGroup,
} from "../ui/context-menu";

export default {
  title: "Components/ContextMenu",
  component: ContextMenu,
} as Meta;

const Template: StoryFn = () => (
  <ContextMenu>
    <ContextMenuTrigger>
      <button className="px-4 py-2 bg-gray-200 rounded">Right-click me</button>
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuLabel>Actions</ContextMenuLabel>
      <ContextMenuGroup>
        <ContextMenuItem>Copy <ContextMenuShortcut>Ctrl+C</ContextMenuShortcut></ContextMenuItem>
        <ContextMenuItem>Paste <ContextMenuShortcut>Ctrl+V</ContextMenuShortcut></ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked>Bold</ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Italic</ContextMenuCheckboxItem>
      </ContextMenuGroup>
      <ContextMenuSeparator />
      <ContextMenuLabel>Text Alignment</ContextMenuLabel>
      <ContextMenuRadioGroup>
        <ContextMenuRadioItem value="left">Left</ContextMenuRadioItem>
        <ContextMenuRadioItem value="center">Center</ContextMenuRadioItem>
        <ContextMenuRadioItem value="right">Right</ContextMenuRadioItem>
      </ContextMenuRadioGroup>
    </ContextMenuContent>
  </ContextMenu>
);

export const Default = Template.bind({});
