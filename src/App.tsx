import React from 'react';
import Routes from './routes';
import { ThemeProvider } from 'styled-components';
import { Theme, GlobalStyles } from './styles';
import Helmet from './components/helmet';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Helmet />
      <Routes />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
