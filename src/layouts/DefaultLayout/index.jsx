import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { LayoutContainer, Content } from './style';
import { ToastProvider } from '../../components/Toast';

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
      <ToastProvider />
    </LayoutContainer>
  );
}