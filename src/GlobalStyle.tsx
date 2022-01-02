// src/assets/styles/global-styles.ts
import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { normalize } from 'styled-normalize';

export const color = {
  selectedBlueFont: '#138EFF',
  defaultBlackFont: '#333333',
  disabledFont: '#D2D2D2',
  secondaryTextColor: '#666666',
  defaultBackground: '#FAFAFA',
};

export type Palette = { [K in keyof typeof color]: K };

export const theme: DefaultTheme = {
  palette: color as Palette,
};

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    margin: 0px;
    padding: 0px; 
  }

  body {
    width: 100vw;
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6, p, a, div, span, button {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

export default GlobalStyle;
