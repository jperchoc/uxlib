import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import { Toaster } from "../ui/sonner";
import { Button } from "../ui/button";
import { toast } from "sonner"
export default {

  title: "Components/Sonner",
  component: Toaster,
  argTypes: {
    position: {
      control: "select",
      options: ["top-left", "top-right", "bottom-left", "bottom-right"],
    },
    reverseOrder: {
      control: "boolean",
    },
  },
} as Meta;

const Template: StoryFn = (args) => {

  return (
    <div>
      <Button
      mode="outline"
      onClick={() =>
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Show Toast
      </Button>
      <Toaster {...args}/> 
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  position: "top-right",
  reverseOrder: false,
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  position: "bottom-left",
  reverseOrder: false,
};
