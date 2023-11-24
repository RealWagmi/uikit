import styled from "styled-components";
import { IAutoRowProps } from "./types";
import Row from "../Row";

const AutoRow = styled(Row)<IAutoRowProps>`
  flex-wrap: wrap;
  margin: ${({ gap }) => gap && `-${gap}`};
  justify-content: ${({ justify }) => justify && justify};
  & > * {
    margin: ${({ gap }) => gap} !important;
  }
`;

export default AutoRow;