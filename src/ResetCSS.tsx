import { createGlobalStyle } from "styled-components";
import { rgba } from "polished";
import { Z_INDEX } from "./constants";

const ResetCSS = createGlobalStyle`
  html {
    background-color: ${({ theme }) => theme.background} !important;
    color: ${({ theme }) => theme.colors.white};
  }

  summary::-webkit-details-marker {
    display: none;
  }

  *, *::before, *::after {
    margin: 0;
    font-family: Lexend Deca, sans-serif;
    scrollbar-color: ${({ theme }) => `${theme.colors.primaryDefault} ${rgba(theme.colors.white, 0.12)}`};
    scrollbar-width: thin;
  }

  #root {
    position: relative;
    z-index: ${Z_INDEX.content};
  }
 
  /* Scrollbar */
  
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primaryDefault};
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => rgba(theme.colors.white, 0.12)};
    border-radius: 4px;
  }

`;

export default ResetCSS;
