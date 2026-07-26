import { ThemeProvider } from 'styled-components';
import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import queryClient from './lib/queryClient';
import { AuthProvider } from './context/AuthContext';
import router from './router/index';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 4000,
              style: {
                fontSize: '1.6rem',
                fontFamily: theme.fonts.primary,
              },
              success: { style: { background: theme.colors.successGreen, color: '#fff' } },
              error: { style: { background: theme.colors.errorRed, color: '#fff' } },
            }}
          />
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
