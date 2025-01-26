import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    height: 100vh;
    width: 100%; 
    background-color: #F5F5F7;
  }

  body {
    font-family: 'Space Grotesk', sans-serif;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    place-items: flex-start;
  }

  a {
    font-weight: 500;
    color: #D06666;
    text-decoration: inherit;
  }

  a:hover {
    color: #D06666;
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }

  button:hover {
    border-color: #646cff;
  }

  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }

  @media (prefers-color-scheme: light) {
    body {
      color: #213547;
      background-color: #ffffff;
    }
    a:hover {
      color: #FFF;
    }
    button {
      background-color: #f9f9f9;
    }
  }
`;

export default GlobalStyle;
