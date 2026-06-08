import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global.jsx';
import { AppRoutes } from './routes';
import { ProvedorFavoritos } from './contexts/FavoritesContext';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ProvedorFavoritos>
        <AppRoutes />
      </ProvedorFavoritos>
    </ThemeProvider>
  );
}