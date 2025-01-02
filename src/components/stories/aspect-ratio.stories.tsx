import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import { AspectRatio } from "../ui/aspect-ratio";

export default {
  title: "Components/AspectRatio",
  component: AspectRatio,
  argTypes: {
    ratio: {
      control: { type: "number", min: 0.5, max: 4, step: 0.1 },
      description: "The aspect ratio of the container (width / height).",
    },
  },
} as Meta;

const Template: StoryFn = (args) => (
    <div className="w-[450px]">
        <AspectRatio {...args}>
            <div
            style={{
                backgroundColor: "#ccc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                width: "100%",
            }}
            >
            Aspect Ratio: {args.ratio}
            </div>
        </AspectRatio>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  ratio: 16 / 9,
};

export const Square = Template.bind({});
Square.args = {
  ratio: 1,
};

export const Portrait = Template.bind({});
Portrait.args = {
  ratio: 3 / 4,
};

export const Wide = Template.bind({});
Wide.args = {
  ratio: 21 / 9,
};
