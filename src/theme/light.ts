import { DefaultTheme } from "styled-components";
import { buttons, colors } from "./colors";

//Buttons

const lightTheme: DefaultTheme = {
  colors: colors,
  background: "#ffffff",
  buttons,
  primaryGradient: `linear-gradient(90deg, #7da0c1 3.46%, #34627d 100%)`,
};

export default lightTheme;
