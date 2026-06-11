import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global.jsx';
import { AppRoutes } from './routes';
import { ProvedorFavoritos } from './contexts/FavoritesContext';
import { AuthProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <GlobalStyle />
      <AuthProvider>
      <ProvedorFavoritos>
        <AppRoutes />
      </ProvedorFavoritos>
      </AuthProvider>
    </ThemeProvider>
  );
}