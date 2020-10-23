import React from 'react';
import Routes from './routes';
import { ThemeProvider } from 'styled-components';
import { Theme, GlobalStyles } from './styles';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Routes />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
