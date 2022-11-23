import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { color } from "./colorPalette";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    
    margin: 0;
    padding: 0;
  }

  body {
    background: ${color.lightGray}
  }

  button {
    border: 0;
    background: 0;
  }
`;

export default GlobalStyle;
