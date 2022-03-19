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
        background-color: ${lightTheme.TITLE_BLACK_COLOR};
        font-family: NanumSquare, 'Noto Sans KR', notokr, 'Nanum Gothic', 'Malgun Gothic', sans-serif;
      }

      a {
        text-decoration: none;
        outline: none;
        color: ${lightTheme.LINE_WHITE_COLOR};
      }

      button {
        border: 1px solid #000;
      }

      input[type='range'] {
        -webkit-appearance: none;
        width: 100%;
        height: 6px;
        background: #d5d4d3;
        cursor: pointer;
        border-radius: 0; /* iOS */
        transition: background 450ms ease-in;
      }

      input[type='range']:focus {
        outline: none;
      }

      input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 12px;
        height: 12px;
        background: #fff;
        border: 1px solid dodgerblue;
        border-radius: 50%;
        cursor: pointer;
      }

      input[type='range']::-ms-track {
        width: 100%;
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        color: transparent;
      }
    `}
  />
);

export default GlobalStyle;
