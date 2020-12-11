import { createGlobalStyle } from "styled-components";

export const light = {
  body: "#ffffff",
  color: "#000000"
}

export const dark = {
  body: "#212121",
  color: "#ffffff"
}

export const GlobalStyles = createGlobalStyle`
    body {
      background-color: ${props => props.darkMode.body};
      color: ${props => props.darkMode.color}
    }
`;