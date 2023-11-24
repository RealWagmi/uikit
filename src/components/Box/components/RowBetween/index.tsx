import styled from "styled-components";
import Row from "../Row";
import { IRowBetweenProps } from "./types";

const RowBetween = styled(Row)<IRowBetweenProps>`
    justify-content: space-between;
`;

export default RowBetween;