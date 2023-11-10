import styled from "styled-components";
import { Box, Flex } from "../Box";

export const Wrapper = styled(Flex)`
  align-items: center;
  border-radius: 12px;
  padding: 2px 16px;
  width: fit-content;
`;

export const ArrowWrapper = styled(Box)`
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
  margin: 0;
`;

export const Divider = styled(Text)`
  margin: 0 10px;
`;

export const LinkText = styled.button`
  text-decoration: none;
`;
