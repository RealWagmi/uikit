import { DefaultTheme } from "styled-components";
import { buttons, colors } from "./colors";

const darkTheme: DefaultTheme = {
  colors,
  background: "#0e1218",
  buttons,
  primaryGradient: `linear-gradient(90deg, #7da0c1 3.46%, #34627d 100%)`,
  primaryDarkGradient: `linear-gradient(90deg, #32404e 3.46%, #1a2c38 100%)`,
};

export default darkTheme;
