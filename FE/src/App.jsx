import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyle';
import Theme from './styles/Theme';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
