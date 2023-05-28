import { DefaultTheme } from "styled-components";
import { darkColors } from "./colors";
import { dark as DarkLoadingSpinner } from "../components/LoadingSpinner/theme";

const darkTheme: DefaultTheme = {
  colors: darkColors,

  spinner: DarkLoadingSpinner,
};

export default darkTheme;
