// src/assets/styles/global-styles.ts
import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { normalize } from 'styled-normalize';

export const color = {
  selectedBlueFont: '#138EFF',
  defaultBlackFont: '#333333',
  disabledFont: '#D2D2D2',
  introduceContentFont: '#666666',
};

export type Palette = { [K in keyof typeof color]: K };

export const theme: DefaultTheme = {
  palette: color as Palette,
};

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    -webkit-print-color-adjust: exact;
    box-sizing: border-box;
    margin: 0px;
    padding: 0px; 
  }

  h1, h2, h3, h4, h5, h6, p, a, div, span, button {
    font-family: 'Noto Sans KR', sans-serif;
  }

  a, a:visited {
     text-decoration: none;
  }

  a:hover {
    font-weight: 700;
  }
`;

export default GlobalStyle;
