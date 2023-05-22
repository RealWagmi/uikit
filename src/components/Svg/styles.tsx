import styled from "styled-components";

export const StyledIconContainer = styled.div<{ activeBackgroundColor?: string }>`
  background: ${({ activeBackgroundColor, theme }) =>
    activeBackgroundColor ? theme.colors[activeBackgroundColor] : "transparent"};
`;
