import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --dark-text: #111621;
    --magnolia: #F5F0F6;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    font-family: montserrat;
  }
  body {
    background: var(--color-background);
    color: var(--color-text);
  }
  a {
    color: var(--color-text);
  }
`;

export default GlobalStyles;