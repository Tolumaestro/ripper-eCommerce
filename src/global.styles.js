import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
body {
  font-family: "Fira Sans Condensed", sans-serif;
  padding: 20px 40px;

  @media screen and (max-width: 800px) {
    padding: 10px;
  }
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: gray;
}

* {
  box-sizing: border-box;
}

`