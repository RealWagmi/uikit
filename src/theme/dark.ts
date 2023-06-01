import { DefaultTheme } from "styled-components";
import { colors } from "./colors";
import { dark as DarkLoadingSpinner } from "../components/LoadingSpinner/theme";
import { dark as Breadcrumbs } from "../components/Breadcrumbs/theme";
import { dark as Table } from "../components/Table/theme";
//Cards
import { dark as BlueCard } from "../components/Card/BlueCard/theme";
import { dark as DarkGrayCard } from "../components/Card/DarkGrayCard/theme";
import { dark as GrayCard } from "../components/Card/GrayCard/theme";
import { dark as LightCard } from "../components/Card/LightCard/theme";
import { dark as OutlineCard } from "../components/Card/OutlineCard/theme";
import { dark as YellowCard } from "../components/Card/YellowCard/theme";
//Buttons
import {dark as ButtonConfirmed} from '../components/Button/ButtonConfirmed/theme'
import {dark as ButtonError} from '../components/Button/ButtonError/theme'

const darkTheme: DefaultTheme = {
  colors,

  spinner: DarkLoadingSpinner,
  breadcrumbs: Breadcrumbs,
  table: Table,
  //Cards
  blueCard: BlueCard,
  darkGrayCard: DarkGrayCard,
  grayCard: GrayCard,
  lightCard: LightCard,
  outlineCard: OutlineCard,
  yellowCard: YellowCard,
  //Button
  buttonConfirmed: ButtonConfirmed,
  buttonError: ButtonError
};

export default darkTheme;
