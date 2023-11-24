import styled from "styled-components";
import Box from "../Box";
import { IRowProps } from "./types";

const Row = styled(Box)<IRowProps>`
  display: flex;
  width: ${({ width }) => width ?? "100%"};
  align-items: ${({ align }) => align ?? "center"};
  justify-content: ${({ justify }) => justify ?? "flex-start"};
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  gap: ${({ gap }) => gap};
`;

export default Row;