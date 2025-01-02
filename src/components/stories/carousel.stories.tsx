import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";

export default {
  title: "Components/Carousel",
  component: Carousel,
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Orientation of the carousel.",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for the carousel container.",
    },
  },
} as Meta;

const HorizontalTemplate: StoryFn = (args) => (
  <Carousel {...args} className="ml-10 w-full max-w-sm">
    <CarouselContent>
      {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-3xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);

const VerticalTemplate: StoryFn = (args) => (
  <Carousel {...args} orientation="vertical" className="mt-10 w-full max-w-xs">
    <CarouselContent className="-mt-1 h-[200px]">
      {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem key={index} className="pt-1 md:basis-1/2">
          <div className="p-1">
            <Card>
              <CardContent className="flex items-center justify-center p-6">
                <span className="text-3xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);

export const Horizontal = HorizontalTemplate.bind({});
Horizontal.args = {
  opts: { align: "start" },
};

export const Vertical = VerticalTemplate.bind({});
Vertical.args = {
  opts: { align: "start" },
};
