import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";

export default {
    title: "Components/ScrollArea",
    component: ScrollArea,
} as Meta;

const Template: StoryFn = () => (
    <ScrollArea className="h-72 w-48 rounded-md border">
        <div className="p-4">
            <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
            {Array.from({ length: 50 }).map(
                (_, i, a) => `v1.2.0-beta.${a.length - i}`
            ).map((tag) => (
                <>
                    <div key={tag} className="text-sm">
                        {tag}
                    </div>
                    <Separator className="my-2" />
                </>
            ))}
        </div>
    </ScrollArea>
);

export const Default = Template.bind({});
