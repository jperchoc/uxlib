import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import { Sidebar, SidebarTrigger, SidebarContent, SidebarProvider, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "../ui/sidebar";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

export default {
    title: "Components/Sidebar",
    component: Sidebar,
} as Meta;

const Template: StoryFn = () => (
    <div>
        <SidebarProvider>
            <Sidebar>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Application</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {[
                                    {
                                        title: "Home",
                                        url: "#",
                                        icon: Home,
                                    },
                                    {
                                        title: "Inbox",
                                        url: "#",
                                        icon: Inbox,
                                    },
                                    {
                                        title: "Calendar",
                                        url: "#",
                                        icon: Calendar,
                                    },
                                    {
                                        title: "Search",
                                        url: "#",
                                        icon: Search,
                                    },
                                    {
                                        title: "Settings",
                                        url: "#",
                                        icon: Settings,
                                    },
                                ].map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <a href={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
            <main>
                <SidebarTrigger />
                <span>hello world</span>
            </main>
        </SidebarProvider>
    </div>
);

export const Default = Template.bind({});
Default.args = {
    children: "Default Sidebar"
};
