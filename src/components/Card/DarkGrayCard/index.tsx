import styled from 'styled-components'
import Card from "../Card";

const DarkGrayCard = styled(Card)`
  background-color: ${({ theme }) => theme.darkGrayCard.background};
`

export default DarkGrayCard