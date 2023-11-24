import styled from "styled-components";
import { IRowFixedProps } from "./types";
import Row from "../Row";

const RowFixed = styled(Row)<IRowFixedProps>`
  width: fit-content;
  margin: ${({ gap }) => gap && `-${gap}`};
`;

export default RowFixed;