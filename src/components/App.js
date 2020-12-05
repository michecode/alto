import React from 'react';

import { ThemeProvider } from './ThemeContext';
import GlobalStyles from './GlobalStyles';

export default function App({ children }) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}