import ButtonPrimary from "../ButtonPrimary";
import styled from "styled-components";

const SmallButtonPrimary = styled(ButtonPrimary)`
  width: auto;
  font-size: 16px;
  padding: ${({ padding }) => padding ?? "8px 12px"};

  background: linear-gradient(90.52deg, #ddc194 0%, #9a7d49 100%);
  box-shadow: 0 5px 13px -4px rgba(168, 115, 20, 0.2);
  border-radius: 16px;
`;

export default SmallButtonPrimary;
