import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  

  body {
      font-family: 'Poppins', sans-serif;
      background-color: rgb(17, 23, 25);
      min-height: 100vh;
      scroll-behavior: smooth;
      text-rendering: optimizeSpeed;
      line-height: 1.5;
  }

  .main {
    margin-top: 72px;
  }

  img {
    width: 100%;
    object-fit: cover;
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
