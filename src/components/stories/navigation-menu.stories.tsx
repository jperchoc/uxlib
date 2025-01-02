import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "../ui/navigation-menu";

export default {
  title: "Components/NavigationMenu",
  component: NavigationMenu,
} as Meta;

const Template: StoryFn = () => (
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Menu 1</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="p-4">
            <li>
              <NavigationMenuLink className="block py-2">
                Link 1
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink className="block py-2">
                Link 2
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Menu 2</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="p-4">
            <li>
              <NavigationMenuLink className="block py-2">
                Link A
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink className="block py-2">
                Link B
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);

export const Default = Template.bind({});
