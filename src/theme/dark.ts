import { DefaultTheme } from "styled-components";
import { darkColors } from "./colors";
import { dark as DarkLoadingSpinner } from "../components/LoadingSpinner/theme";
import { dark as BlueCard } from "../components/Card/BlueCard/theme";
import { dark as DarkGrayCard } from "../components/Card/DarkGrayCard/theme";
import { dark as GrayCard } from "../components/Card/GrayCard/theme";
import { dark as LightCard } from "../components/Card/LightCard/theme";
import { dark as OutlineCard } from "../components/Card/OutlineCard/theme";
import { dark as YellowCard } from "../components/Card/YellowCard/theme";
import { dark as Breadcrumbs } from "../components/Breadcrumbs/theme";

const darkTheme: DefaultTheme = {
  colors: darkColors,

  spinner: DarkLoadingSpinner,
  blueCard: BlueCard,
  darkGrayCard: DarkGrayCard,
  grayCard: GrayCard,
  lightCard: LightCard,
  outlineCard: OutlineCard,
  yellowCard: YellowCard,
  breadcrumbs: Breadcrumbs,
};

export default darkTheme;
