import styled, { createGlobalStyle, DefaultTheme } from 'styled-components';
import { normalize } from 'styled-normalize';

export const color = {
  selectedBlueFont: '#138EFF',
  defaultBlackFont: '#333333',
  secondaryBlackFont: '#666666',
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
    overflow-x: hidden;
    min-height: 100vh;
    position: relative;
  }

  h1, h2, h3, h4, h5, h6, p, a, div, span, button {
    font-family: 'Noto Sans KR', 'Gmarket Sans' sans-serif;
  }
`;

export const AppContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 215px);
`;

export default GlobalStyle;
