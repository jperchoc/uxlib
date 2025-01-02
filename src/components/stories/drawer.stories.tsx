import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
} from "../ui/drawer";

export default {
  title: "Components/Drawer",
  component: Drawer,
} as Meta;

const Template: StoryFn = (args) => (
  <Drawer {...args}>
    <DrawerTrigger className="px-4 py-2 bg-primary text-white rounded">
      Open Drawer
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Drawer Title</DrawerTitle>
        <DrawerDescription>
          This is the drawer description.
        </DrawerDescription>
      </DrawerHeader>
      <div className="px-4 py-2">Drawer body content goes here.</div>
      <DrawerFooter>
        <button className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
        <button className="px-4 py-2 bg-primary text-white rounded">
          Confirm
        </button>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

export const Default = Template.bind({});
Default.args = {};
