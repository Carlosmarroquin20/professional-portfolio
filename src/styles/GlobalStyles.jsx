
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    color: #333;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  nav a {
    margin: 0 1rem;
  }
`;

export default GlobalStyles;
