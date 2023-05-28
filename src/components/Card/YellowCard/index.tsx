import styled from "styled-components";
import Card from "../Card";

const YellowCard = styled(Card)`
  background-color: ${({ theme }) => theme.yellowCard.background};
  color: ${({ theme }) => theme.yellowCard.color};
  font-weight: 500;
`;

export default YellowCard;
