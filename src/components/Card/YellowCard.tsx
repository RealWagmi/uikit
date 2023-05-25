import styled from 'styled-components'
import Card from "./Card";

const YellowCard = styled(Card)`
  background-color: rgba(243, 132, 30, 0.05);
  color: ${({ theme }) => theme.colors.violinBrown};
  font-weight: 500;
`

export default YellowCard
