import { DefaultTheme } from "styled-components";
import { darkColors } from "./colors";
import { dark as DarkLoadingSpinner } from "../components/LoadingSpinner/theme";
import { dark as BlueCard } from "../components/Card/BlueCard/theme";
import { dark as DarkGrayCard } from "../components/Card/DarkGrayCard/theme";

const darkTheme: DefaultTheme = {
  colors: darkColors,

  spinner: DarkLoadingSpinner,
  blueCard: BlueCard,
  darkGrayCard: DarkGrayCard,
};

export default darkTheme;
