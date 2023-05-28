import styled from "styled-components";
import Card from "../Card";

const LightCard = styled(Card)`
  border: 1px solid ${({ theme }) => theme.colors.chineseBlack};
  background-color: ${({ theme }) => theme.colors.darkJungleGreen};
`;

export default LightCard;
