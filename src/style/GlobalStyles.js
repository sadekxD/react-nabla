import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
      font-family: 'Poppins', sans-serif;
      background-color: rgb(17, 23, 25);
  }
  
  input, button {
      border: none;
      background: transparent;
      &:focus {
        outline: none;
      }
  }

  ul {
    list-style: none;
  }

  a {
      text-decoration: none;
      color: #fff;
  }
`;
