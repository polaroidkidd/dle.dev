import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

img, embed, object, video {
  max-width: 100%;
}

html {
  font-size: 62.5%; // 1rem = 10px (for default font size of 16px)
}

body {
  box-sizing: border-box;
}

/* Coolors Exported Palette - coolors.co/9ad1d4-80ced7-e4dfda-d29593-1a1a1d */

body {
  background-color: ${props => props.theme.primary.colorPrimaryBackground};
}

h1 {
  color: ${props => props.theme.primary.colorPrimaryHeading};
}

`;


export const theme = {
  primary: {
    colorTertiaryHeading: '#9AD1D4',
    colorSecondaryHeading: '#80CED7',
    colorPrimaryText: '#E4DFDA',
    colorPrimaryHeading: '#D29593',
    colorPrimaryBackground: '#1A1A1D',
    colorPrimaryBorder: '#0BD29E',
  }
};

export type ThemeType = typeof theme;
