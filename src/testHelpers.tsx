import { ReactNode } from "react";
import { render, RenderResult } from "@testing-library/react";
import { dark } from "./theme";
import { UIKitProvider } from "./Providers";

/* eslint-disable import/prefer-default-export */
export const renderWithProvider = (component: ReactNode, theme = dark): RenderResult => {
  return render(<UIKitProvider theme={theme}>{component}</UIKitProvider>);
};
