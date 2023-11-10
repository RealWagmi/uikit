import type { DecoratorFn, Preview } from "@storybook/react";

import { ThemeProvider } from "styled-components";
import { dark, light } from "../src/theme";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#0E1218",
        },
      ],
    },
    themes: {
      default: "dark",
      list: [
        { name: "dark", color: "#00aced" },
        { name: "light", color: "#3b5998" },
      ],
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        dark,
        light,
      },
      defaultTheme: "dark",
      Provider: ThemeProvider,
    }) as DecoratorFn,
  ],
};

export default preview;
