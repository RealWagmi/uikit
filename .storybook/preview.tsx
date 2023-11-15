import type { DecoratorFn, Preview } from "@storybook/react";

import { dark, light } from "../src/theme";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { UIKitProvider } from "../src";

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
      Provider: UIKitProvider,
    }) as DecoratorFn,
  ],
};

export default preview;
