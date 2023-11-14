import { createGlobalStyle } from "styled-components";

const ResetCSS = createGlobalStyle`
  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.lightTextGray};
    outline: 1px solid ${({ theme }) => theme.colors.darkGray};
    outline-offset: -1px;
    border-radius: 8px;
  }
  ::-webkit-scrollbar-track {

  }

`;

export default ResetCSS;
