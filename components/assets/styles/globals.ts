import { css } from "@emotion/core";

export const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    font-size: 62.5%;
  }

  body {
    height: 100%;
    font-size: 1.5rem;
    line-height: 1.2;
    overscroll-behavior: none;
  }
`;
