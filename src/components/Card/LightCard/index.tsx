import styled from "styled-components";
import Card from "../Card";

const LightCard = styled(Card)`
  border: 1px solid ${({ theme }) => theme.lightCard.border};
  background-color: ${({ theme }) => theme.lightCard.background};
`;

export default LightCard;
