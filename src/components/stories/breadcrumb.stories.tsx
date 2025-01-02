import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "../ui/breadcrumb";

export default {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  argTypes: {
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Breadcrumb {...args}>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Library</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbEllipsis />
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Data</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
);

export const Default = Template.bind({});
Default.args = {
};