import type { Preview } from "@storybook/react";

import { ThemeProvider } from "styled-components";
import { dark } from "../src/theme";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={dark}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
