// src/assets/styles/global-styles.ts
import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { normalize } from 'styled-normalize';

export const color = {
  selectedBlueFont: '#138EFF',
  defaultBlackFont: '#333333',
  secondaryBlackFont: '#666666',
  disabledFont: '#D2D2D2',
  defaultBackground: '#FAFAFA',
};

export type Palette = { [K in keyof typeof color]: K };

export const theme: DefaultTheme = {
  palette: color as Palette,
};

const GlobalStyle = createGlobalStyle`
  ${normalize}
  @font-face {
    font-family: "Gmarket Sans";
    src: local("./assets/font/GmarketSansTTFLight.ttf") format('truetype');
    font-weight: 300;
  }
  @font-face {
    font-family: "Gmarket Sans";
    src: local("./assets/font/GmarketSansTTFMedium.ttf");
    font-weight: 500;
  }
  @font-face {
    font-family: "Gmarket Sans";
    src: local("./assets/font/GmarketSansTTFBold.ttf");
    font-weight: 700;
  }
  * {
    margin: 0px;
    padding: 0px; 
  }

  body {
    width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    .root {
      position: relative;
    }
  }

  h1, h2, h3, h4, h5, h6, p, a, div, span, button {
    font-family: 'Noto Sans KR', 'Gmarket Sans' sans-serif;
  }
`;

export default GlobalStyle;
