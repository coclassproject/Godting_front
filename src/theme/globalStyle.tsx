import { Global, css } from '@emotion/react';
import reset from 'emotion-reset';
import React from 'react';
import { lightTheme, ThemeType } from '.';

interface GlobalStyleProps {
  theme: ThemeType;
}

const GlobalStyle = () => (
  <Global
    styles={css`
      ${reset} html, body, #__next {
        margin: 0;
        padding: 0;
        height: 100%;
      }

      body {
        overflow-x: hidden;
        width: 100%;
        font-family: 'Noto Sans KR', NanumSquare, notokr, 'Nanum Gothic', 'Malgun Gothic', sans-serif;
      }

      a {
        text-decoration: none;
        outline: none;
        color: ${lightTheme.LINE_WHITE_COLOR};
      }

      button {
        border: 1px solid #000;
      }
    `}
  />
);

export default GlobalStyle;
