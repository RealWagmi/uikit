import styled from "styled-components";
import { Flex } from "../Box";
import { rgba } from "polished";

export const BreadcrumbsWrapper = styled(Flex)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 2px 16px;
  border-radius: 12px;
  min-width: 89px;
  text-decoration: none;
  border: 0.5px solid ${({ theme }) => rgba(theme.colors.strokeGray, 0.2)};
  background: ${({ theme }) => rgba(theme.colors.strokeGray, 0.08)};
`;