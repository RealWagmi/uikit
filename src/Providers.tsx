import { ThemeProvider, DefaultTheme } from "styled-components";
import ResetCSS from "./ResetCSS";
import React from "react";

export const UIKitProvider: React.FC<React.PropsWithChildren<{ theme: DefaultTheme; children: React.ReactNode }>> = ({
  theme,
  children,
}) => {
  window.document.body.style.background = theme.background;
  return (
    <ThemeProvider theme={theme}>
      <ResetCSS />
      {children}
    </ThemeProvider>
  );
};
