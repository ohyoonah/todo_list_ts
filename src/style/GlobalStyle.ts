import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --black: #282c37;
    --blue-gray: #9baec8;
    --light-gray: #d9e1e8;
    --blue: #2b90d9;
    --red: #f1404b;
    --light-red: #ff8787;
    --yellow: #ffde00;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background: var(--light-gray);
  }
`;

export default GlobalStyle;
