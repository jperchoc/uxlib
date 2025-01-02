import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "../ui/pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
} as Meta;

const Template: StoryFn = () => (
  <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious size={'md'} href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink size={'md'} href="#" isActive>
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink size={'md'} href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink size={'md'} href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink size={'md'} href="#">10</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationNext size={'md'} href="#" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
);

export const Default = Template.bind({});
