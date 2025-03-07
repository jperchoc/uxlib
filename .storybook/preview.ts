import '../src/index.css'
import type { Preview } from "@storybook/react";
import { ModeDecorator } from "./modeDecorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};
export const decorators = [ModeDecorator];

export default preview;
