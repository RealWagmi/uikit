import styled from 'styled-components'
import Card from "./Card";
import { rgba } from "polished";

const YellowCard = styled(Card)`
  background-color: ${({theme}) => rgba(theme.colors.princetonOrange, 0.05)};
  color: ${({ theme }) => theme.colors.violinBrown};
  font-weight: 500;
`

export default YellowCard
