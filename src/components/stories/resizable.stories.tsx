import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "../ui/resizable";

export default {
  title: "Components/ResizablePanels",
  component: ResizablePanelGroup,
} as Meta;

const Template: StoryFn = () => (
  <div className="h-64 w-full border">
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel>
        <div className="h-full bg-gray-100 p-4">
          Panel 1
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <div className="h-full bg-gray-200 p-4">
          Panel 2
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  </div>
);

export const Default = Template.bind({});
