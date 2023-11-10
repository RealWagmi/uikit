import type { DecoratorFn, Preview } from "@storybook/react";

import { ThemeProvider } from "styled-components";
import { dark, light } from "../src/theme";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

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
    withThemeFromJSXProvider({
      themes: {
        light,
        dark,
      },
      defaultTheme: "dark",
      Provider: ThemeProvider,
    }) as DecoratorFn,
  ],
};

export default preview;
