import type { DecoratorFn, Preview } from "@storybook/react";
import ResetCSS from "../src/ResetCSS";

import { ThemeProvider } from "styled-components";
import { dark, light } from "../src/theme";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

const CustomProvider = (props) => {
  window.document.body.style.background = props.theme.background;
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
