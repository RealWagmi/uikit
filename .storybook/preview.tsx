import type { DecoratorFn, Preview } from "@storybook/react";

import { dark, light } from "../src/theme";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { ThemeProvider } from "styled-components";
import ResetCSS from "../src/ResetCSS";

const CustomProvider = (props) => {
  return (
    <ThemeProvider theme={props.theme}>
      <ResetCSS />
      {props.children}
    </ThemeProvider>
  );
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: dark.background,
        },
        {
          name: "light",
          value: light.background,
        },
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
      Provider: CustomProvider,
    }) as DecoratorFn,
  ],
};

export default preview;
