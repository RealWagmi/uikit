import styled from "styled-components";
import { rgba } from "polished";

export const Wrapper = styled.button`
  display: flex;
  align-items: center;
  background: ${({ theme }) => rgba(theme.colors.dimGray, 0.08)};
  border: 0.5px solid ${({ theme }) => rgba(theme.colors.dimGray, 0.2)};
  border-radius: 12px;
  padding: 2px 16px;
  width: fit-content;
`;

export const ArrowWrapper = styled.div`
  margin-right: 8px;
  height: 20px;
`;

export const Text = styled.p`
  //font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.25px;
  color: ${({ theme }) => theme.colors.gray};
  margin: 0;
`;

export const Divider = styled(Text)`
  margin: 0 10px;
`;

export const LinkText = styled.button`
  text-decoration: none;
`;
