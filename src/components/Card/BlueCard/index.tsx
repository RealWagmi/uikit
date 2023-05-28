import styled from 'styled-components'
import Card from "../Card";

const BlueCard = styled(Card)`
  background-color: ${({ theme }) => theme.blueCard.background};
  color: ${({ theme }) => theme.blueCard.color};
  border-radius: 12px;
`

export default BlueCard
