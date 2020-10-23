import { createGlobalStyle } from 'styled-components';
import { DefaultTheme } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
  }

  button, input {
    outline: 0;
  }
`;

const Theme: DefaultTheme = {
  colors: {
    primary: '#8A1EBE',
    secondary: '#D57DFF',
    tertiary: '#E9D2F2',
    white: '#FFFFFF',
    text: 'rgba(17, 17, 17, 0.7)',
    black: '#000000',
  },
};

export { GlobalStyles, Theme };
