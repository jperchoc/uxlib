import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import { Calendar, CalendarProps } from "../ui/calendar";

export default {
  title: "Components/Calendar",
  component: Calendar,
  argTypes: {
    showOutsideDays: {
      control: "boolean",
      description: "Show days from the previous and next month.",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for the calendar container.",
    },
  },
} as Meta<CalendarProps>;

const Template: StoryFn<CalendarProps> = (args) => <Calendar {...args} />;

export const Default = Template.bind({});
Default.args = {
  showOutsideDays: true,
};

export const HideOutsideDays = Template.bind({});
HideOutsideDays.args = {
  showOutsideDays: false,
};
