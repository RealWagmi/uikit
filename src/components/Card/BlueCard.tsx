import styled from 'styled-components'
import Card from "./Card";
import { rgba } from "polished";

const BlueCard = styled(Card)`
  background-color: ${({ theme }) => rgba(theme.colors.indigo, 0.7)};
  color: ${({ theme }) => theme.colors.textWhite};
  border-radius: 12px;
`

export default BlueCard
