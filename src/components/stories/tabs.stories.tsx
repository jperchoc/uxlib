import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";

export default {
  title: "Components/Tabs",
  component: Tabs,
  argTypes: {
    className: { control: "text" },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Tabs {...args}>
    <TabsList>
      <TabsTrigger value="tab1">Tab 1</TabsTrigger>
      <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      <TabsTrigger value="tab3">Tab 3</TabsTrigger>
    </TabsList>
    <TabsContent value="tab1">
      <p>Content for Tab 1</p>
    </TabsContent>
    <TabsContent value="tab2">
      <p>Content for Tab 2</p>
    </TabsContent>
    <TabsContent value="tab3">
      <p>Content for Tab 3</p>
    </TabsContent>
  </Tabs>
);

export const Default = Template.bind({});
Default.args = {
  className: "custom-tabs",
};
