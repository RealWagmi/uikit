import { createGlobalStyle } from "styled-components";
import { rgba } from "polished";

const ResetCSS = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    font-family: Lexend Deca, sans-serif;
  }

  #root {
    position: relative;
    z-index: 1;
  }
 
  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primaryDefault};
    border-radius: 3px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => rgba(theme.colors.white, 0.12)};
    border-radius: 3px;
  }

`;

export default ResetCSS;
