import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "../ui/card";
import { Button } from "../ui/button";

export default {
  title: "Components/Card",
  component: Card,
} as Meta;

const Template: StoryFn = (args) => (
  <Card {...args}>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card description goes here.</CardDescription>
    </CardHeader>
    <CardContent>
      <p>This is the card content. Add any information you want here.</p>
    </CardContent>
    <CardFooter>
      <Button>Action</Button>
    </CardFooter>
  </Card>
);

export const Default = Template.bind({});
Default.args = {};
