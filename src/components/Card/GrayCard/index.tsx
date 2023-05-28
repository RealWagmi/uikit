import styled from 'styled-components'
import Card from "../Card";

const GrayCard = styled(Card)`
  background-color: ${({ theme }) => theme.grayCard.background};
`

export default GrayCard
