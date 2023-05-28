import styled from "styled-components";
import Card from "../Card";

const OutlineCard = styled(Card)`
  border: 1px solid ${({ theme }) => theme.outlineCard.border};
`;

export default OutlineCard;
