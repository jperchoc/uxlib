import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import { ChartContainer, ChartTooltip, ChartLegend } from "../ui/chart";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

export default {
  title: "Components/Chart",
  component: ChartContainer,
} as Meta;

const Template: StoryFn = (args) => (
  <ChartContainer config={{}} {...args}>
    <LineChart data={args.data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Line type="monotone" dataKey="value" />
      <ChartTooltip />
      <ChartLegend />
    </LineChart>
  </ChartContainer>
);

export const Default = Template.bind({});
Default.args = {
  data: [
    { name: "Page A", value: 400 },
    { name: "Page B", value: 300 },
    { name: "Page C", value: 200 },
    { name: "Page D", value: 100 },
  ],
  config: {
    value: { label: "Value" },
  },
};
